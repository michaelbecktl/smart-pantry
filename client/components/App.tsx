import { Outlet } from 'react-router'
import Nav from './Nav.tsx'

function App() {
  return (
    <>
      <div>
        <Nav />
        <Outlet />
      </div>
    </>
    // <>
    //   <div className="app">
    //     <h1>Fullstack Boilerplate - with Fruits!</h1>
    //     <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
    //   </div>
    // </>
  )
}

export default App
