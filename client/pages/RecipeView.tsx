import { useParams } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import {
  useRecipeDetails,
  useRecipeIngredients,
  useRecipeMethod,
} from '../hooks/api'
import RecipeGuide from '../components/RecipeGuide'
import { useState } from 'react'

function RecipeView() {
  const [tab, setTab] = useState('RecipeGuide')
  const params = useParams()
  const name = params.name as string
  const id = Number(params.id)

  const user = useAuth0().user
  // const user = { // This is to test if the recipe is hidden and if it will display when accessed by non-creator
  //   sub: 'FailTest',
  // }

  const recipe = useRecipeDetails(name, id)
  const ingredients = useRecipeIngredients(id)
  const method = useRecipeMethod(id)

  if (recipe.isPending || ingredients.isPending || method.isPending) {
    return
  }
  if (recipe.isError || ingredients.isError || method.isError) {
    return <p>Something went wrong...</p>
  }
  if (recipe.data.hidden === true && user?.sub !== recipe.data.createdBy) {
    return <p>This recipe is hidden.</p>
  }

  return (
    <div>
      <img src={recipe.data.imgUrl} alt={recipe.data.name} />
      <h2>{recipe.data.name}</h2>
      <p>{recipe.data.description}</p>
      <RecipeGuide id={id} />
    </div>
  )
}

export default RecipeView
