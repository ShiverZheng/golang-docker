FROM golang:latest
WORKDIR /root/src
COPY ./ /root/src
RUN go env -w GOPROXY=https://goproxy.cn,direct
RUN go build -o helloworld
ENTRYPOINT ["./helloworld"]
