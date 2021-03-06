import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from './request'
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Nav */}
      <Nav setSelectedOption={setSelectedOption}/>
      {/* Results */}
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
