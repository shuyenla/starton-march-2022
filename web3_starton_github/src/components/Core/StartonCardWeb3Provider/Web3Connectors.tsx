import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

export const NETWORK_NAMES: { [chainId: number]: string } = {
	1: 'Ethereum Mainnet',
	3: 'Ethereum Ropsten',
	56: 'Binance Mainnet',
	97: 'Binance Testnet',
	43114: 'Avalanche Mainnet',
	43113: 'Avalanche Fuji',
	137: 'Polygon Mainnet',
	80001: 'Polygon Mumbai',
}
export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 56, 97, 43114, 43113, 137, 80001] })

export const walletconnect = (chainId: number, rpcUrl: string) => {
	return new WalletConnectConnector({
		rpc: {
			[chainId]: rpcUrl,
		},
		pollingInterval: 12000,
		qrcode: true,
	})
}

export const walletlink = (chainId: number, rpcUrl: string) => {
	return new WalletLinkConnector({
		url: rpcUrl,
		appName: 'Starton',
		supportedChainIds: [chainId],
	})
}
