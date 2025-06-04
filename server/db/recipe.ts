import { Recipe } from '../../models/foodbank.ts'
import connection from './connection.ts'

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
