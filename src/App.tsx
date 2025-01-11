
import './styles/App.css';
import CardEinfach from './components/UI/Cards/CardEinfach';
import CardBild from './components/UI/Cards/CardBild';
import cardData from './data/cardData';

import ActiveCard from './components/UI/Cards/ActiveCard';
import Icons from './components/UI/icons/Icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="card-container">
        <CardEinfach />
        <CardBild />
        <ActiveCard />

      </div>
      </header>

      <div className="App-body">
        {cardData.map((card, index) => (
          <CardEinfach key={index}  />
        ))}
      </div>

      <aside className="App-aside">
        <Icons/>
        
      </aside>
    </div>
  );
}

export default App;
