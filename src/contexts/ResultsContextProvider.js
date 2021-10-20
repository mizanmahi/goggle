import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1/';

const ResultsContextProvider = ({ children }) => {
   const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');

   // type => /images, /videos, /search
   const getResults = async (type) => {
      setIsLoading(true);

      const response = await fetch(`${baseUrl}${type}`, {
         method: 'GET',
         headers: {
            'x-user-agent': 'desktop',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key':
               '53d3e51015msh53a0f06a2fd9375p1c3484jsnd53c4f58cf42',
         },
      });
      const data = await response.json();

      setResults(data);
      setIsLoading(false);
   };

   return (
      <ResultContext.Provider
         value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
      >
         {children}
      </ResultContext.Provider>
   );
};

export default ResultsContextProvider;

export const useResultContext = () => useContext(ResultContext);
