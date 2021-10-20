import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useResultContext } from '../contexts/ResultsContextProvider';
import Spinner from './Spinner';

const Results = () => {
   const { results, isLoading, getResults, searchTerm } = useResultContext();

   const location = useLocation();

   useEffect(() => {}, []);

   if (isLoading) return <Spinner />;

   return <div>Results</div>;
};

export default Results;
