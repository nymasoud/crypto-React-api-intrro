
import './App.css';
import React, {useState} from 'react';


function App() {


  const [allCoins, setAllCoins] = useState([])


  const clickHandler = () => {
    console.log("clicked!")
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res=>{
    
    return res.json()
    })//.then() means when the response is recieved back from the API call, what to do with it
    
    .then(res=>{
      console.log("the response looks like this")
      console.log(res)

      //save the response into my state variable
      setAllCoins(res)
    }) //.then() means when the response is recieved back from the API call, what to do with it
    
    // or we can do like this  with only 1 .then()
    /*.then(resp=>{
      console.log("the response looks like this")
      console.log(resp)
      setAllPokes(resp.json())
      })
*/
    .catch(err=>{
      console.log(err)
    }) //.catch() means if there were any errors that came up in our API request, this is where we will handle those errors
  }


  return (
    <div className="App container">
      <h1>Top Crypto Today!</h1>
      <button onClick={clickHandler} className="btn btn-success">show me the money</button>
    {
      allCoins.map((coin, idx)=>{
        return <div style= {{backgroundColor: 'beige'}}  key={idx} className="card" >
                  <div className="card-body">
                      <h4 style= {{backgroundColor: 'gray'}} className="card-title">{coin.name}</h4>
                      <img src={coin.image} alt="" />
                      <p className="card-text">Current: ${coin.current_price}</p>
                      <a href="#!" className="btn btn-primary mb-3">Go somewhere</a>
                  </div>
                </div>
      })
    }
    </div>
  );
}

export default App;

 // how to comments in CSS --->        {/* <img src={coin.image} alt="" />*/}