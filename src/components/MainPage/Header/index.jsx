import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Header() {
    const {theme} = useTheme();

  return (
    <div>
      Header Page
    </div>
  )
}

export default Header
