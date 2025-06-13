import { IngredientData, RecipeData } from '../../models/foodbank'
import { useRecipeIngredients, useRecipeMethod } from '../hooks/api'

interface Props {
  data: RecipeData
}

function RecipeGuide(props: Props) {
  const ingredients = useRecipeIngredients(props.data.id)
  const method = useRecipeMethod(props.data.id)

  if (ingredients.isPending || method.isPending) {
    return
  }
  if (ingredients.isError || method.isError) {
    return <p>Something went wrong...</p>
  }

  return (
    <div>
      <table>
        <tr>
          <th>Ingredient</th>
          <th>Amount</th>
          <th>Metric</th>
        </tr>

        {ingredients.data.map((ingredient: IngredientData) => {
          return (
            <tr key={ingredient.ingredientId}>
              <td>{ingredient.name}</td>
              <td>{ingredient.amount}</td>
              <td>{ingredient.metric}</td>
            </tr>
          )
        })}
      </table>
      <ul>
        {method.data.map((method) => {
          return <li key={method.step}>{method.procedure}</li>
        })}
      </ul>
    </div>
  )
}

export default RecipeGuide
