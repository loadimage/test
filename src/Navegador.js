import React from "react";
import './style.css';


function Navegador() {
  return (<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#page-top" id="ismael">Ismael Cabello</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          
      </button>
     
      <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/About.html">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/Art.html">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
          </ul>
      </div>
  </div>
</nav>);
}

    export default Navegador