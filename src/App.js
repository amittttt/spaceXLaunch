import React from 'react';
import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom'
import Home from './components/organisms/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
