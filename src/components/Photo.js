import React from "react"
import photo from "../images/Photo.jpg"

function Photo(){
    return(
        <div className="Photo">
            <img src={photo} alt="Estevão"/>
            <h1> 
                Estevão Gomes
            </h1>
            <h3>
                Fullstack Developer
            </h3>
            <h4><a href="">My Web Page</a></h4>
        </div>
    );
}

export default Photo