import {createRoot} from 'react-dom/client'
import App from './App/App'
import './index.css'
import reportWebVitals from './reportWebVitals';
import {ThemeContextProvider} from './contexts/themeContext';

const children = (
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
);

const container = document.getElementById('root')!

createRoot(container as Element).render(children);

reportWebVitals()