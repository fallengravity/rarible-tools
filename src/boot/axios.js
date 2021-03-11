import Vue from 'vue';
import axios from 'axios';
import Onboard from 'bnc-onboard';
import Web3 from 'web3';

const API = {};
const apiKey = '50857081-537f-45cc-8ac2-589bddd619e3';
const networkId = 1;
const FORTMATIC_KEY = 'pk_live_37D874D6AE5A87C3';
const INFURA_KEY = 'ad2ee80801ce45de9dd717e612c904cb';
const RPC_URL = 'https://mainnet.infura.io/v3/4ece25e8c99949f4ba77d08942399082';
const APP_NAME = 'Rarible Tools';
const wallets = [
  {
    walletName: 'metamask',
    preferred: true,
  },
  {
    walletName: 'fortmatic',
    apiKey: FORTMATIC_KEY,
    preferred: true,
  },
  {
    walletName: 'walletConnect',
    infuraKey: INFURA_KEY,
    preferred: true,
  },
  {
    walletName: 'walletLink',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
    preferred: true,
  },
];

API.Web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/4ece25e8c99949f4ba77d08942399082'),
);
let web3;

const onboard = Onboard({
  dappId: apiKey,
  networkId,
  darkMode: true,
  subscriptions: {
    wallet: (wallet) => {
      web3 = new Web3(wallet.provider);
      API.web3 = web3;
    },
  },
  walletSelect: {
    heading: 'Welcome to Rarible Tools!',
    description: 'In order to interact with our toolset, please select your wallet below, then follow the steps on screen to begin using Rarible tools.',
    wallets,
  },
});

console.log(onboard);
API.onboard = onboard;

Vue.prototype.$API = API;
Vue.prototype.$axios = axios;
