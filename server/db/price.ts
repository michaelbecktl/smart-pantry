import { Price } from '../../models/foodbank.ts'
import connection from './connection.ts'

export async function getPriceByName(name: string): Promise<Price[]> {
  return connection('ingredient_data')
    .where('name', name)
    .select(
      'name',
      'metric',
      'month',
      'data_cost as dataCost',
      'user_cost as userCost',
      'avg_cost as avgCost',
    )
    .first()
}
