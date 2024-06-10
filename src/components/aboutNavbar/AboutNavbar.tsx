import React from 'react'
import SwitchThemeButton from '../switchThemeButton.tsx/SwitchThemeButton'
import Link from 'next/link'
const AboutNavbar = ({ themeclasses }: any) => {
    const theme = themeclasses?.toString()
    return (
        <div className={` p-2  ${theme} `}  >

            <div className='flex justify-between'>
                <h1 className={`text-3xl font-bold `} >
                About LOGO
                </h1>
                <Link href={'/'} className={theme}>Back to Home</Link>
                <SwitchThemeButton />
            </div>
        </div>
    )
}

export default AboutNavbar