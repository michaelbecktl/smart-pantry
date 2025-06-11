import { Recipe, RecipeData } from '../../models/foodbank.ts'
import connection from './connection.ts'

export async function getAllRecipes(): Promise<RecipeData[]> {
  return connection('recipe')
    .where('hidden', false)
    .select(
      'id',
      'description',
      'created_by as createdBy',
      'name',
      'img_url as imgUrl',
      'created_at as createdAt',
      'hidden',
    )
}

export async function getAllMyRecipes(
  userId: number | string,
): Promise<Recipe[]> {
  return connection('recipe')
    .where('created_by', userId)
    .select(
      'id',
      'description',
      'created_by as createdBy',
      'name',
      'img_url as imgUrl',
      'created_at as createdAt',
      'hidden',
    )
}

export async function getRecipeDetails(
  recipeName: string,
  recipeId: number | string,
): Promise<Recipe> {
  return connection('recipe')
    .where('name', recipeName)
    .andWhere('id', recipeId)
    .first()
    .select(
      'id',
      'description',
      'created_by as createdBy',
      'name',
      'img_url as imgUrl',
      'created_at as createdAt',
      'hidden',
    )
}

export async function addNewRecipe(newRecipe: Recipe): Promise<RecipeData> {
  return connection('recipe').insert(newRecipe).returning('*').first()
}
