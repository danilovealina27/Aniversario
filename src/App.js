import React, { useState } from 'react';
import './App.css';

const Pasado = () => (
  <section className="book-section pasado-theme">
    <div className="page-content">
      <h2>El Pasado</h2>
      {/* Contenido del pasado */}
    </div>
  </section>
);

const Presente = () => (
  <section className="book-section presente-theme">
    <div className="page-content">
      <h2>El Presente</h2>
      {/* Contenido del presente */}
    </div>
  </section>
);

const Futuro = () => (
  <section className="book-section futuro-theme">
    <div className="page-content">
      <h2>El Futuro</h2>
      {/* Contenido del futuro */}
    </div>
  </section>
);

function App() {
  const [seccionActual, setSeccionActual] = useState('pasado');

  return (
    <div className="app-container">
      <nav className="book-navigation">
        <button onClick={() => setSeccionActual('pasado')}>Pasado</button>
        <button onClick={() => setSeccionActual('presente')}>Presente</button>
        <button onClick={() => setSeccionActual('futuro')}>Futuro</button>
      </nav>
      
      <main className="book-container">
        {seccionActual === 'pasado' && <Pasado />}
        {seccionActual === 'presente' && <Presente />}
        {seccionActual === 'futuro' && <Futuro />}
      </main>
    </div>
  );
}

export default App;