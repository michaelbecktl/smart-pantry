import { NewUser, UserData } from '../../models/user.ts'
import connection from './connection.ts'

export async function getUserByAuth(
  authId: number | string,
): Promise<UserData> {
  return connection('user').where('auth_id', authId).select().first()
}

export async function addNewUser(data: NewUser) {
  return connection('user').insert(data).returning('id')
}
