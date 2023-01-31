import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './Components/NavBar';
import WelcomePage from './Components/WelcomePage';
import AboutPage from './Components/AboutPage';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme } from '@mui/material/styles'; 

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat'
    },
  },
  color: {
    primary: "red",
    secondary: "#797EF6"
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar />
      <WelcomePage />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
