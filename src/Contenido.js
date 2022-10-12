import React from "react"
//import imagen from './images/La\ naissance\ de\ lesprit.jpeg'
//import './index.css';

const Contenido = ()  => {
    return( <section className="imagen about-section text-center" id="about" >
    <div className="container px-4 px-lg-5">
        {/*<img className="imagen" src={imagen} /> */}
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
                <h2 id="nft" className="text-white mb-4" >NFT's</h2>
                <a href="https://opensea.io/Steppenwolf" target="blank" id="openSea" className="navbar-toggler"><b>Open Sea </b></a>
            </div>
        </div>
    </div>
</section>
    )}

    export default Contenido