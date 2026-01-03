# Etapa de construcción
FROM golang:1.25-alpine AS constructor

WORKDIR /app

# Copiar archivos go mod
COPY go.mod go.sum ./
RUN go mod download

# Instalar CLI de templ
RUN go install github.com/a-h/templ/cmd/templ@latest

# Copiar código fuente
COPY . .

# Generar archivos templ y construir
RUN templ generate
RUN CGO_ENABLED=0 GOOS=linux go build -o app-todo .

# Etapa de ejecución
FROM alpine:latest

WORKDIR /app

# Copiar binario del constructor
COPY --from=constructor /app/app-todo .

# Crear archivo CSV vacío
RUN touch tareas.csv

EXPOSE 8081

CMD ["./app-todo"]
