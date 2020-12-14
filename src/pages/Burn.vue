<template>
  <q-page>
    <div class="row text-center">
      <div class="col-xs-12 col-sm-6" style="padding: 1%;">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Burn ERC721</div>
        <div class="text-subtitle2">
          Please note we can only burn items located in the default Rarible Collection.
          <q-input outlined v-model="single" label="Please Enter Token ID" style="margin-top: 2%;" />
          <q-input disable outlined v-model="nada" label="Amount is not required for ERC 721" style="margin-top: 2%;" />
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="text-center" horizontal>
        <q-btn class="text-center" @click="BurnSingle" flat>Burn</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div class="col-xs-12 col-sm-6" style="padding: 1%;">
    <q-card class="my-card">
  <q-card-section>
    <div class="text-h6">Burn ERC1155</div>
    <div class="text-subtitle2">
      Please note we can only burn items located in the default Rarible Collection.
      <q-input outlined v-model="multi" label="Please Enter Token ID" style="margin-top: 2%;" />
      <q-input outlined v-model="amount" label="Please Enter The Amount to Burn" style="margin-top: 2%;" />
    </div>
  </q-card-section>

  <q-separator />

  <q-card-actions class="text-center" horizontal>
    <q-btn class="text-center" @click="BurnMulti" flat>Burn</q-btn>
  </q-card-actions>
</q-card>
</div>
</div>
  </q-page>
</template>

<script>
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import singleABI from '../assets/singleABI.json';
import multiABI from '../assets/multiABI.json';

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
  name: 'Burn',
  data() {
    return {
      single: '',
      multi: '',
      amount: '',
      nada: '',
    };
  },
  methods: {
    async BurnSingle() {
      const address = '0x60F80121C31A0d46B5279700f9DF786054aa5eE5';
      const contract = new window.web3.eth.Contract(singleABI, address);
      const provider = await detectEthereumProvider();
      if (provider) {
        const userAccount = await provider.request({
          method: 'eth_requestAccounts',
        });
        const id = window.web3.eth.abi.encodeParameter(
          'uint256',
          this.single,
        );
        contract.methods
          .burn(id)
          .send({
            from: userAccount[0],
          }).then((response) => {
            this.$q.notify('Successful');
            console.log(response);
          }).catch((e) => {
            if (e.code === 4001) {
              this.$q.notify(e.message);
            } else {
              this.$q.notify(`Please contact the developer with this error code: ${e.message}`);
            }
          });
      }
    },
    async BurnMulti() {
      const address = '0xd07dc4262bcdbf85190c01c996b4c06a461d2430';
      const contract = new window.web3.eth.Contract(multiABI, address);
      const provider = await detectEthereumProvider();
      if (provider) {
        const userAccount = await provider.request({
          method: 'eth_requestAccounts',
        });
        const id = window.web3.eth.abi.encodeParameter(
          'uint256',
          this.multi,
        );
        const amountInt = window.web3.eth.abi.encodeParameter(
          'uint256',
          this.amount,
        );
        contract.methods
          .burn(userAccount[0], id, amountInt)
          .send({
            from: userAccount[0],
          }).then((response) => {
            this.$q.notify('Successful');
            console.log(response);
          }).catch((e) => {
            if (e.code === 4001) {
              this.$q.notify(e.message);
            } else {
              this.$q.notify(`Please contact the developer with this error code: ${e.message}`);
            }
          });
      }
    },
  },
};
</script>
