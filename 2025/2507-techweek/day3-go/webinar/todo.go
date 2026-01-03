package main

import (
	"fmt"
	"time"
)

type Tarea struct {
	ID         string
	Titulo     string
	Completada bool
	CreadaEn   time.Time
}

func NuevaTarea(titulo string) Tarea {
	return Tarea{
		ID:         generarID(),
		Titulo:     titulo,
		Completada: false,
		CreadaEn:   time.Now(),
	}
}

func generarID() string {
	return fmt.Sprintf("%d", time.Now().UnixNano())
}
