import request from 'superagent'
import { getIngredientList } from './recipe'

const rootURL = new URL(`/api/v1`, document.baseURI)

// GET requests //

export async function getAllPrice(recipeId: number) {
  const ingredients = await getIngredientList(recipeId)
  const allPrice = ingredients.map(async (item) => {
    const response = await request.get(`${rootURL}/price/${item.name}`)
    return response.body
  })
  return await Promise.all(allPrice)
}
