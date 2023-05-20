import fondo from "../LandingPage/fondo.jpg"
import style from "../LandingPage/LandingPage.module.css"
export default function LandingPage(){
    return (
       <div className={style.Landing}>
        <h3>Hola Bienvenidos.</h3>
          <div className={style.Div}>
            <img 
            className={style.Imagen}
            src={fondo}
            />
        </div>
        
         
       </div>
    );
}