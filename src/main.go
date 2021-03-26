package main

import (
"fmt"
"net/http"
)

func main() {
	http.HandleFunc("/", hello)
	server := &http.Server{
		Addr: ":80",
	}
	fmt.Println("server startup...")
	if err := server.ListenAndServe(); err != nil {
		fmt.Printf("server startup failed, err:%v\n", err)
	}
}

func hello(w http.ResponseWriter, _ *http.Request) {
	_, err := w.Write([]byte("awesome docker!"))
	if err != nil {
		fmt.Printf("something error ...")
	}
}