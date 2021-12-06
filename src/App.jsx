import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {QueryContext} from './components/context/query.context'


import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component'
import Pagination from './components/pagination/pagination.component'

import Homepage from './pages/homepage/homepage.component'
import Favespage from './pages/favespage/favespage.component'



function App() {

  return (
    <Router basename='/'>
        <QueryContext.Provider value='angular'>
          <Header />
          <Navbar />
              <Routes>
                  <Route exact path ="/" element={<Homepage/>} />
                  <Route exact path ="/faves" element={<Favespage />} />
              </Routes>
          <Pagination />
        </QueryContext.Provider>
      </Router>
  )
}

export default App
