import { IngredientData } from '../../models/foodbank'
import { useRecipeIngredients, useRecipeMethod } from '../hooks/api'

interface Props {
  id: number
}

function RecipeGuide(props: Props) {
  const ingredients = useRecipeIngredients(props.id)
  const method = useRecipeMethod(props.id)

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
