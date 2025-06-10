import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAddUser, useUserByAuth } from '../hooks/user'
import { NewUser } from '../../models/user'

function ProfilePage() {
  const auth0 = useAuth0()
  const navigate = useNavigate()

  const auth0Id = auth0.user?.sub
  const user = useUserByAuth(auth0Id)
  const addUser = useAddUser()

  const [form, setForm] = useState({
    auth0Id: auth0Id,
    username: auth0.user?.nickname,
    displayname: '',
    email: auth0.user?.email,
  })
  if (!auth0.isAuthenticated && user.isSuccess) {
    navigate('/')
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value
    setForm({ ...form, displayname: newValue })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const token = await auth0.getAccessTokenSilently()
    addUser.mutate({ data: form as NewUser, token: token })
    navigate('/')
  }

  return (
    <>
      <h2>
        Welcome to Smart Pantry! Please input your desired display name. (This
        can be seen by other users)
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Display Name: </label>
        <input
          type="text"
          id="name"
          value={form.displayname}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ProfilePage
