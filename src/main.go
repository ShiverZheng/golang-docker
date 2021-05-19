package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

type fileHandler struct {
	root    http.FileSystem
	handler http.Handler
}

func fileServer(root http.FileSystem, h http.Handler) http.Handler {
	return &fileHandler{root, h}
}

type indexHandler struct {
}

func (i *indexHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write([]byte("awesome docker!"))
	if err != nil {
		fmt.Printf("something error ...")
	}
}

func (f *fileHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	if _, err := os.Stat("./static" + path); os.IsNotExist(err) {
		if err != nil {
			fmt.Printf("something error ...")
		}
		return
	}
	f.handler.ServeHTTP(w, r)
}

func main() {
	mux := http.NewServeMux()
	staticPath := http.Dir("static")
	f := fileServer(&staticPath, http.FileServer(staticPath))
	mux.Handle("/", &indexHandler{})
	mux.Handle("/jd", f)
	mux.Handle("/pinyou", f)
	mux.Handle("/pokemon", f)
	mux.Handle("/suning", f)
	mux.Handle("/ctrip", f)

	server := &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	// 创建系统信号接收器
	done := make(chan os.Signal)
	signal.Notify(done, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-done

		if err := server.Shutdown(context.Background()); err != nil {
			log.Fatal("Shutdown server:", err)
		}
	}()

	log.Println("Starting HTTP server...")
	err := server.ListenAndServe()
	if err != nil {
		if err == http.ErrServerClosed {
			log.Print("Server closed under request")
		} else {
			log.Fatal("Server closed unexpected")
		}
	}
}
