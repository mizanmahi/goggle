import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';

import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultsContextProvider from './contexts/ResultsContextProvider';

function App() {
   const [darkTheme, setDarkTheme] = useState(false);

   return (
      <BrowserRouter>
         <ResultsContextProvider>
            <div className={darkTheme ? 'dark' : ''}>
               <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                  <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                  <Routes />
                  <Footer />
               </div>
            </div>
         </ResultsContextProvider>
      </BrowserRouter>
   );
}

export default App;
