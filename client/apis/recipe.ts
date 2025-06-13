import request from 'superagent'
import {
  IngredientData,
  Method,
  NewRecipe,
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
  return response.body as RecipeData
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

export async function addNewRecipe(newRecipe: NewRecipe) {
  const {
    name,
    description,
    imgUrl,
    portion,
    createdBy,
    ingredient,
    hidden,
    method,
  } = newRecipe
  const response = await request.post(`${rootURL}/recipe`).send({
    name: name,
    description: description,
    img_url: imgUrl,
    hidden: hidden,
    portion: portion,
    created_by: createdBy,
  })
  const { id } = response.body
  const newIngredient = ingredient.map((item) => {
    return { ...item, recipe_id: id } // Adding Retrieved ID into POST object
  })
  const newMethod = method.map((item) => {
    return { procedure: item, recipe_id: id } // Adding Retrieved ID into POST object
  })
  await request.post(`${rootURL}/ingredients/`).send(newIngredient)
  await request.post(`${rootURL}/method/`).send(newMethod)
  return { id: id, name: name }
}

// name: '',
// description: '',
// imgUrl: '',
// ingredient: '',
// hidden: false,
// amount: Number(''),
// metric: 'g',
// method: '',
