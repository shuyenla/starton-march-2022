import * as React from 'react'
import { Theme, Box, Paper, Grid, Typography, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import StartonCardWeb3Provider from 'components/Core/StartonCardWeb3Provider'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



export interface IComponentProps { }

type StyleProps = Record<string, string>
type StyleClassKey = 'container' | 'body'

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	container: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	body: {
		backgroundImage: 'url("front.PNG")',
		// background-color: #cccccc,
	}
}))

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const HomePage: React.FC = () => {
	const theme = useTheme()
	const classes = useStyles({} as StyleProps)

	return (
		<React.Fragment>
			<Paper className={classes.container}>
				{/* // image */}
				<Grid container>
					<div style={{ width: '100%', backgroundImage: 'url("front.PNG")' }}> </div>
					<img style={{ width: '100%' }} src={('./front.PNG')} />
						Hello World
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>

				</Grid>
			</Paper>
		</React.Fragment>
	)
}

export default HomePage
