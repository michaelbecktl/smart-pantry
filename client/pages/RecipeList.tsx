import { Link } from 'react-router'
import { useAllRecipes } from '../hooks/api'
import * as fn from '../components/Functions.tsx'

function RecipeList() {
  const list = useAllRecipes()

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
            <Link to={`/recipe/${recipe.name}/${recipe.id}`}>
              <img
                className="listthumbnail"
                src={recipe.imgUrl}
                alt={recipe.name}
              />
            </Link>
            <Link to={`/recipe/${recipe.name}/${recipe.id}`}>
              <h3>{fn.capitaliseEvery(recipe.name)}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
