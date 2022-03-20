import * as React from 'react';
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
import { Theme, Box, Paper, useTheme } from '@material-ui/core'
import {ethers} from 'ethers'
import Project from "./projects/index"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DeepPro
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
    height:"0px"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(0),
  },
  card: {
    height: '20%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

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

const HomePage: React.FC = () => {
  const classes = useStyles();
  const back = {
    backgroundImage: "url(/images/BackgroundDeepPro.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
	  height: '100%'
  }

  const [try_logging, setTry_logging] = React.useState(false);
  const [address, setAddress] = React.useState<string>("");
  const [addressReady, setAddressReady] = React.useState<boolean>(false);
  const [goToProject, setGoToProject] = React.useState<boolean>(false);

  const theme = useTheme();

	return (
    <React.Fragment > 
      	<main >
		{goToProject && (
			<Project getAddress={address}></Project>
		)}
		{!goToProject && !try_logging && (
				<div>
				<CssBaseline />
				<div style={back}>
				<div style={{}}>
				<img
				alt={''}
				src="/images/front.png"
				style={{ height: '500px',
				width: '100%' }}
				></img>
				</div>
			{/* <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/images/front.png")', backgroundSize: 'cover' }}> */}
			{/* </div> */}
			<div >
			<Container maxWidth="sm" >
				{ !addressReady && (
				<div className={classes.heroButtons}>
				<Grid container spacing={2} justifyContent="center">
					<Grid item>
					<Button onClick={() => {setTry_logging(true)}} variant="contained" color="primary">
						sign in
					</Button>
					</Grid>
				</Grid>
				</div>
				)}
			</Container>
			</div>
			<Container className={classes.cardGrid} maxWidth="md">
			<Grid container spacing={4} >
				<ImageList sx={{ width: 500, height: 450}} cols={3} rowHeight={164}>
				{itemData.map((item) => (
					<Button onClick={() => {setGoToProject(true)}}>

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
      <footer style={{paddingBottom: '20px', height:'30px'}}>
                <Copyright />
                <div  style={{height:'30px'}}/>
            </footer>
			</div>
			</div>
	) }
	{!goToProject && try_logging && (
		<Paper className={classes.container}>
		<Grid container>
			<Box
				className={classes.image}
				component={Grid}
				//@ts-ignore
				item
				md={5}
				lg={5}
				xl={6}
				display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
				>
				{theme.palette.type === 'dark' ? (
					<img
					style={{ display: 'inline-block' }}
					alt="logo Light"
					src="/images/logo-light-left-shadow.png"
					width={600}
					/>
					) : (
						<img
						style={{ display: 'inline-block' }}
						alt="logo Dark"
						src="/images/logo-mono-left-shadow.png"
						width={600}
						/>
				)}
				<Typography variant="h3" className={classes.pannelTitle}>
					Blockchain made simple
				</Typography>
			</Box>
			<Grid item className={classes.cardSigning} xs={12} sm={12} md={12} lg={7} xl={6}>
				<StartonCardWeb3Provider setEverything={((value) => {
					setTry_logging(false)
					setAddress(value);
					setAddressReady(true);
					console.log(value)
				})}/>
			</Grid>
			</Grid>
		</Paper>
	)}
	
            
            
            {/* End footer */}

      </main>
    </React.Fragment >
  );
}

export default HomePage