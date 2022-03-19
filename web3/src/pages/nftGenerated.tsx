import * as React from 'react'
import { Theme, Box, Paper, Grid, Typography, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
//import StartonCardWeb3Provider from 'components/Core/StartonCardWeb3Provider'

export interface IComponentProps {}

type StyleProps = Record<string, string>
type StyleClassKey = 'container'

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	container: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap',
	}
}))

const nftGenerated: React.FC
 = () => {
	const classes = useStyles({} as StyleProps)

	return (
		<React.Fragment>
			<Paper className={classes.container}>
			<Typography variant="h3">
                NFT Generated
            </Typography>
			</Paper>
		</React.Fragment>
	)
}

export default nftGenerated