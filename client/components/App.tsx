import { Outlet } from 'react-router'
import Nav from './Nav.tsx'

function App() {
  return (
    <>
      <div>
        <h1>Smart Pantry</h1>
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
