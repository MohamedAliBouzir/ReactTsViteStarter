import { useEffect } from "react";
import { ThemeProvider } from "react-jss";
import useDarkMode from "../hooks/useDarkMode";
import Wrapper from "../layout/Wrapper/Wrapper";
import {BrowserRouter as Router} from 'react-router-dom';
// import Aside from "../layout/Aside/Aside";
const App = () => {
  const {themeStatus, darkModeStatus} = useDarkMode();
  const theme = {
    theme: themeStatus,
  }
  useEffect(() => {
    if(darkModeStatus) {
      document.documentElement.setAttribute('theme', 'dark');
    }
    return () => {
      document.documentElement.removeAttribute('theme');
    }
  }, [darkModeStatus])
  
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Router>
          <Wrapper />
          {/* <Aside children={undefined} /> */}
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
