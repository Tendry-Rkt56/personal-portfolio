import { useContext, useState } from "react";

const ThemeContext = useContext({
     theme: false,
     toggleTheme: () => {}
})

export default ThemeContext

export function ThemeProvider ({children}) {
     
     const [theme, setTheme] = useState(false)

}