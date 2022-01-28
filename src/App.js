import React from 'react';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return <>
  <BrowserRouter>
    <Routes>
          <Route path="/" element={ <Login title="LinkedIn" />} />
    </Routes>
    
  </BrowserRouter>
  </>;
};
export default  App;