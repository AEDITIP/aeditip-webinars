package main

import (
	"net/http"
)

func (a *AlmacenTareas) manejarIndice(w http.ResponseWriter, r *http.Request) {
	tareas, err := a.ObtenerTodas()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// El método Render de Templ toma un context y un writer
	Indice(tareas).Render(r.Context(), w)
}

func (a *AlmacenTareas) manejarCrear(w http.ResponseWriter, r *http.Request) {
	// Solo aceptar POST
	if r.Method != http.MethodPost {
		http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
		return
	}

	if err := r.ParseForm(); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	titulo := r.FormValue("titulo")
	if titulo == "" {
		http.Error(w, "titulo requerido", http.StatusBadRequest)
		return
	}

	tarea := NuevaTarea(titulo)
	if err := a.Agregar(tarea); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Devolver solo el nuevo item de tarea para que HTMX lo inserte
	ItemTarea(tarea).Render(r.Context(), w)
}

func (a *AlmacenTareas) manejarAlternar(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
		return
	}

	// Extraer ID de la ruta URL
	id := r.PathValue("id")
	if id == "" {
		http.Error(w, "ID requerido", http.StatusBadRequest)
		return
	}

	if err := a.Alternar(id); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Obtener tarea actualizada y devolverla
	tareas, err := a.ObtenerTodas()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Encontrar la tarea alternada
	for _, tarea := range tareas {
		if tarea.ID == id {
			ItemTarea(tarea).Render(r.Context(), w)
			return
		}
	}

	http.Error(w, "Tarea no encontrada", http.StatusNotFound)
}

func (a *AlmacenTareas) manejarEliminar(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
		return
	}

	id := r.PathValue("id")
	if id == "" {
		http.Error(w, "ID requerido", http.StatusBadRequest)
		return
	}

	if err := a.Eliminar(id); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Devolver respuesta vacía - HTMX eliminará el elemento
	w.WriteHeader(http.StatusOK)
}
