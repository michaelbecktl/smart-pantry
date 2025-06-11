import { IngredientData } from '../../models/foodbank'
import { useRecipeIngredients } from '../hooks/api'
import { usePrice } from '../hooks/price'

interface Props {
  id: number
}

function RecipeCost(props: Props) {
  const ingredients = useRecipeIngredients(props.id)
  const priceList = usePrice(props.id)

  if (ingredients.isPending || priceList.isPending) {
    return
  }
  if (ingredients.isError || priceList.isError) {
    return <p>Something went wrong...</p>
  }
  console.log(priceList.data)
  return (
    <div>
      <table>
        <tr>
          <th>Ingredient</th>
          <th>Amount</th>
          <th>Metric</th>
          <th>Cost/Unit</th>
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
    </div>
  )
}

export default RecipeCost
