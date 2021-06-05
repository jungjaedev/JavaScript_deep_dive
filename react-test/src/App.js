import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = [
    'A bad workman always blames his tools.',
    'A bird in hand is worth two in the bush.',
    'Half a loaf is better than none.',
    'Honesty is the best policy.',
  ];

  const getRandomIndex = length => {
    return parseInt(Math.random() * length);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
