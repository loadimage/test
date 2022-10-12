import React from "react";
import imagen from "./images/Book_Dying.jpg"
function Section3(){
    return (<div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
    <div className="col-lg-6"><img className="img-fluid" src={imagen} alt="..." /></div>
    <div className="col-lg-6">
        <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                    
                    <h4 className="text-white"><a href="/Performances.html">Performances</a></h4>
                    <p className="mb-0 text-white-50">Interdisciplinary projects</p>
                    <hr className="d-none d-lg-block mb-0 ms-0" />
                </div>
            </div>
        </div>
    </div>
</div>)
}

export default Section3