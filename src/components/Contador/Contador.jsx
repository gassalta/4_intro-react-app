import React, { useState } from 'react'; 

function Contador() {
    // useState guarda el estado del contador
    // Recibe un dato inicial - Contador recibe el contador y el setContador lo modifica
    const [contador, setContador] = useState(0); 

    const incrementar = () => {
        setContador(contador + 1); // Incrementa el contador
    }

    const decrementar = () => {
        setContador(contador - 1); // Decrementa el contador
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>Valor: {contador}</p>

            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Contador;