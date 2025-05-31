import { Link } from 'react-router'

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/recipelist">
          <li>Recipes</li>
        </Link>
      </ul>
      <button>Log In</button>
      <button>Sign Up</button>
    </nav>
  )
}

export default Nav
