<template>
  <q-page>
    <div class="row text-center">
      <div class="col-xs-12 col-sm-6" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Unwrap WETH (WETH -> ETH)</div>
            <div class="text-subtitle2">
              Please note we use the official WETH contract for unwrapping.
              <br />
              <q-btn
                push
                color="white"
                @click="getBalance"
                text-color="primary"
                :label="balance"
                style="margin: 1%"
              ></q-btn>
              <q-input
                outlined
                v-model="amount"
                label="Please Enter Amount of WETH to Unwrap"
                style="margin-top: 2%"
              />
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions class="text-center" horizontal>
            <q-btn class="text-center" @click="unwrap" flat
              >Unwrap my WETH!</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import wETH from '../assets/wABI.json';

const address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
// const address = '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5';
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
};
if (!ethEnabled()) {
  alert(
    'Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!',
  );
}
export default {
  name: 'Unwrap',
  data() {
    return {
      provider: {},
      balance: 'Fetch WETH Balance',
      contract: '',
      userAccount: [],
      amount: 0,
    };
  },
  mounted() {
    this.getAccounts();
  },
  methods: {
    async getAccounts() {
      this.provider = await detectEthereumProvider();
      this.userAccount = await this.provider.request({
        method: 'eth_requestAccounts',
      });
    },
    async getBalance() {
      const contract = new window.web3.eth.Contract(wETH, address);
      contract.methods
        .balanceOf(this.userAccount[0])
        .call()
        .then((res) => {
          this.balance = `${res / 1e18} WETH`;
          this.amount = `${res / 1e18} WETH`;
        });
    },
    async unwrap() {
      const weiAmount = window.web3.utils.toWei(this.amount);
      console.log(`Amount in Wei: ${weiAmount}`);
      const finalAmount = window.web3.eth.abi.encodeParameter(
        'uint256',
        weiAmount,
      );
      console.log(`Final Amount as uint256: ${finalAmount}`);
      const contract = new window.web3.eth.Contract(wETH, address);
      contract.methods
        .withdraw(finalAmount)
        .send({ from: this.userAccount[0] })
        .then((res) => {
          console.log(res);
          this.getBalance();
        });
    },
  },
};
</script>
