import React from 'react'
import SwitchThemeButton from '../switchThemeButton.tsx/SwitchThemeButton'
import Link from 'next/link'
const Navbar = ({themeclasses}:any) => {
    
    const theme=themeclasses?.toString()
//   console.log(theme)
    return (
        <div className={` p-2  ${theme} `}  >
             {/* <div className='bg-dark-primary text-light-primary'></div>
            <div className='bg-light-primary text-dark-primary'></div> */}
            <div className='flex justify-between'>
                <h1 className={`text-3xl font-bold `} >
                    LOGO
                </h1>
                <Link href={'/about'} >About</Link>
                <SwitchThemeButton />
            </div>
        </div>
    )
}

export default Navbar