import React from 'react'
import { Button, Box, CardContent, Theme, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import Modal from '@mui/material/Modal'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useTranslation } from 'react-i18next'
import { StartonButton } from 'components/Core'
import { makeStyles } from '@material-ui/styles'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import clsx from 'clsx'
import { injected, walletconnect, walletlink } from './Web3Connectors'
import { StartonCard } from '../StartonCard'


type StyleProps = Record<string, string | number>
type StyleClassKey =
	| 'myContainer'
	| 'cardContent'
	| 'modalAction'
	| 'listItem'
	| 'listItemGutters'
	| 'listItemText'
	| 'modalStatus'
type PropClasses = Record<StyleClassKey, string>

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => {
	return {
		myContainer: {
			width: '100%',
			minHeight: '30em',
			maxWidth: '600px',
			borderRadius: '12px !important',
			[theme.breakpoints.down('xs')]: {
				paddingTop: '70px',
			},
			[theme.breakpoints.down(350)]: {
				paddingTop: '350px !important',
			},
		},
		cardContent: {
			padding: '44px !important',
		},
		modalStatus: {
			position: 'absolute',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '400px',
			height: '300px',
			backgroundColor: theme.palette.background.paper,
			border: '0px solid #000',
			borderRadius: '12px !important',
			padding: '10px',
		},
		modalAction: {
			width: '100%',
		},
		listItem: {
			display: 'flex',
			justifyContent: 'center !important',
		},
		listItemGutters: {
			padding: '20px 10px !important',
		},
		listItemText: {
			alignItems: 'end !important',
			flexShrink: 0,
			paddingLeft: '4%',
			paddingTop: '10px',
			fontSize: '1.12em',
			maxWidth: '70% !important',
		},
	}
})

const CardSigning = (props: any) => {
	const classes: PropClasses = useStyles({} as StyleProps)
	const { t } = useTranslation()

	//@ts-ignore
	const [verified, setVerified] = React.useState<boolean>(false)
	const [open, setOpen] = React.useState<boolean>(false)

	const context = useWeb3React<Web3Provider>()
	const { connector, library, chainId, /*, account,*/ activate, deactivate, error } = context

	const disconnect = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (connector) {
			deactivate()
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (connector && connector.close) connector?.close()
		}
	}

	// checkSignature(signature): string {
	// 	address = ethers.utils.verifyMessage('Welcome to Starton', signature);
	
	// 	return 'Succesfully signed';
	// }

	// const verifyWallet = async () => {
	// 	/**
	// 	 * Fix invalid signature
	// 	 * Use personal_sign instead of eth_sign
	// 	 * https://github.com/walletlink/walletlink/issues/45
	// 	 * */
	// 	Object.defineProperties(library?.provider, { isMetaMask: { value: true } })

	// 	try {
	// 		await library?.getSigner().signMessage('Welcome to Starton' as string)
	// 		library?.
	// 		/* Send the return of the signature at your back end here
	// 		 await axios.post('/verify-message', ...)
	// 			*/
	// 		setVerified(true)
	// 	} catch (err) {
	// 		disconnect()
	// 	}
	// }

	const verifyWallet = async () => {
        /**
         * Fix invalid signature
         * Use personal_sign instead of eth_sign
         * https://github.com/walletlink/walletlink/issues/45
         * */
        Object.defineProperties(library?.provider, { isMetaMask: { value: true } })

        try {
			const signer = library?.getSigner()
			const address = await signer?.getAddress()
            await signer.signMessage('Welcome to DeepPro' as string)
                .then(() => {
					props.setEverything(address);
                })
        } catch (err) {
            if (connector) {
                deactivate()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (connector && connector.close) connector?.close()
            }
        }
    }

	const web3Providers = [
		{
			connect: injected,
			img: '/images/metamask.svg',
			text: t('signing.descriptionMetaMaskk'),
		},
		// {
		// 	connect: portis,
		// 	img: '/images/portis.svg',
		// 	text: t('signing.descriptionPortis'),
		// },
		{
			//@ts-ignore
			connect: walletconnect(1),
			img: '/images/walletConnect.svg',
			text: t('signing.descriptionWalletConnect'),
		},
		{
			//@ts-ignore
			connect: walletlink(1),
			img: '/images/walletLink.svg',
			text: t('signing.descriptionWalletLink'),
		},
	]

	return (
		<React.Fragment>
			<StartonCard className={classes.myContainer}>
				<CardContent classes={{ root: classes.cardContent }}>
					<Typography
						variant="h4"
						align="center"
						style={{ fontWeight: 600, fontSize: '1.85rem' }}
						gutterBottom
					>
						{t('signing.portailTitle')}
					</Typography>
					<Typography variant="h6" align="center" gutterBottom>
						{t('signing.portailText')}
					</Typography>
					<List>
						{web3Providers.map((provider, index) => {
							return (
								<ListItem
									onClick={() => {
										activate(provider?.connect)
										setOpen(true)
									}}
									key={index}
									classes={{ gutters: classes.listItemGutters, root: classes.listItem }}
									role={undefined}
									alignItems="center"
									divider
									button
								>
									<ListItemIcon>
										<img
											alt={''}
											src={provider.img}
											width={40}
											height={40}
											style={{ height: '40px' }}
										></img>
									</ListItemIcon>
									<ListItemText
										disableTypography
										classes={{ root: classes.listItemText }}
										primary={<Typography>{provider.text}</Typography>}
									/>
								</ListItem>
							)
						})}
					</List>
				</CardContent>
			</StartonCard>
			{error || chainId === undefined ? (
				<Modal
					open={open}
					onClose={() => {
						setOpen(false)
						disconnect()
					}}
				>
					{!error && chainId === undefined ? (
						<Alert
							severity="info"
							action={
								<Button
									color="inherit"
									size="small"
									onClick={() => {
										disconnect()
										setOpen(false)
									}}
								>
									{t('signing.return')}
								</Button>
							}
						>
							{t('signing.info')}
						</Alert>
					) : (
						<Alert
							severity="warning"
							action={
								<Button
									color="inherit"
									size="small"
									onClick={() => {
										disconnect()
										setOpen(false)
									}}
								>
									{connector && chainId ? t('signing.disconnect') : t('signing.return')}
								</Button>
							}
						>
							{error ? error.message : t('signing.wrongNetwork')}
						</Alert>
					)}
				</Modal>
			) : (
				connector && (
					<Modal open={open}>
						<Box className={classes.modalStatus}>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								{t('signing.connected')}
							</Typography>
							<Typography style={{ textAlign: 'center' }}>
								{t('signing.accountAuthenticationText')}
							</Typography>
							<StartonButton
								style={{ width: '30%' }}
								variant="outlined"
								className={clsx(classes.modalAction, 'order-1 md:order-2 md:ml-2 mt-5')}
								onClick={() => {
									disconnect()
									setOpen(false)
								}}
							>
								{t('signing.cancel')}
							</StartonButton>

							<StartonButton
								style={{ width: '30%' }}
								className={clsx(classes.modalAction, 'order-1 md:order-2 md:ml-2 mt-5')}
								onClick={() => {
									verifyWallet()
									setOpen(false)
								}}
							>
								{t('signing.continue')}
							</StartonButton>
						</Box>
					</Modal>
				)
			)}
		</React.Fragment>
	)
}

export default CardSigning
