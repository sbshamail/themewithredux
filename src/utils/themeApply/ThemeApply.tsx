"use client"

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { applyThemeClass } from './themeFunction';
// import { RootState } from '@/utils/redux/store'

// const ThemeApply = ({ children }:{children:React.ReactNode}) => {
// const theme = useSelector((state:RootState) => state.themes.theme);
//   // Calculate the theme class based on the theme name
//   applyThemeClass(theme.name);
//   return (
//     <div>
//       {children}
//     </div>
//   );
// }

// export default ThemeApply;
// ThemeApply.js
import React from 'react';
import { useSelector } from 'react-redux';
import { applyThemeClass } from './themeFunction';
import { RootState } from '@/utils/redux/store';

const ThemeApply = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.themes.theme);
  // console.log(theme)
  // Calculate the theme class based on the theme name
  const themeclasses:any = applyThemeClass(theme.name);

  // Pass themeClasses as a prop to children
  const childrenWithTheme = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // @ts-ignore
      return React.cloneElement(child, { themeclasses });
    }
    return child;
  });
  return (
    <div className={""}>
       <div className='bg-dark-primary text-light-primary'></div>
            <div className='bg-light-primary text-dark-primary'></div>
      {childrenWithTheme}
    </div>
  );
}

export default ThemeApply;
