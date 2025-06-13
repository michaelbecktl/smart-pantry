import { useState } from 'react'
import { IngredientData, RecipeData } from '../../models/foodbank'
import { useRecipeIngredients } from '../hooks/api'
import { usePrice } from '../hooks/price'
import { twoDecimals } from './Functions'

interface Props {
  data: RecipeData
}

function RecipeCost(props: Props) {
  const [rate, setRate] = useState({ discard: 10, cost: 33 })
  const ingredients = useRecipeIngredients(props.data.id)
  const priceList = usePrice(props.data.id)

  if (ingredients.isPending || priceList.isPending) {
    return
  }
  if (ingredients.isError || priceList.isError) {
    return <p>Something went wrong...</p>
  }

  const grossCost = (): number => {
    let grossCost = 0
    for (let i = 0; i < ingredients.data.length; i++) {
      const ingredientCost = twoDecimals(
        ingredients.data[i].amount * priceList.data[i].dataCost,
      )
      grossCost += ingredientCost
    }
    return grossCost
  }

  const totalCost = (): number => {
    const gross = grossCost()
    const discard = (gross / 100) * Number(rate.discard)
    return gross + discard
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.id
    let value = Number(e.target.value)
    if (value > 100) value = 100
    if (value < 0) value = 0
    setRate({ ...rate, [property]: value })
  }

  const estimatedSales = (): number => {
    return (totalCost() * 100) / rate.cost
  }

  return (
    <div>
      <table>
        <tr>
          <th>Ingredient</th>
          <th>Amount</th>
          <th>Metric</th>
          <th>Cost/Unit</th>
          <th>Cost</th>
        </tr>

        {ingredients.data.map((ingredient: IngredientData, index: number) => {
          return (
            <>
              <tr key={ingredient.ingredientId}>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.metric}</td>
                <td>${priceList.data[index].dataCost}</td>
                <td>
                  $
                  {twoDecimals(
                    ingredient.amount * priceList.data[index].dataCost,
                  )}
                </td>
              </tr>
            </>
          )
        })}
        <tr>
          <td colSpan={4}>Gross Cost</td>
          <td>${twoDecimals(grossCost())}</td>
        </tr>
        <tr>
          <td colSpan={4}>Discard Percentage</td>
          <td>
            <input
              type="number"
              id="discard"
              value={rate.discard}
              onChange={handleChange}
            />
            %
          </td>
        </tr>
        <tr>
          <td colSpan={4}>Total Cost</td>
          <td>${twoDecimals(totalCost())}</td>
        </tr>
        <tr>
          <td colSpan={4}>Cost Percentage</td>
          <td>
            <input
              type="number"
              id="cost"
              value={rate.cost}
              onChange={handleChange}
            />
            %
          </td>
        </tr>
        <tr>
          <td colSpan={4}>Estimated Sales Price</td>
          <td>${twoDecimals(estimatedSales())}</td>
        </tr>
        <tr>
          <td colSpan={4}>Estimated Sales Price/Portion</td>
          <td>${twoDecimals(estimatedSales()) / props.data.portion}</td>
        </tr>
      </table>
    </div>
  )
}

export default RecipeCost
