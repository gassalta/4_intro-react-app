import logo from './logo.svg';
import './App.css';

import Usuario from './components/Usuario/Usuario';

import ListaDeTareas from './components/Tareas/ListaDeTareas/ListaDeTareas';
import Contador from './components/Contador/Contador';
import {useState} from 'react';
import Saludo from './components/Saludo/Saludo';

function App() {

  // Inicio el saludo vacio
  const [mensaje, setMensaje] = useState('');
  const handlerChange = (e) => {
    // Seteo el mensaje en el saludo
    setMensaje(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Usuario nombre="Gaston Altamirano" /> */}
        <ListaDeTareas/>
        <Contador/>
        <hr/>
        <input type="text" placeholder='Ingresa un mensaje' value={mensaje} onChange={handlerChange}/>
        <Saludo mensaje={mensaje}/>{/* Paso el mensaje que recibo del campo */}
      </header>
    </div>
  );
}

export default App;
