import React, {useEffect, useState} from 'react';
import './App.scss';
import Colors from './colorsArray.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// freeCodeCamp quotes array
let quotesJSON = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  
  const [quote, setQuote] = useState("There is only one way to avoid criticism: do nothing, say nothing, and be nothing.");
  const [author, setAuthor] = useState("Aristotle");
  const [quotesArray, setQuotesArray] = useState(null);
  const [themeColor, setColor] = useState("#FF6633");

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsed = await response.json();
    setQuotesArray(parsed.quotes);
  }

  useEffect(() => {
    fetchQuotes(quotesJSON);
  })

  const randomColor = function() {
    let rand = Math.floor(Math.random() * Colors.length);
    setColor(Colors[rand]);
  }
  
  const getRandomQuote = function() {
    let rand = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[rand].quote);
    setAuthor(quotesArray[rand].author);
    randomColor();
  }

  return (
    <div className="App">
      <header 
      className="App-header" 
      style={{
        backgroundColor: themeColor, 
        color: themeColor
     }}
      >
        <div id="quote-box">
          <p 
          id="text"
          ><FontAwesomeIcon icon={ faQuoteLeft } /> {quote}</p>
          <p 
          id="author"
          >- {author}</p>
          <div className="buttons">
            <a
            id="tweet-quote"
            href={encodeURI(`https://twitter.com/intent/tweet?text="${quote}" - ${author}`)}
            target='_blank'
            rel="noreferrer"
            style={{backgroundColor: themeColor}}
            ><FontAwesomeIcon icon={ faXTwitter } /></a>
            <button
            id="new-quote"
            onClick={()=> getRandomQuote()}
            style={{backgroundColor: themeColor}}
            >Change Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
