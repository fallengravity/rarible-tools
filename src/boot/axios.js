import Vue from 'vue';
import axios from 'axios';
import Onboard from 'bnc-onboard';
import Web3 from 'web3';

const API = {};
const apiKey = '0ee58158-e48f-492b-b7df-92554915a6b3';
const networkId = 3;
const FORTMATIC_KEY = 'pk_live_37D874D6AE5A87C3';
const PORTIS_KEY = '298edcdf-0694-46fa-87df-a8bc3b2de37a';
const INFURA_KEY = 'ad2ee80801ce45de9dd717e612c904cb';
const APP_URL = 'https://tools.gravityenterprises.co.za';
const CONTACT_EMAIL = 'ethan@rarible.com';
const RPC_URL = 'https://mainnet.infura.io/v3/4ece25e8c99949f4ba77d08942399082';
const APP_NAME = 'Rarible Tools';
const wallets = [
  {
    walletName: 'coinbase',
  },
  {
    walletName: 'trust',
    rpcUrl: RPC_URL,
  },
  {
    walletName: 'metamask',
    preferred: true,
  },
  {
    walletName: 'authereum',
  },
  {
    walletName: 'trezor',
    appUrl: APP_URL,
    email: CONTACT_EMAIL,
    rpcUrl: RPC_URL,
  },
  {
    walletName: 'ledger',
    rpcUrl: RPC_URL,
    preferred: true,
  },
  {
    walletName: 'lattice',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
  },
  {
    walletName: 'fortmatic',
    apiKey: FORTMATIC_KEY,
    preferred: true,
  },
  {
    walletName: 'portis',
    apiKey: PORTIS_KEY,
    preferred: true,
  },
  {
    walletName: 'walletConnect',
    infuraKey: INFURA_KEY,
    preferred: true,
  },
  {
    walletName: 'opera',
  },
  {
    walletName: 'operaTouch',
  },
  {
    walletName: 'torus',
  },
  {
    walletName: 'status',
  },
  {
    walletName: 'walletLink',
    rpcUrl: RPC_URL,
    appName: APP_NAME,
    preferred: true,
  },
  {
    walletName: 'imToken',
    rpcUrl: RPC_URL,
  },
  {
    walletName: 'meetone',
  },
  {
    walletName: 'mykey',
    rpcUrl: RPC_URL,
  },
  {
    walletName: 'huobiwallet',
    rpcUrl: RPC_URL,
  },
  {
    walletName: 'hyperpay',
  },
  {
    walletName: 'wallet.io',
    rpcUrl: RPC_URL,
  },
  {
    walletName: 'atoken',
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
