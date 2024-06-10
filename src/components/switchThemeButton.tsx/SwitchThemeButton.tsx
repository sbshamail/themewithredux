"use client"
// middleware
import React from 'react'
import type { RootState } from '@/utils/redux/store'
import {THEMES} from '@/utils/themeApply/themeColor'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '@/utils/redux/slices/themeChangeSlice/themeChangeSlice'

const SwitchThemeButton = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.themes.theme);

  const handleToggleTheme = () => {
    if(theme.name==="light"){
      dispatch(toggleTheme(THEMES.dark));
    } 
    if(theme.name==="dark"){
      dispatch(toggleTheme(THEMES.light));
    } 
  };
  // ${theme.bg} ${theme.text} we can use in class
  return (
    <div>
      <button
        className={`p-2 px-4  `}
        onClick={handleToggleTheme}
      >
        Theme Change
      </button>
    </div>
  )
}

export default SwitchThemeButton