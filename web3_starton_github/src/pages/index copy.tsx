import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import StartonCardWeb3Provider from 'components/Core/StartonCardWeb3Provider'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 10,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = {[
//   1: image='url("/images/pro_one.png")', 
//   2: image='url("/images/pro_one.png")', 
//   3: image='url("/images/pro_one.png")'
//  ]};

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
// ];
const itemData = [
  {
    img: './images/picone.png',
    // title: 'Breakfast',
  },
  {
    img: './images/pictwo.png',
    // title: 'Breakfast',
  },
  {
    img: './images/picthree.png',
    // title: 'Breakfast',
  },
];

export default function Album() {
  const classes = useStyles();
  const back = {
    backgroundImage: "url(/images/BackgroundDeepPro.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
	  height: '100%',
    width: '100%'
  }

  return (
    <React.Fragment >
      <CssBaseline />
      <main >
		<div style={back}>
        <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/images/front.png")', backgroundSize: 'cover' }}>
        </div>
        <div >
          <Container maxWidth="sm" >
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button href="./sign_in/" variant="contained" color="primary">
                    sign in
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} >
            <ImageList sx={{ width: 500, height: 450}} cols={3} rowHeight={164}>
              {itemData.map((item) => (
        <Button href="./projects/">

          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

          </ImageListItem>
        </Button>

              ))}
            </ImageList>
          </Grid>
        </Container >
		</div>
      </main >
    </React.Fragment >
  );
}