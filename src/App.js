import React from 'react';

import GlobalStyles from './styles/globalStyles'
import Routes from './routes'
import { Route } from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
     <GlobalStyles />
     <Routes />
   </React.Fragment>
  );
}

export default App;
