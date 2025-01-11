import React from 'react';
import './styles/App.css';
import CardEinfach from './components/UI/Cards/CardEinfach';
import CardBild from './components/UI/Cards/CardBild';
import ActiveCard from './components/UI/Cards/ActiveCard';
import Icons from './components/UI/icons/Icons';
import { ThemeContext } from './context/ThemeContext';
import { Button, Container, Box } from '@mui/material';
import StandardImageList from './components/StandardImageList';
import MyNavbar from './components/UI/nav/Navbar';

const App: React.FC = () => {
  // Dark Mode und Theme-Handling aus dem ThemeContext
  const { darkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
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
          <Button
            onClick={toggleTheme}
            variant="contained"
            color={darkMode ? 'secondary' : 'primary'}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </Box>

        {/* Komponenten: Karten, Icons und andere Inhalte */}
        <Box display="flex" justifyContent="center" flexDirection="column" gap={4}>
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

