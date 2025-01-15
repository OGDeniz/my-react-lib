
import React from 'react';
import { AppBar, Button, Grid, Theme, Toolbar, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { WithStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
// import { Grade } from '@mui/icons-material';


const styles = (theme: Theme) => ({
  container: {
    margin: theme.spacing(1)
  }
});

function buttonColor(parentColor: 'primary' | 'secondary' | 'default'): 'primary' | 'secondary' | 'default' {
  if (parentColor === 'primary') {
    return 'secondary';
  }

  if (parentColor === 'secondary') {
    return 'primary';
  }

  return 'default';
}

interface ButtonEmphasisProps extends WithStyles<typeof styles> {
  disabled: boolean;
  appBarColor: 'primary' | 'secondary' | 'default';
}

const ButtonEmphasis = withStyles(styles)(
  ({ classes, disabled, appBarColor }: ButtonEmphasisProps) => (
    <Grid
      container
      direction="column"
      spacing={5}
      className={classes.container}
    >
      <Grid item>
        <AppBar color={appBarColor}>
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="text"
                  disabled={disabled}
                  color="inherit"
                >
                  <Link to="/buttons">Buttons</Link>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  disabled={disabled}
                  color="inherit"
                >
                  Outlined
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={disabled}
                  color="inherit"
                >
                  Contained
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <Typography variant="h6">Default</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              sx={{ color: buttonColor(appBarColor) }}
              variant="contained"
              disabled={disabled}
            >
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Default</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="text" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" disabled={disabled}>
              Outlined
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled={disabled}>
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Primary</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="text"
              color="primary"
              disabled={disabled}
            >
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              disabled={disabled}
            >
              Outlined
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={disabled}
            >
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Secondary</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="text"
              color="secondary"
              disabled={disabled}
            >
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              disabled={disabled}
            >
              Outlined
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              disabled={disabled}
            >
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
);

export default ButtonEmphasis;