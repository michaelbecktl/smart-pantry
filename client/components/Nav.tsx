import { Link } from 'react-router'

function Nav() {
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
          <Link to="/recipelist/u/1">
            <li>My Recipes</li>
          </Link>
        </ul>
      </div>
      <div>
        <button className="userauth">Log In</button>
        <button className="userauth">Sign Up</button>
      </div>
    </nav>
  )
}

export default Nav
