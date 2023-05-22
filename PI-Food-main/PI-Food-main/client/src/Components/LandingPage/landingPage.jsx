import * as React from "react";
import { Link } from "react-router-dom";
import fondo from "../LandingPage/fondo.jpg"
import style from "../LandingPage/LandingPage.module.css"
export default function LandingPage(){
    return (
       <div className={style.Landing}>  
        <h1 className={style.Fuente}>Bienvenidos a food</h1> 
          <button className={style.Boton}>
            <Link to='/home'>Home</Link>
          </button>
            <img 
            className={style.Imagen}
            src={fondo}
            alt="Imagen de Fondo"
            />       
       </div>
    );
}