package main

import (
	"encoding/csv"
	"fmt"
	"os"
	"time"
)

type AlmacenTareas struct {
	rutaArchivo string
}

func NuevoAlmacenTareas(rutaArchivo string) *AlmacenTareas {
	return &AlmacenTareas{rutaArchivo: rutaArchivo}
}

func (a *AlmacenTareas) ObtenerTodas() ([]Tarea, error) {
	archivo, err := os.Open(a.rutaArchivo)
	if err != nil {
		if os.IsNotExist(err) {
			return []Tarea{}, nil
		}
		return nil, err
	}
	defer archivo.Close() // defer se ejecuta cuando la función termina - ¡patrón super útil!

	lector := csv.NewReader(archivo)
	registros, err := lector.ReadAll()
	if err != nil {
		return nil, err
	}

	tareas := make([]Tarea, 0, len(registros))
	for _, registro := range registros {
		if len(registro) != 4 {
			continue
		}

		completada := registro[2] == "true"
		creadaEn, _ := time.Parse(time.RFC3339, registro[3])

		tareas = append(tareas, Tarea{
			ID:         registro[0],
			Titulo:     registro[1],
			Completada: completada,
			CreadaEn:   creadaEn,
		})
	}

	return tareas, nil
}

func (a *AlmacenTareas) Agregar(tarea Tarea) error {
	archivo, err := os.OpenFile(a.rutaArchivo, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		return err
	}
	defer archivo.Close()

	escritor := csv.NewWriter(archivo)
	defer escritor.Flush()

	registro := []string{
		tarea.ID,
		tarea.Titulo,
		fmt.Sprintf("%t", tarea.Completada),
		tarea.CreadaEn.Format(time.RFC3339),
	}

	return escritor.Write(registro)
}

func (a *AlmacenTareas) Alternar(id string) error {
	tareas, err := a.leerTodas()
	if err != nil {
		return err
	}

	for i := range tareas {
		if tareas[i].ID == id {
			tareas[i].Completada = !tareas[i].Completada
			break
		}
	}

	return a.escribirTodas(tareas)
}

func (a *AlmacenTareas) Eliminar(id string) error {
	tareas, err := a.leerTodas()
	if err != nil {
		return err
	}

	filtradas := make([]Tarea, 0, len(tareas))
	for _, tarea := range tareas {
		if tarea.ID != id {
			filtradas = append(filtradas, tarea)
		}
	}

	return a.escribirTodas(filtradas)
}

// Métodos auxiliares
func (a *AlmacenTareas) leerTodas() ([]Tarea, error) {
	archivo, err := os.Open(a.rutaArchivo)
	if err != nil {
		if os.IsNotExist(err) {
			return []Tarea{}, nil
		}
		return nil, err
	}
	defer archivo.Close()

	lector := csv.NewReader(archivo)
	registros, err := lector.ReadAll()
	if err != nil {
		return nil, err
	}

	tareas := make([]Tarea, 0, len(registros))
	for _, registro := range registros {
		if len(registro) != 4 {
			continue
		}

		completada := registro[2] == "true"
		creadaEn, _ := time.Parse(time.RFC3339, registro[3])

		tareas = append(tareas, Tarea{
			ID:         registro[0],
			Titulo:     registro[1],
			Completada: completada,
			CreadaEn:   creadaEn,
		})
	}

	return tareas, nil
}

func (a *AlmacenTareas) escribirTodas(tareas []Tarea) error {
	archivo, err := os.Create(a.rutaArchivo)
	if err != nil {
		return err
	}
	defer archivo.Close()

	escritor := csv.NewWriter(archivo)
	defer escritor.Flush()

	for _, tarea := range tareas {
		registro := []string{
			tarea.ID,
			tarea.Titulo,
			fmt.Sprintf("%t", tarea.Completada),
			tarea.CreadaEn.Format(time.RFC3339),
		}
		if err := escritor.Write(registro); err != nil {
			return err
		}
	}

	return nil
}
