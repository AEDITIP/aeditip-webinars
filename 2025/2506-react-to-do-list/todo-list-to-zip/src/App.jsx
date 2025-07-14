import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListaTarea from "./components/ListaTarea";

const listaTareas = [
  { name: "Ir a la universidad", estaCumplida: false },
  { name: "Lavar la ropa", estaCumplida: false },
  { name: "Alimentar a mi mascota", estaCumplida: true },
  { name: "Visitar a mis familiares", estaCumplida: true },
  { name: "Asistir al webinar de react 101", estaCumplida: true },
  { name: "Asistir al webinar de react avanzado", estaCumplida: false },
];

function App() {
  const [listaFiltradaTareas, setListaFiltradaTareas] = useState([]);

  const [listaFiltradaTareasNoHechas, setListaFiltradaTareasNoHechas] =
    useState([]);

  const [filtro, setFiltro] = useState("");

  const ordenar = () => {
    setListaFiltradaTareas(listaTareas.filter((tarea) => tarea.estaCumplida));
    setListaFiltradaTareasNoHechas(
      listaTareas.filter((tarea) => !tarea.estaCumplida)
    );
  };
  const filtrarPorNombre = (e) => {
    let filtroStr = e.target.value;
    filtroStr = filtroStr.toLowerCase();

    setFiltro(filtroStr);

    const nuevaListFiltradaHechas = listaTareas
      .filter((tarea) => tarea.estaCumplida)
      .filter((tarea) => tarea.name.toLowerCase().includes(filtroStr));
    setListaFiltradaTareas(nuevaListFiltradaHechas);

    const nuevaListFiltradaNoHechas = listaTareas
      .filter((tarea) => !tarea.estaCumplida)
      .filter((tarea) => tarea.name.toLowerCase().includes(filtroStr));
    setListaFiltradaTareasNoHechas(nuevaListFiltradaNoHechas);
  };


  const [tareaTem, setTareaTemp]=useState("");

  const guadarNuevaTarea=(e)=>{
      const nuevaTareaTemporal = e.target.value;
      //console.log("nuevaTareaTemporal", nuevaTareaTemporal);
      setTareaTemp(nuevaTareaTemporal);
  }
  
  function agregarTarea(){
    //borra filtro
    const nuevaTarea={name:tareaTem, estaCumplida:false};
    setTareaTemp("");
    setListaFiltradaTareasNoHechas([...listaTareas
      .filter((tarea) => !tarea.estaCumplida), nuevaTarea]);
  }
  return (
    <>
      <button onClick={ordenar}>Ordenar</button>
      <h1>ToDoList App</h1>

      <input onChange={filtrarPorNombre} value={filtro} />
      <h3>Tareas hechas:</h3>
      <ListaTarea tareas={listaFiltradaTareas} />
      <h3>Tareas pendientes:</h3>
      <ListaTarea tareas={listaFiltradaTareasNoHechas} />

      <button onClick={agregarTarea}>Agregar tarea</button>
      <input onChange={guadarNuevaTarea} value={tareaTem} />
    </>
  );
}

export default App;
