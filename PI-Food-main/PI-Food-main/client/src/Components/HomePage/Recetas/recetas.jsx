import Receta from '../Receta/receta';
import style from '../Recetas/recetas.modules.css'

export default function Recetas({recetas}) {
   return ( 
   <div className={style.Recetas}>
      {
         recetas.map(({recipe},i) => {
            console.log(recipe.title);
               return  (
                  <Receta
                     key={recipe.id}
                     id={recipe.id}
                     name={recipe.title}
                     image={recipe.image}
                     resume={recipe.summary} 
                     healthScore={recipe.healthScore}    
                     instructions={recipe.instructions}      
                  />
               )
            }
         )
      }
   </div>
   );
}