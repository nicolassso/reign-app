import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component';

import Homepage from './pages/homepage/homepage.component'
import Favespage from './pages/favespage/favespage.component'

function App() {

  return (
    <>
    <Router basename='/'>
      <Header />
      <Navbar />
      <Routes>
          <Route exact path ="/home" element={<Homepage />} />
          <Route exact path ="/faves" element={<Favespage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
