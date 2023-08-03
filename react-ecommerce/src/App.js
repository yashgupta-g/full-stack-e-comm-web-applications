import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/Product-list/ProductList';
import Homepage from './Pages/Homepage';
import Login from './features/auth/components/Login';
function App() {
  return (
    <div className='App'>
     <Login></Login>
      
    </div>
    
  );
}

export default App;
