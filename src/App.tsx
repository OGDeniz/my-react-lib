
import './styles/App.css';
import CardEinfach from './components/UI/Cards/CardEinfach';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <CardEinfach />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
