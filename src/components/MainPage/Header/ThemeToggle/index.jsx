import React,{useState} from 'react'
import { Switch } from '@headlessui/react'
import { useData } from '../../../context/ThemeContext'
function ThemeToggle() {
const {theme , setTheme} = useData()

  return (
    <Switch
      checked={theme}
      onChange={setTheme}
      className={`${
        theme ? 'bg-[#A445ED]' : 'bg-[#757575]'
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
            theme ? 'translate-x-5' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>

  )
}

export default ThemeToggle
