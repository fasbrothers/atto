import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './route/routes';

function App() {
  return (
    <BrowserRouter>
        <div >
            <Router />
        </div>
    </BrowserRouter>
  );  
}


export default App;
