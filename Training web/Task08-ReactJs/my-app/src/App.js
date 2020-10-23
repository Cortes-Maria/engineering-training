import React from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import Companies from './components/Companies';
import Footer from './components/Footer';
import { SearchProvider } from './SearchContext';


function App() {
  return (
    <div className="App">
      <Nav />
      <SearchProvider>
        <Search />
        <Companies/>
      </SearchProvider>
      <Footer />
    </div>
  );
}

export default App;
