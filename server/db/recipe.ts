import { Recipe } from '../../models/foodbank.ts'
import connection from './connection.ts'

// export async function getPublicRecipes(): Promise<Recipe[]> {
//   return connection('recipe')
//     .select(
//       'id',
//       'created_by as createdBy',
//       'name',
//       'img_url as imgUrl',
//       'created_at as createdAt',
//     )
// }

export async function getAllMyRecipes(
  userId: number | string,
): Promise<Recipe[]> {
  return connection('recipe')
    .where('created_by', userId)
    .select(
      'id',
      'created_by as createdBy',
      'name',
      'img_url as imgUrl',
      'created_at as createdAt',
    )
}

export async function getRecipeDetails(
  recipeName: string,
  userId: number | string,
): Promise<Recipe> {
  return connection('recipe')
    .where('name', recipeName)
    .andWhere('created_by', userId)
    .first()
    .select(
      'id',
      'created_by as createdBy',
      'name',
      'img_url as imgUrl',
      'created_at as createdAt',
    )
}
