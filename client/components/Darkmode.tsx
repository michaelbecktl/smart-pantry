import { Switch } from '@mui/material'
import { useEffect, useState } from 'react'

function DarkMode() {
  const [isChecked, setIsChecked] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', isChecked ? 'dark' : 'light')
    document.body.classList.toggle('darkMode', isChecked)
  }, [isChecked])

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <Switch onChange={handleChange} checked={isChecked} />
    </>
  )
}

export default DarkMode
