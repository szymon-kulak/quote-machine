import React, {useState} from 'react';
import './App.scss';

function App() {
  
  const [quote, setQuote] = useState("Every child is an artist. The problem is how to remain an artist once he grows up.");
  const [author, setAuthor] = useState("Pablo Picasso");
  const [quoteNumber, setRandomNumber] = useState(0);
  
  const getRandomNumber = function() {
    let rand = Math.floor(Math.random() * quotesArray.length);
    setRandomNumber(rand);
    setQuote(quotesArray[rand].quote);
    setAuthor(quotesArray[rand].author);
  }

  const quotesArray = [{quote: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "Pablo Picasso"},{quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"}, {quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson"}, {quote: "Certain things catch your eye, but pursue only those that capture the heart.", author: "Ancient Indian Proverb"}, {quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh"}];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Number: {quoteNumber + 1}</h1>
        <p>
          {quote}
        </p>
        <p>
          - {author}
        </p>
        <button onClick={()=> getRandomNumber()}>Change Quote</button>
      </header>
    </div>
  );
}

export default App;
