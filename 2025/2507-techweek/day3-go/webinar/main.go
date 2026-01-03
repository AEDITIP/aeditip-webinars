package main

import (
	"log"
	"net/http"
)

func main() {
	almacen := NuevoAlmacenTareas("tareas.csv")

	http.HandleFunc("/", almacen.manejarIndice)
	http.HandleFunc("POST /tareas", almacen.manejarCrear)
	http.HandleFunc("POST /tareas/{id}/alternar", almacen.manejarAlternar)
	http.HandleFunc("DELETE /tareas/{id}", almacen.manejarEliminar)

	log.Println("Manejadores registrados")
	log.Println("Servidor iniciando en :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
