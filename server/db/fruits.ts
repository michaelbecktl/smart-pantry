import connection from './connection.ts'
import { Fruit } from '../../models/foodbank.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
