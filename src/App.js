import React, { useState } from 'react';
import './App.css';

function App() {
  const [idUsuario, setIdUsuario] = useState('');
  const [infoUsuario, setInfoUsuario] = useState(null);

  const handleInputChange = (event) => {
    setIdUsuario(event.target.value);
  };

  const handleBuscarUsuario = () => {
    fetch(`https://reqres.in/api/users/${idUsuario}`)
      .then(response => response.json())
      .then(data => {
        setInfoUsuario(data);
      })
      .catch(error => {
        console.error('Error al buscar usuario:', error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="bp">
          <b><h3>Buscador de persona</h3></b>
          <label htmlFor="usuario"> Ingrese un número para Buscar</label>

          <div>
            <div>
              <input
                type="text"
                placeholder="Ingrese ID de usuario"
                value={idUsuario}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button onClick={handleBuscarUsuario}>Buscar Usuario</button>
            </div>
          </div>

          {infoUsuario && (
            <div>
              <h4>Información del Usuario:</h4>
              <p>ID: {infoUsuario.data.id}</p>
              <p>Nombre: {infoUsuario.data.first_name}</p>
              <p>Apellido: {infoUsuario.data.last_name}</p>
              <img src={infoUsuario.data.avatar} alt="Avatar del usuario" />
            </div>
          )}

        </div>
        {infoUsuario && (
          <div className="avatar-container">
            <img src={infoUsuario.data.avatar} alt="Avatar del usuario" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
