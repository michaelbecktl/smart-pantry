import { Outlet } from 'react-router'
import Nav from './Nav.tsx'
import DarkMode from './Darkmode.tsx'

function App() {
  return (
    <>
      <div>
        <h1 className="title">Smart Pantry</h1> <DarkMode />
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
