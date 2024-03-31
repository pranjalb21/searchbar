import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import SearchResult from './components/searchResult/SearchResult';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [seletedPersons, setSelectedPersons] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <div className="searchBar-container">
        <SearchBar
          setSearchResults={setSearchResults}
          setInput={setInput}
          input={input}
          seletedPersons = {seletedPersons}
          setSelectedPersons = {setSelectedPersons}
        />
        <SearchResult
          searchResults={searchResults}
          setSelectedPersons={setSelectedPersons}
          setInput={setInput}
          setSearchResults = {setSearchResults}
          seletedPersons={seletedPersons}
        />
      </div>

    </div>
  );
}

export default App;
