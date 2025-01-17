import * as React from 'react';
import Box from '@mui/material/Box'; 
import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';  
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', maxWidth: '33vw', margin: '0 auto' }}
  >
    •
   
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" color='success'>
        Das ist ein einfacher Karteninhalt
      </Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit omnis adipisci? Velit, iure molestias. Adipisci alias obcaecati qui atque? Architecto nobis voluptatibus necessitatibus est nesciunt esse, assumenda eligendi possimus.
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function CardEinfach() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: '33vw', margin: '0 auto' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
