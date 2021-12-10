import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {QueryContext} from './components/context/query.context'
import { PageContext } from './components/context/query.context';
import { LikedContext } from './components/context/query.context';

import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component'
import Pagination from './components/pagination/pagination.component'

import Homepage from './pages/homepage/homepage.component'
import Favespage from './pages/favespage/favespage.component'

import apiCall from './components/apicall/apiCall';



function App() {


  let [news, setNews] = useState([])
  const [query, setQuery] = useState('angular')
  const [page, setPage] = useState('0')
  const [likedRows, setLikedRows] = useState([{
    id:'hey',
    author: 'this'
  },
{
  id:'nico',
  author: 'another'
}])

  useEffect(() => {
    const data = localStorage.getItem("query");
    const pageData = localStorage.getItem("page")
    const likedData = localStorage.getItem("liked-rows")
    if (data) {
      setQuery(JSON.parse(data));
    }
    if(pageData) {
      setPage(JSON.parse(pageData))
    }
    if(likedData) {
      setLikedRows(JSON.parse(likedData))
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("query", JSON.stringify(query));
    localStorage.setItem("page", JSON.stringify(page));
    localStorage.setItem("liked-rows", JSON.stringify(likedRows));
  });

//TRY TO CHANGE THE NUMBER OF POSTS PER PAGE TO 50
  useEffect(() => {
    const fetchData = async (e) => {

        await apiCall.getData(query, page)
        .then(
            res => {
                setNews(res.data.hits)
            }
        ).catch((error) => {
            console.log(error)
        })

    }
    fetchData();
}, [query, page])


  return (
    <Router basename='/'>
        <QueryContext.Provider value={[query, setQuery]}>
        <PageContext.Provider value={[page, setPage]}>
        <LikedContext.Provider value={[likedRows, setLikedRows]} >
          <Header />
          <Navbar />
              <Routes>
                  <Route exact path ="/" element={<Homepage news={news}/>} />
                  <Route exact path ="/faves" element={<Favespage news={news} />} />
              </Routes>
          <Pagination />
        </LikedContext.Provider>
        </PageContext.Provider>
        </QueryContext.Provider>
      </Router>
  )
}

export default App
