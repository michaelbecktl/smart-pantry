import { Link, useParams } from 'react-router'
import data from '../../data.json'
import { Recipe, RecipeData } from '../../models/foodbank'
import { useAllMyRecipes } from '../hooks/api'

function MyRecipeList() {
  const params = useParams()
  const id = Number(params.id)
  const list = useAllMyRecipes(id)

  if (list.isPending) {
    return
  }
  if (list.isError) {
    return <p>Something went wrong...</p>
  }

  console.log(list.data)

  return (
    <div>
      {list.data.map((recipe) => {
        return (
          // Displays each recipe in it's box
          <div key={recipe.name} className="recipelist">
            <Link to={`/recipelist/${recipe.name}/${recipe.id}`}>
              <img
                className="listthumbnail"
                src={recipe.imgUrl}
                alt={recipe.name}
              />
            </Link>
            <Link to={`/recipelist/${recipe.name}/${recipe.id}`}>
              <h3>{recipe.name}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default MyRecipeList
