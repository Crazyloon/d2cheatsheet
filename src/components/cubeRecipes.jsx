import { RecipeTable } from './tables';
import { cubeRecipes } from '../data/tableData';

const CubeRecipes = () => {
  return ( 
    <div>
      <h2 id="recipes" className="c-orange mt-5">Commonly Used Cube Recipes</h2>
      <RecipeTable tableData={cubeRecipes} />
    </div>
   );
}
 
export default CubeRecipes;