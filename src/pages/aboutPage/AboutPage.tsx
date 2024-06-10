"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import AboutNavbar from '@/components/aboutNavbar/AboutNavbar'
import ThemeApply from '@/utils/themeApply/ThemeApply'

const AboutPage = () => {
  return (
    <ThemeApply>
        <AboutNavbar/>
    </ThemeApply>
  )
}

export default AboutPage