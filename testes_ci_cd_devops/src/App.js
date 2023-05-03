import React, { useEffect } from 'react';
import getDatas from './utils/getDatasFromApi/getDatasFromApi';

const App = () => {

  useEffect(() => {
    (() => {
      getDatas()
    })()
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;

