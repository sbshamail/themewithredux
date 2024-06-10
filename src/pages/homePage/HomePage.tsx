"use client"
import React from 'react'
// import Navbar from '@/components/navbar/Navbar'
import ThemeApply from '@/utils/themeApply/ThemeApply'
import Navbar from '@/components/navbar/Navbar'
const HomePage = () => {
    return (
        <div>
            <ThemeApply>
                <Navbar />
            </ThemeApply>
            <div className='mt-20'>
                <Navbar />
            </div>
        </div>
    )
}

export default HomePage