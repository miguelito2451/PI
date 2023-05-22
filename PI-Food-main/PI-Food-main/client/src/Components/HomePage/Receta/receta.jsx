import style from '../Receta/receta.module.css'

export default function Receta({id, name, healthScore, instructions, image,
   resume, diets, onClose}) {
   return (
         <div className={style.Receta}>
            <h1>Nombre: {name}</h1>
            <h3>Puntaje: {healthScore}</h3>
            <h3>Instrucciones: {instructions}</h3>
            <h3>Receta: {resume}</h3>
            <img src={image} alt='' className={style.Image} /> 
         </div>
   );
}