import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {QueryContext} from './components/context/query.context'
import { PageContext } from './components/context/query.context';


import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component'
import Pagination from './components/pagination/pagination.component'

import Homepage from './pages/homepage/homepage.component'
import Favespage from './pages/favespage/favespage.component'



function App() {

  const [query, setQuery] = useState('angular')
  const [page, setPage] = useState('0')

  return (
    <Router basename='/'>
        <QueryContext.Provider value={[query, setQuery]}>
        <PageContext.Provider value={[page, setPage]}>
          <Header />
          <Navbar />
              <Routes>
                  <Route exact path ="/" element={<Homepage/>} />
                  <Route exact path ="/faves" element={<Favespage />} />
              </Routes>
          <Pagination />
        </PageContext.Provider>
        </QueryContext.Provider>
      </Router>
  )
}

export default App
