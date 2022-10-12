import React from "react";


function Project(props){
    console.log(props)
    const orbita = new Date();
    const fecha = orbita.getFullYear();
    const reloj = orbita.getHours()%12;
    const reloj2 = orbita.getMinutes()%60;
    
return(
    <div className ="contacto">
      <img className="imagenes" src={`../images/${props.img}`} alt="Contact"/>
        <div className="info">
            <h1 className="project-name">{props.project}</h1>
            <p className="nombre">{props.nombre}</p>
            <span className="descripcion">{reloj}:</span>
            <span className="descripcion">{reloj2} </span>
            <span className="descripcion"><b>{fecha}</b></span>
        </div>
    </div>)
}

export default Project