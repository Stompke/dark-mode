import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Info from './components/Info';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [allExchanges, setAllExchanges] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/exchanges/list?per_page=10&page=1&sparkline=true')
    .then(res => {
      // console.log(res.data)
      setAllExchanges(res.data);
    })
    .catch(err => {
      alert('error loading exchanges list', err)
      console.log('error loading exchanges list', err)
    })
  })

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data)
        // console.log(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Form} />
      <Route path='/charts' render={() => <Charts coinData={coinData} />} />
      <Route path='/info' render={() => <Info allExchanges={allExchanges} />} />
      
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
