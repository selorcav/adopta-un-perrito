// import React from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import MyCard from './components/MyCard'

import 'bootstrap/dist/css/bootstrap.min.css'


const perros = [
  {
    nombre: "Luna",
    imagen: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg",
    descripcion: "Dulce y leal, siempre lista para alegrar tus días con amor incondicional.",
    texto: "Labrador",
    color: "primary"
  },
  {
    nombre: "Toby",
    imagen: "https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_960_720.jpg",
    descripcion: "Juguetón y cariñoso, dispuesto a inundar tu vida con alegría y afecto.",
    texto: "Boxer",
    color: "danger"
  },
  {
    nombre: "Bella",
    imagen: "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_960_720.jpg",
    descripcion: "Inteligente y tierna, una compañera que hará que cada momento sea especial.",
    texto: "Puddle",
    color: "success"
  },
  {
    nombre: "Coco",
    imagen: "https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_960_720.jpg",
    descripcion: "Amistoso y alegre, un peludo compañero que transformará tu rutina en una experiencia divertida y emocionante.",
    texto: "Dalmata",
    color: "warning"
  },
];


export default function App() {

  return (
    <>
      <Header titulo="Adopta un perrito" />
      <div className="row">
        {perros.map((perro, index) => (
          <MyCard
            key={index}
            nombre={perro.nombre}
            imagen={perro.imagen}
            descripcion={perro.descripcion}
            texto={perro.texto}
            color={perro.color}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}
