import React from 'react'

import { useState, useEffect } from 'react'


export default function Quote(props) {
  const [quotes, setQuotes] = useState("om");
  
//Logic to fetch API and show data
  const changeQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNumber]);
    });
  };



  useEffect(() => {
    changeQuote();
  }, []);

  function callTwo(){
    changeQuote();
    props.toggleColor();
}

  return (
    <div id='quote-box' className="card text-center w-50 position-absolute top-50 start-50 translate-middle">
  <div className="card-header fw-semibold">
    The "Quote" Machine
  </div>
  <div className="card-body">
    <h4 id='text' className="card-text">"{quotes.text}"</h4>
    <h6 id='author' className="card-text">- {quotes.author} </h6>
    <div className = 'mt-4'>
    <a className={`btn btn-${props.mode.slice(3)}`} onClick={callTwo}>Change Quote</a>
    </div>
  </div>
  <div className="card-footer text-muted">
  <a className="btn" href='https://tumblr.com/' target="_blank"><img
            src={require("../tumblr.png")}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top"
          /> </a>
  <a className="btn" href='https://twitter.com/intent/tweet/' id="tweet-quote" target="_blank"><img
            src={require("../twitter.png")}
            alt="Logo"
            width="34"
            height="34"
            className="d-inline-block align-text-top"
          /> </a>
  </div>
  <h5>by Om Patel</h5>
</div>
  )
}
