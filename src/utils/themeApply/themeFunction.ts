export const applyThemeClass = (theme:any) => {
    return theme === "light"
      ? "bg-light-primary text-dark-primary"
      : "bg-dark-primary text-light-primary";
  };

//   export const theme=()=>{
//     return applyThemeClass("light")?applyThemeClass("light"):applyThemeClass("dark")
//   }

// // import { applyThemeClass } from './themeUtils';

// // Assuming you have a 'theme' variable that holds the current theme name ('light' or 'dark')
// const currentTheme = 'light'; // Replace with your actual theme logic

// export const themeClasses = applyThemeClass(currentTheme);