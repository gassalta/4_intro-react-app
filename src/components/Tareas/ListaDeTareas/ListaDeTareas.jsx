import React from 'react';
import Tarea from '../Tareas';

function ListaDeTareas() {
    const tareas = [
        { id: 1, texto: 'Hacer compras' },
        { id: 2, texto: 'Lavar la ropa' },
        { id: 3, texto: 'Arreglar el auto' },
    ];

    // Enviamos los parametros dentro del listado y recorremos los elementos de la lista
    return (
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <Tarea id={tarea.id} texto={tarea.texto} />
                ))}
            </ul>
        </div>
    )
}

export default ListaDeTareas;