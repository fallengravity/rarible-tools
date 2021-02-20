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
          <q-input disable outlined v-model="notReq" label="Amount is not required for ERC 721" style="margin-top: 2%;" />
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="text-center" horizontal>
        <q-btn class="text-center" @click="burnSingle" flat>Burn</q-btn>
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
    <q-btn class="text-center" @click="burnMulti" flat>Burn</q-btn>
  </q-card-actions>
</q-card>
</div>
</div>
  </q-page>
</template>

<script>
import singleABI from '../assets/singleABI.json';
import multiABI from '../assets/multiABI.json';

export default {
  name: 'Burn',
  data() {
    return {
      single: '',
      multi: '',
      amount: '',
      notReq: '',
      userAccount: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$API.onboard.walletSelect();
      await this.$API.onboard.walletCheck();
      this.userAccount = await this.$API.web3.eth.getAccounts();
    },
    alertSingleBurn() {
      this.$q.dialog({
        title: 'Burn Successful',
        message: `Item ${this.single} was successfully destroyed.`,
      });
    },
    alertMultiBurn() {
      this.$q.dialog({
        title: 'Burn Successful',
        message: `${this.amount} Copies of Item ${this.multi} were successfully destroyed.`,
      });
    },
    async burnSingle() {
      const address = '0x60f80121c31a0d46b5279700f9df786054aa5ee5';
      const contract = new this.$API.web3.eth.Contract(singleABI, address);
      const id = this.$API.web3.eth.abi.encodeParameter('uint256', this.single);
      contract.methods.burn(id).send({
        from: this.userAccount[0],
      }).then((response) => {
        console.log(response);
        this.alertSingleBurn();
      }).catch((e) => {
        if (e.code === 4001) {
          this.$q.notify(e.message);
        } else {
          this.$q.notify(`Please contact the developer with this error code: ${e.message}`);
        }
      });
    },
    async burnMulti() {
      const address = '0xd07dc4262bcdbf85190c01c996b4c06a461d2430';
      const contract = new this.$API.web3.eth.Contract(multiABI, address);
      const id = this.$API.web3.eth.abi.encodeParameter('uint256', this.multi);
      const amountInt = this.$API.web3.eth.abi.encodeParameter('uint256', this.amount);
      contract.methods.burn(this.userAccount[0], id, amountInt).send({
        from: this.userAccount[0],
      }).then((response) => {
        this.alertMultiBurn();
        console.log(response);
      }).catch((e) => {
        if (e.code === 4001) {
          this.$q.notify(e.message);
        } else {
          this.$q.notify(`Please contact the developer with this error code: ${e.message}`);
        }
      });
    },
  },
};
</script>
