import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import cardData from '../../../data/cardData';
import { Box } from '@mui/material';

const CardBild = () => {
    return (
        <div>
            <h1>Card with Image</h1>
            <p style={{ border: '2px solid #ccc', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 3px #ccc', maxWidth: '66vw', margin: '0 auto', top:'1rem' }}>
                This card component displays an image, a title, and a description. It also includes two buttons for sharing and learning more.
            </p>
          <Box sx={{ display: 'flex', 
                     justifyContent: 'center', 
                     flexWrap: 'wrap',
                     flexDirection: 'column',
                      gap: 16,
                      allignItems: 'center',
                      maxWidth: '66vw', 
                      margin: '0 auto'

           }}>
            {cardData.map((card) => (
                <Card key={card.cardId}>
                    <CardMedia
                        component="img"
                        height="fit-content"
                        width="fit-content"
                        image={card.src}
                        alt={card.title}
                        sx={{    height: 300,
                          objectFit: '-moz-initial', // Bildgröße anpassen
                          borderRadius: '8px', // Abgerundete Ecken
                          border: '2px solid #ccc', // Rahmen hinzufügen
                          boxShadow: '0 2px 3px #ccc', // Schatten hinzufügen
                          objectPosition: 'top' // Bildposition anpassen
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={card.onShare}>Share</Button>
                        <Button size="small" onClick={card.onLearnMore}>Learn More</Button>
                    </CardActions>
                </Card>
            ))}
            </Box>
        </div>
    );
};

export default CardBild;