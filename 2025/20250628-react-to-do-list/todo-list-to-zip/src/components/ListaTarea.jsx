import * as React from "react";
import TareaItem from "./TareaItem";

const ListaTarea = (props) => {
  const { tareas = [] } = props;
  return (
    <ol>
      {tareas.map((tarea) => (
        <TareaItem name={tarea.name} estaCumplida={tarea.estaCumplida} />
      ))}
    </ol>
  );
};
export default ListaTarea;
