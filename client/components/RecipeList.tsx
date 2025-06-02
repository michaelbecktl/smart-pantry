import data from '../../data.json'
import { Recipe, RecipeData } from '../../models/foodbank'

function RecipeList() {
  const list: RecipeData[] = data.foodbank //To be updated with Database

  return (
    <div>
      {list.map((recipe) => {
        return (
          // Displays each recipe in it's box
          <div key={recipe.name} className="recipelist">
            <img
              className="listthumbnail"
              src={recipe.imgUrl}
              alt={recipe.name}
            />
            <h3>{recipe.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
