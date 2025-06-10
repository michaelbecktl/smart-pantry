export interface User {
  auth0id: string
  username: string
  displayname: string
  email: string
  created_at: string
}

export interface UserData extends User {
  id: number
}

export interface NewUser {
  auth0Id: string
  username: string
  displayname: string
  email: string
}
