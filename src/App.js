import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
  
  </div>
  );
}

export default App;
