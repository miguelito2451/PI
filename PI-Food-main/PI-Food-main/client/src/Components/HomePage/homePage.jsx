import * as React from "react";
import style from "../HomePage/homePage.modules.css"
import Nav from "../HomePage/Nav/nav"
import { useState } from "react";
import axios from "axios";
import Recetas from "../HomePage/Recetas/recetas"


export default function HomePage(){
    const [recetas, setRecetas] = useState([]);
    const onSearch = (id) => {
        axios(`http://localhost:3001/recipes/${id}`)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
            if (data) {
                setRecetas((oldRecetas) => [...oldRecetas, data]);
            }else {
                window.alert('!No hay Una receta con ese ID!');
            }
        })
    } 

    return (
       <div className={style.Home}>  
       <Nav onSearch={onSearch}>Buscar</Nav>
       <Recetas recetas={recetas}></Recetas>
        <h2 className={style.Home}>Home</h2>       
       </div>
    );
}