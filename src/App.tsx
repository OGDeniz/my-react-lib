import React from 'react';
import { Button, Container, Box } from '@mui/material';
import CardEinfach from './components/UI/Cards/CardEinfach';
import CardBild from './components/UI/Cards/CardBild';
import ActiveCard from './components/UI/Cards/ActiveCard';
import Icons from './components/UI/icons/Icons';
import StandardImageList from './components/StandardImageList';
import MyNavbar from './components/UI/nav/Navbar';
import { ThemeContext } from './context/ThemeContext';
import { BrowserRouter, Link } from 'react-router-dom';
import BasicRating from './components/UI/BasicRating';
import BasicSelect from './components/BasicSelect';

const App: React.FC = () => {
  // Dark Mode und Theme-Handling aus dem ThemeContext
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    // App-Container
    
    <Box
      className="App"
      sx={{
        backgroundColor: darkMode ? 'background.default' : 'background.paper',
        color: darkMode ? 'text.primary' : 'text.secondary',
        minHeight: '100vh',
      }}
    >
      {/* Navbar */}
      <MyNavbar />


      {/* Container für den Inhalt */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Theme Toggle Button */}
        <Box display="flex" justifyContent="center" mb={4}>
          <Button sx={{ mb: 2 }} onClick={toggleTheme}
            variant="contained"
            color="primary"
            size="large"

          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </Box>

        <Container maxWidth="sm" sx={{ py: 4, textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2 }}>
          <BasicRating />
        </Container>

        <Container maxWidth="sm" sx={{  py: 2, textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2 }}>
          <BasicSelect />
        </Container>


       

        {/* Komponenten: Karten, Icons und andere Inhalte */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 4, textAlign: 'center' }}>
          <h2 className="text-center">Einige "Card"-Komponenten</h2>
          <CardEinfach />
          <CardBild />
          <ActiveCard />
          <Icons />
          <StandardImageList />
        </Box>
      </Container>
    </Box>
    
  );
};

export default App;

