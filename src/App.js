import './App.css';

import Header from './components/header/header.component'
import Navbar from './components/navbar/navbar.component';

import Homepage from './pages/homepage/homepage.component'
// import Favespage from './pages/favespage/favespage.component'

function App() {
  return (

    <div className="App">
      <Header />
      <Navbar />
      <Homepage />
      {/* <Favespage /> */}
    </div>

  );
}

export default App;
