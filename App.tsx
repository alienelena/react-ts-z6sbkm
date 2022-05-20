import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const App = () => {
  return(
    <React.Fragment>
      <CssBaseline /> 
        <AppBar position = "relative">
          <Toolbar>
            <CameraAltIcon />
            <Typography variant = "h6">
              DJI
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <div>
            <Grid container  
            spacing = {1}
            direction="column"
            justifyContent="center"
            alignItems="center">
              <Grid item>
                  <Typography variant = "h4" justify content = "flex-end" color = "textPrimary" gutterButton>
                    P4 MULTISPECTRAL
                  </Typography>
              </Grid>
              <Grid item>
                  <Grid container
                  direction = "row"
                  justifyContent = "center"
                  alignItems ="center">
                      <Grid item xs = {3}> 
                      </Grid>
                      <Grid item xs>
                        <Typography variant = "h6" align = "center" color = "textPrimary" paragraph> 
                          Gather precise plant-level data using the P4 Multispectral – a high-precision drone with a seamlessly integrated multispectral imaging system built for agriculture missions, environmental monitoring, and more.
                        </Typography>
                      </Grid>
                      <Grid item xs = {3}>
                      </Grid>
                  </Grid>
                </Grid>
              <Grid container
                direction = "row"
                alignItems = "center"
                justifyContent = "center"
                spacing = {1}>
                  <Grid item>
                    <Button variant = "contained" color = "primary">
                        More
                      </Button>
                  </Grid>
                  <Grid item>
                    <Button variant = "outlined" color = "primary">
                        Contact US
                      </Button>
                  </Grid>
              </Grid>
            </Grid>
          </div>
        </Box>
      </main>
      <Grid 
      direction="row"
      container spacing = {6}
      justifyContent="center"
      alignItems="center">

        <Grid item>
            <Card sx={{ maxWidth: 345 }} >
              <CardMedia
                component="img"
                height="250"
                image="https://www.bhphotovideo.com/images/images1500x1500/dji_cp_ma_00000492_02_mini_3_pro_with_1700260.jpg"
                alt="DJI Mini3 Pro"
              />
              <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    DJI Mini3 Pro
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Save</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card >
              <CardMedia
                component="img"
                height="250"
                image="https://www.fortress.com.hk/medias/1-inch-CMOS-Sensor-12312360.jpg?context=bWFzdGVyfGZyb250em9vbXw1NDUyNnxpbWFnZS9qcGVnfGZyb250em9vbS9oNDcvaDAyLzk3MjM5MjEyMzU5OTguanBnfDBiODcxZmQ5MWRkYjA5ZDRmZDZmY2U4ZDcyOTQ2ODY4ZWJlMDA5YjEyN2ZlNjRkNjgzMzUxZGRjN2NkNGRmMjc"
                alt="DJI Air 2S"
              />
              <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    DJI Air 2S
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Save</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card >
              <CardMedia
                component="img"
                height="250"
                image="https://www.scandinavianphoto.se/globalassets/1050797.jpg?ref=81F07EDA5A&w=960&h=960&mode=max"
                alt="DJI FPV"
              />
              <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    DJI FPV
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Save</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item>
            <Card >
              <CardMedia
                component="img"
                height="250"
                image="https://media.wired.com/photos/5a304aaf1a76b709196023a8/master/w_2560%2Cc_limit/DJIdrone-topart.jpg"
                alt="DJI Phantom"
              />
              <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    DJI Phantom
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Like</Button>
                  <Button size="small">Save</Button>
              </CardActions>
            </Card>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default App;
