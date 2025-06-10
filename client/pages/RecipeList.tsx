import { Link } from 'react-router'
import { useAllMyRecipes } from '../hooks/api'
import * as fn from '../components/Functions.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function MyRecipeList() {
  const userId = useAuth0().user?.sub as string // Get User ID

  const list = useAllMyRecipes(userId)

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

export default MyRecipeList
