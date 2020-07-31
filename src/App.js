import React from 'react';
import Nav from './Nav'
import Titulo from './Titulo'
import './styles/index.css'
import imagen from './img/slide1.jpg'
import './parallax'
import CartaGameplay from './CartaGameplay';
import Footer from './Footer'

const gameplays = [
  {
    nombre: "Metal Gear Solid V",
    imagen: "https://hipertextual.com/files/2015/07/TPP.jpg",
    genero: "Infiltracion",
    autor: "-Yamoxis"
  },{
    nombre: "Red Dead Redemption 2",
    imagen: "https://generacionxbox.com/wp-content/uploads/2018/06/Red_dead_redemption_2.jpg",
    genero: "Accion",
    autor: "-Elver Galarga"
  },{
    nombre: "Super Mario Maker 2",
    imagen: "https://i.blogs.es/c81fbd/2019070208003600-bf19fbea37724338d87f26f17a3b97b2/450_1000.jpeg",
    genero: "Plataformero",
    autor: "-Yamoxis"
  },{
    nombre: "Silent Hill",
    imagen: "https://live.mrf.io/statics/i/ps/geeksbreaker.com/wp-content/uploads/2020/03/silent-hills-videogames-playstation-5-pt-destacada.jpg?width=1200&enable=upscale",
    genero: "Terror",
    autor: "- Elver Galarga"
  },{},{}
]

function App() {
  return (
    <>
      <header className="vh-100 overflow-hidden">
        <Nav />
        <div data-parallax="scroll" data-image-src={imagen} className="w-100 vh-100 parallax-window">
        </div>
      </header>
      
      <div className="container">
        <div className="mt-5 mb-4 row">
          <Titulo titulo = "Gameplays" />
        </div>
        <hr></hr>

        <div className="mb-5">
          <div className="row">
            {gameplays.map(gameplay => <CartaGameplay
              nombre = {gameplay.nombre}
              imagen = {gameplay.imagen}
              genero = {gameplay.genero}
              autor = {gameplay.autor}
            />)}
          </div>
        </div>
      </div>

      <Footer />
      
      

    </>
  );
}

export default App;
