import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa los componentes necesarios de React Router
import Inicio from './inicio'; // Importa el componente Inicio
import imagenProductos from './ima/productos.png'; // Importa la imagen

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda de Abarrotes Django</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section>
          <h2>Productos Destacados</h2>
          <img src={imagenProductos} alt="Productos destacados" />
          <p>¡Encuentra los mejores productos aquí!</p>
        </section>
        <section>
          <h2>Ofertas Especiales</h2>
          <img src={imagenProductos} alt="Ofertas especiales" />
          <p>Aprovecha nuestras increíbles ofertas.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2024 Tienda de Abarrotes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;