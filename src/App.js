import React from "react";
import Navegador from './Navegador';
import Contenido from './Contenido';
import Header from './Header';
import Section from './Section';
import Section2 from'./Section2';
import Section3 from "./Section3";
import Section4 from "./Section4";
import Project from "./Project";
import Info from "./Info";
import Footer from "./Footer";
import './App.css';
import Data from "./Data";


function App() {

  return (<div>
    <Navegador />
    <Header />
    <Contenido />
    <section className="projects-section bg-light" id="projects">
    <div className="container px-4 px-lg-5">
    <Section />
    <Section2 />
    <Section3 />
    <Section4 />
    </div>
    </section>
    
    <h2 className="skills">Front-end Development</h2>
    <h3 className="skills">&</h3>
    <h2 className="skills"><b>IT</b> Skills</h2>
    
    <section className="flex_card">
    {newArray}
    </section>
    <Info titulo="Address" info="Bruxelles, Saint Josse"/>
    <Footer />
    </div>
    )
}

export default App;
  const data = Data
  const newArray = data.map(i => {
    return <Project
    key = {i.key}
    img = {i.img}
    project = {i.project}
    nombre = {i.nombre}
    
     />
  })
console.log(newArray)
  /*const datosv = [
    {titulo :"Address", info :"Lo que sea"},
    {titulo :"Telephone", info :"Lo que sea"},
    {titulo : "E-mail", info :"Lo que sea"}]
*/ 

  /*const datosn = datosv.map(i => {
    return <Info titulo={i.titulo}
    info = {i.info} />
  })
*/