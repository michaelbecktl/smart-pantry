import request from 'superagent'
import { Recipe, RecipeData } from '../../models/foodbank'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getAllMyRecipes(userId: string) {
  const response = await request.get(`${rootURL}/recipe/u/${userId}`)
  return response.body as RecipeData[]
}

export async function getRecipeDetails(recipeName: string, recipeId: number) {
  const response = await request.get(`${rootURL}/${recipeName}/${recipeId}`)
  return response.body as Recipe
}
