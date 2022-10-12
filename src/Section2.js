import React from "react";
import imagenS2 from "./images/L'Arbre de la vie 2.jpg"

function Section2(){
    return(<div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src={imagenS2} alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white"><a href="/AR_Installation.html">AR Installation</a></h4>
                                    <p className="mb-0 text-white-50">El Viaje Definitivo</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

    export default Section2