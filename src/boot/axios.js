import Vue from 'vue';
import axios from 'axios';
import Onboard from 'bnc-onboard';
import Web3 from 'web3';

const API = {};
const apiKey = '0ee58158-e48f-492b-b7df-92554915a6b3';
const networkId = 3;
const FORTMATIC_KEY = 'pk_live_61EC2B200F4216C6';
const PORTIS_KEY = '924889fa-9818-473f-8ceb-a86b7248d5c5';
const INFURA_KEY = 'ad2ee80801ce45de9dd717e612c904cb';
const APP_URL = 'https://app.fundamenta.network';
const CONTACT_EMAIL = 'admin@fundamenta.network';
const RPC_URL = 'https://ropsten.infura.io/v3/ad2ee80801ce45de9dd717e612c904cb';
const APP_NAME = 'Fundamenta';
const wallets = [{
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
API.onboard = onboard;
let userAccount;
API.userStatus = false;
API.init = () => new Promise((resolve) => {
  const func = async () => {
    await onboard.walletSelect();
    await onboard.walletCheck();
    userAccount = await web3.eth.getAccounts();
    API.userAccount = userAccount;
    [API.userAddress] = userAccount;
    API.userStatus = true;
    resolve(userAccount);
  };
  func();
});

Vue.prototype.$axios = axios;
Vue.prototype.$API = API;
