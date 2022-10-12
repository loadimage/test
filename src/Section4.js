import React from "react";
import imagen from"./images/bookeinmal_scaled.jpg";

function Section4(){
    return(
    <div className="row gx-0 justify-content-center">
    <div className="col-lg-6"><img className="img-fluid" src= {imagen} alt="..." /></div>
    <div className="col-lg-6 order-lg-first">
        <div id="Generative" className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white"><a href="/Generative_animation.html"> Generative Animation</a></h4>
                    <p className="mb-0 text-white-50">Ein mal ist Keinmal</p>
                    <hr className="d-none d-lg-block mb-0 me-0" />
                </div>
            </div>
        </div>
    </div>
</div>
)}

export default Section4