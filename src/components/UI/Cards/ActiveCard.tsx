import * as React from 'react'; // für die Verwendung von React
import Box from '@mui/material/Box'; // für die Box
import Card from '@mui/material/Card'; // für die Karte
import CardContent from '@mui/material/CardContent'; // für den Inhalt der Karte 
import Typography from '@mui/material/Typography';  // für Texte in der Karte 
import CardActionArea from '@mui/material/CardActionArea'; // zum Klicken auf die Karte 
import cardData from '../../../data/cardData'; // für die Daten der Karte

  
function ActiveCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
        <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(33vw, 100%), 1fr))',
        gap: 2,
        padding: 2,
        justifyContent: 'center',
 
      }}
    >
      {cardData.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : cardData.length}
            sx={{
            
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default ActiveCard;