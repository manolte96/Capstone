import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Home'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <Navigation /> 
        <Home /> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;