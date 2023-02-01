
import './App.css';
import React from 'react';
//import Coins from './components/Coins';
import CoinsWithAxios from './components/CoinsWithAxios';


function App() {


  

  return (
    <div className="App container">
      <h1>Top Crypto Today!</h1>
      {/*<Coins></Coins>*/}
      <CoinsWithAxios></CoinsWithAxios>
    </div>
  );
}

export default App;

 // how to comments in CSS --->        {/* <img src={coin.image} alt="" />*/}