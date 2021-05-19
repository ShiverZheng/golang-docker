FROM golang:latest

# 设置必要的环境变量
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# 移动到工作目录：/workspace
WORKDIR /workspace

# 将代码添加到到容器中
ADD . /workspace

# 将静态资源打包成二进制
RUN go get -u github.com/gobuffalo/packr/packr

# 将代码编译成二进制可执行文件app
RUN cd src \
    && packr build \
    && go build -o app . \
    && packr clean \
    && rm src

# 声明服务端口
EXPOSE 8080

# 启动容器时运行的命令
CMD ["./src/app"]