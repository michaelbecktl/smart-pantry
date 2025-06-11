import { Ingredient } from '../../models/foodbank.ts'
import connection from './connection.ts'

export async function getIngredientsList(
  recipeId: number | string,
): Promise<Ingredient[]> {
  return connection('ingredients')
    .where('recipe_id', recipeId)
    .select(
      'recipe_id as recipeId',
      'ingredient_id as ingredientId',
      'name',
      'amount',
      'metric',
    )
}

export async function addIngredientList(
  ingredients: Ingredient[],
  id: number | string,
) {
  return connection('ingredients').where('recipe_id', id).insert(ingredients)
}
