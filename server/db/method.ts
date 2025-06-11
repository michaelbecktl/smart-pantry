import { Method } from '../../models/foodbank.ts'
import connection from './connection.ts'

export async function getMethodList(
  recipeId: number | string,
): Promise<Method[]> {
  return connection('method')
    .where('recipe_id', recipeId)
    .select('recipe_id as recipeId', 'step', 'procedure')
}

export async function addMethodList(method: Method) {
  return connection('method').insert(method)
}
