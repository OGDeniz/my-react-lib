import React from 'react';
import './styles/App.css';
import CardEinfach from './components/UI/Cards/CardEinfach';
import CardBild from './components/UI/Cards/CardBild';
import cardData from './data/cardData';
import ActiveCard from './components/UI/Cards/ActiveCard';
import Icons from './components/UI/icons/Icons';
import { ThemeContext } from './context/ThemeContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import StandardImageList from './components/StandardImageList';

const App: React.FC = () => {

  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="App">
     <Button
        onClick={toggleTheme}
        variant="contained"
        sx={{ position: 'fixed', top: 16, right: 16 }}
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'} is active</h1>
      
      <header className="App-header">
      <div className="card-container">
        <CardEinfach />
        <br />
        <CardBild />
        <br />
        <ActiveCard />

      </div>
      </header>
      <br />

      <div className="App-body">
        <StandardImageList />
      </div>

      <aside className="App-aside">
        <Icons/>
        
      </aside>
    </div>
  );
}

export default App;
