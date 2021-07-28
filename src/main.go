package main

import (
	"context"
	"fmt"
	"github.com/gobuffalo/packr"
	"log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"strings"
	"syscall"
)

type fileHandler struct {
	handler http.Handler
}

func fileServer(h http.Handler) http.Handler {
	return &fileHandler{h}
}

type indexHandler struct { }

func (i *indexHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write([]byte("awesome docker!"))
	if err != nil {
		fmt.Printf("something error ...")
	}
}

func (f *fileHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	box := packr.NewBox("./static")

	fmt.Println(GetAppPath() + "/static" + path)
	if _, err := box.FindString(path); os.IsNotExist(err) {
		if err != nil {
			fmt.Println(err)
		}
		return
	}
	f.handler.ServeHTTP(w, r)
}

func GetAppPath() string {
	file, _ := exec.LookPath(os.Args[0])
	path, _ := filepath.Abs(file)
	index := strings.LastIndex(path, string(os.PathSeparator))

	return path[:index]
}

func main() {
	fmt.Println(GetAppPath())
	mux := http.NewServeMux()
	box := packr.NewBox("./static")
	f := fileServer(http.FileServer(box))
	mux.Handle("/", &indexHandler{})
	mux.Handle("/jd/", f)
	mux.Handle("/pinyou/", f)
	mux.Handle("/pokemon/", f)
	mux.Handle("/suning/", f)
	mux.Handle("/ctrip/", f)
	mux.Handle("/shopping/", f)

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
