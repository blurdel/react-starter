import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Login } from './Login.js';
import { WordLetterCounter } from './WordLetterCounter.js'

const products = [
  { id: 3, name: 'Apple', isFruit: true },
  { id: 2, name: 'Potato', isFruit: false },
  { id: 1, name: 'Garlic', isFruit: false },
  
];

export default function MyApp() {
  const [global, setGlobal] = useState(0);

  function handleGlobal() {
    setGlobal(global + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>React Quick Start</p>
        <MyButton />
        <MyButton />
        <ShoppingList />
        
        {/* <div>
          <h6>Counters that update together</h6>
          <GButton count={global} onClick={handleGlobal} />
          <GButton count={global} onClick={handleGlobal} />
        </div> */}

        <GButtons />

        <Login />

        <h1>
            Words and Letters
            Counter
          </h1>
          <WordLetterCounter />

        {/* <AboutPage /> */}

      </header>
    </div>
  );

  function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          textAlign: 'left',
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.name}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }

  function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
      // alert('You clicked me!');
      setCount(count + 1);
    }

    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }

  function GButtons() {
    return (
      <div>
        Counters that update together<br></br>
        <GButton count={global} onClick={handleGlobal} />
        <GButton count={global} onClick={handleGlobal} />
      </div>
    );
  }

  function GButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }
  
}

// export default App;
