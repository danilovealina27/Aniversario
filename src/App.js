import React, { useState } from 'react';
import './App.css';

const Pasado = () => (
  <div className="page-content pasado-theme">
    <h2>El Pasado</h2>
    <p>Hace 5 años que nos conocemos, quiero pensar en como era antes de conocerte, me di cuenta de que ese Dani ha cambiado mucho, era alguien que no se quería a si mismo, que no tenía un futuro claro ni nadie con quien compartirlo, estaba solo y con un gran vacio en el interior que no comprendía, porque tenia a gente a mi alrededor, tenía a mis amigos y a mi familia, pero me faltaba algo, y ese algo eras tú.</p>
    <br></br>
    <p>Hace 5 años comenzamos esta bonita aventura juntos , una aventura que como muchos de los libros que has leido tendrá sus momentos de tensión , sus capítulos tristes y sus alegres, pero este libro tiene algo especial, no quiero saber como acaba, quiero vivir capítulo a capítulo de nuestra vida juntos.</p>
      <br></br>
    <p>Como dice en uno de los libros que más te gustan: No quiero parar de hablar, quiero decirte de mil maneras mas cuanto te quiero, todavía no te lo he dicho suficiente, y hay muchas más maneras de decirtelo que me gustaria enseñarte.  </p>
  </div>
);

const Presente = () => (
  <div className="page-content presente-theme">
    <h2>El Presente</h2>
    <p>Ahora mismo estoy al lado tuya esperando a que leas todo lo que te he escrito, pero en el preciso instante en el que escribo esto estoy pensando en lo afortunado que soy de tenerte, en lo orgulloso que me siento de poder tener a alguien como tu a mi lado, que me puedo pasar horas haceindo cualquier tonteria con tal de que la veas y te rias o llores, pero siempre de felicidad, podría pasarme la vida entera buscando cualquier momento de ella para hacerte feliz, el pasado ya ha pasado, ahora mismo disfruto del presente y no hay nada que disfrute más que estar contigo.</p>
    <br></br>
    <p>La gente suele prometer un futuro al lado de la persona que ama, me parece que aunque es algo bonito decir que te esforzaras en un futuro por seguir al lado de esa persona, no es suficiente, asi que yo te prometo un presente a tu lado, aunque sea en la distancia, prometo que momento a momento siempre que me necesites voy a estar ahí. </p>
    <br></br>
    <p>Me haces muy feliz siempre que te veo sonreir, cada vez que agarras mi mano o simplemente cada vez que andamos juntos, me siento afortunado de tenerte. </p>
    <br></br>
    <p>Desde este momento hasta el ultimo momento, soy tuyo.</p>
  </div>
);

const Futuro = () => (
  <div className="page-content futuro-theme">
    <h2>El Futuro</h2>
    <p>No me imagino un futuro en el que no esté a tu lado, por suerte, tampoco tengo que hacerlo, siempre voy a poder contar contigo, y eso es algo que no todos pueden decir de sus parejas, pero tu más que mi pareja, eres la persona que más amo, la mujer que más admiro, y lo más importante,eres mi futuro soñado.</p>
    <br></br>
    <p>Pienso envejecer a tu lado, y eso no es negociable, cuando tengamos arrugas y yo ya vea peor que tú, podré seguir afirmando que eres la mujer más bella que han visto mis ojos, con la voz mas dulce que han escuchado mis oidos y con el corazón más bueno que alguna vez conocio el mío.</p>
    <br></br>
    <p>Pensar en todo lo que vamos a pasr juntos solo me dan ganas de seguir, eres mi motivo por el que avanzo, y siempre que avanzo siento que lo hago a un futuro mejor, porque todo a tu lado mejora, desde los momentos buenos hasta los malos, no hay nada mejor que poder compartir mi vida contigo. Te amo cara a cara y palabra a palabra.</p>
    <br></br>
    <p>Eres digna de ser amada. Mereces sentir alegría ahora mismo, incluso en la oscuridad. Y por si te lo preguntas... no voy a ir a ninguna parte, a menos que me pidas que me vaya; y aun así, es posible que tengamos que negociar.</p>
  </div>
);

function App() {
  const [seccionActual, setSeccionActual] = useState('pasado');
  const [animacion, setAnimacion] = useState('fade-in');

  const cambiarSeccion = (nuevaSeccion) => {
    // Si ya estamos en la sección, no hacemos nada
    if (nuevaSeccion === seccionActual) return;
    
    // 1. Iniciamos el desvanecimiento (fade-out)
    setAnimacion('fade-out');

    // 2. Esperamos a que la opacidad baje a 0, cambiamos el tema y volvemos a subirla
    setTimeout(() => {
      setSeccionActual(nuevaSeccion);
      setAnimacion('fade-in');
    }, 400); // Estos 400ms deben coincidir con la velocidad en el CSS
  };

  return (
    <div className="app-container">
      <header className="top-bookmarks">
        <button 
          className={`tab tab-pasado ${seccionActual === 'pasado' ? 'active' : ''}`} 
          onClick={() => cambiarSeccion('pasado')}>
          Pasado
        </button>
        <button 
          className={`tab tab-presente ${seccionActual === 'presente' ? 'active' : ''}`} 
          onClick={() => cambiarSeccion('presente')}>
          Presente
        </button>
        <button 
          className={`tab tab-futuro ${seccionActual === 'futuro' ? 'active' : ''}`} 
          onClick={() => cambiarSeccion('futuro')}>
          Futuro
        </button>
      </header>

      <main className="main-content">
        {/* El contenedor del libro aplica la clase de animación */}
        <div className={`book-container ${animacion}`}>
          {seccionActual === 'pasado' && <Pasado />}
          {seccionActual === 'presente' && <Presente />}
          {seccionActual === 'futuro' && <Futuro />}
        </div>
      </main>
    </div>
  );
}

export default App;