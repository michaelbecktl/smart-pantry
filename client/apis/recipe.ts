import request from 'superagent'
import {
  IngredientData,
  Method,
  Recipe,
  RecipeData,
} from '../../models/foodbank'

const rootURL = new URL(`/api/v1`, document.baseURI)

// GET requests //

export async function getAllRecipes() {
  const response = await request.get(`${rootURL}/recipe/`)
  return response.body as RecipeData[]
}

export async function getAllMyRecipes(userId: string) {
  const response = await request.get(`${rootURL}/recipe/u/${userId}`)
  return response.body as RecipeData[]
}

export async function getRecipeDetails(recipeName: string, recipeId: number) {
  const response = await request.get(
    `${rootURL}/recipe/${recipeName}/${recipeId}`,
  )
  return response.body as Recipe
}

export async function getIngredientList(recipeId: number) {
  const response = await request.get(`${rootURL}/ingredients/${recipeId}`)
  return response.body as IngredientData[]
}

export async function getMethodList(recipeId: number) {
  const response = await request.get(`${rootURL}/method/${recipeId}`)
  return response.body as Method[]
}

// POST requests //

export async function addNewRecipe(newRecipe) {
  const { name, description, imgUrl, ingredient, hidden, method } = newRecipe
  const response = await request.post(`${rootURL}/recipe`).send({
    name: name,
    description: description,
    imgUrl: imgUrl,
    hidden: hidden,
  })
  const id = response.body.id
  await request.post(`${rootURL}/ingredients/${id}`)
  await request.post(`${rootURL}/method/${id}`)
  return id
}

// name: '',
// description: '',
// imgUrl: '',
// ingredient: '',
// hidden: false,
// amount: Number(''),
// metric: 'g',
// method: '',
