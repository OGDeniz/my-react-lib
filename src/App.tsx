import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import { Button, Container, Box, Icon } from '@mui/material';
import { ThemeContext } from './context/ThemeContext';
import ActiveCard from './components/UI/Cards/ActiveCard';
import BasicRating from './components/UI/BasicRating';
import BasicSelect from './components/BasicSelect';
import CardBild from './components/UI/Cards/CardBild';
import CardEinfach from './components/UI/Cards/CardEinfach';
import IconBreadcrumb from './components/UI/IconBreadCrumb';
import Icons from './components/UI/icons/Icons';
import MyNavbar from './components/UI/nav/Navbar';
import StandardImageList from './components/StandardImageList';

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s linear'

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

        <Container maxWidth="sm" sx={{ py: 4, textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2 }}>


          <h2 className="text-center">Einige "Button"-Komponenten</h2>
          <Button variant="contained" color="primary" size="large" sx={{ mb: 2 }}>
            Primary Button
          </Button>
          <Button variant="contained" color="secondary" size="large" sx={{ mb: 2 }}>
            Secondary Button
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ mb: 2 }}>
            Primary Outlined Button
          </Button>
          <Button variant="outlined" color="secondary" size="large" sx={{ mb: 2 }}>
            Secondary Outlined Button
          </Button>
          <Container maxWidth="sm" sx={{ py: 4, textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2 }}>
          <Button variant="text" color="primary" size="large" sx={{ mb: 2 }}>
            Primary Text Button
          </Button>
          <Button variant="text" color="secondary" size="large" sx={{ mb: 2 }}>
            Secondary Text Button
          </Button>
          </Container>
          <Container maxWidth="sm" sx={{ py: 4,   textAlign: 'center',  border: 1, borderColor: 'primary.main', borderRadius: 2 }}>
          <Button variant="contained" color="primary" size = "large" sx={{ mb: 2 }} component={Link} to="/about">
            About
          </Button>
          <Button variant="contained" color="success" size = "large" sx={{ mb: 2 }} component={Link} to="/contact">
            Contact
          </Button>
        
          <Button variant="contained" color="error" size = "large" sx={{ mb: 2 }} component={Link} to="/login">
            Login
          </Button>
          </Container>
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

      <Container maxWidth="lg" sx={{ py: 2, textAlign: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2, display: 'flex', 
        flexDirection: 'row', gap: 4, justifyContent: 'center' , position: 'sticky', bottom: 0, width: '100%', backgroundColor: 'background.paper'
       }}>
          <IconBreadcrumb />
        </Container>

    </Box>

 
  );  
};

export default App;

