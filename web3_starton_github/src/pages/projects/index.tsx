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

const ProjectWallet : string = "0x306f85da13b72b8aba2a0f0e9f2be10c5c2a6317";
let http : any;
let axios : any;

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



function SelectTextFields(props: any) {
    const [currency, setCurrency] = React.useState('100');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
		// http.post('/smart-contract/ethereum-ropsten/0x4CA0C47f529602f0DB24B4C1345BB27E94069806/call',
		// {
		// 	"functionName": 'transferFrom',
		// 	"signerWallet": props.address,
		// 	"speed": "low",
		// 	"params": [
		// 		props.address, // address 0x0000000000000000000000000000000000000000
		// 		ProjectWallet, // address 0x0000000000000000000000000000000000000000
		// 		currency // uint256 42
		// 	],

		// }).then(response => { console.log(response.data) })
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

function setupSC() {
	axios = require("axios")

	http = axios.create({
		baseURL: "https://api.starton.io/v2",
		headers: {
			"x-api-key": 'ICoUgf6mDoKpgWo4aJJC6kOOA5APTeqO',
		},
	})
}

const Project: React.FC = (props : any) => {
    const classes = useStyles();

	setupSC();

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
                <Container>
                    FUNDING GOAL
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
					<div style={{width: '80%', height: '230px'}}>
						<img src="/images/croped_found_goal.png" 
							style={{marginTop: '50px', marginLeft: '12%',
									display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
					</div>
				</Container>
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


<SelectTextFields address={props.getAddress}></SelectTextFields>
            </main>
            <footer className={classes.footer}>
                <Copyright />
            </footer>
        </React.Fragment>
    );
}

export default Project
