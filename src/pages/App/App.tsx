import React, { FC } from 'react';
import './App.css';
import Gallery from "../../components/Gallery";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery />
      </header>
    </div>
  );
};


// @ts-ignore
export default App;
