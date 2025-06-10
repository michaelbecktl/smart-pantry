import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router'
import { IfAuthenticated, IfNotAuthenticated } from './Authentication'

function Nav() {
  const logout = useAuth0().logout
  const login = useAuth0().loginWithRedirect

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    login()
  }

  return (
    <nav>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/recipelist">
            <li>Recipes</li>
          </Link>
          <IfAuthenticated>
            <Link to="/myrecipes">
              <li>My Recipes</li>
            </Link>
            <Link to="/profile">
              <li>ProfilePage</li>
            </Link>
          </IfAuthenticated>
        </ul>
      </div>
      <div>
        <IfAuthenticated>
          <button className="userauth" onClick={handleSignOut}>
            Sign Out
          </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className="userauth" onClick={handleSignIn}>
            Log In
          </button>
          <button className="userauth">Sign Up</button>
        </IfNotAuthenticated>
      </div>
    </nav>
  )
}

export default Nav
