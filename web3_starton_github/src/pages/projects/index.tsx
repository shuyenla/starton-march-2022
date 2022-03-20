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

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { g_signature } from './../../components/Core/StartonCardWeb3Provider/index'
// export { g_signature } : any = null;

const currencies = [
    {
        value: '20',
        label: '20',
    },
    {
        value: '50',
        label: '50',
    },
    {
        value: '100',
        label: '100',
    },
    {
        value: '200',
        label: '200',
    },
];
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
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



function SelectTextFields() {
    const [currency, setCurrency] = React.useState('100');
	// console.log(g_signature)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
		console.log(g_signature);
    };

    return (
        // <Box
        //   component="form"
        //   sx={{
        //     '& .MuiTextField-root': { m: 1, width: '25ch' },
        //   }}
        //   noValidate
        //   autoComplete="off"
        // >
        <div>
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your amount"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

        </div>
        // </Box>
    );
}

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div style={{ width: '100%', height: '500px', backgroundImage: 'url("/images/Ukraine_pro.jpeg")', backgroundSize: 'cover' }}>
                </div>
                <Container>
                    .
                </Container>
                <Container>
                    ACTION GOAL
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
					The situation on the border of Eastern Ukraine and the escalation of hostilities has triggered an outflow of Ukrainian refugees seeking safety from the conflict. As of March 12, the total number of refugees fleeing Ukraine reached 2.5 million people.
					This project aim to assist refugees and asylum seekers with local integration and self-reliance.
                </Container>
                {/* <Container>
                    FUNDING GOAL
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    Justo nec ultrices dui sapien eget mi proin. Libero enim sed faucibus turpis in. Amet tellus cras adipiscing enim eu turpis egestas pretium. Ipsum consequat nisl vel pretium lectus quam id. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh tellus molestie nunc non blandit massa. Suspendisse ultrices gravida dictum fusce ut placerat orci. Risus at ultrices mi tempus imperdiet nulla. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Laoreet suspendisse interdum consectetur libero id faucibus. Integer eget aliquet nibh praesent tristique magna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Sit amet facilisis magna etiam. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sed nisi lacus sed viverra tellus in hac habitasse platea. Condimentum id venenatis a condimentum.
                </Container> */}
                <Container >
                    DECISIONS
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    Once the required amount has been met, the participant will be able to vote for the different aid topics, which include :
					<div>
						. Distribution of food and hygienic kits
					</div> 
					<div>
						. Providing shelters with AirBnB bookings
					</div> 
					<div>
						. Recruitment of attorneys for legal aid
					</div> 
					<div>
						. Recruitment of psychiatrists specialized in war trauma
					</div> 
					<div>
						. Financing a literacy club for children
					</div> 
                </Container>


<SelectTextFields></SelectTextFields>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}




// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           {/* <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           /> */}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//         </form>
//       </div>
//     </Container>
//   );
// }