import request from 'superagent'
import { NewUser } from '../../models/user'
const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getUserByAuth(authId: unknown) {
  const response = await request.get(`${rootURL}/user/${authId}`)
  return response
}

export async function addNewUser(newUser: NewUser, token: string) {
  const newData = {
    auth_id: newUser.auth0Id,
    username: newUser.username,
    displayname: newUser.displayname,
    email: newUser.email,
  }
  return request
    .post(`${rootURL}/user/`)
    .set('Authorization', `Bearer ${token}`)
    .send(newData)
    .then((res) => res.body)
}
