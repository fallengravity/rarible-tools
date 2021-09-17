<template>
  <q-page>
    <div class="row text-center justify-evenly q-pt-xl">
      <div class="col-xs-12 col-sm-6 " style="padding: 1%">
        <q-card class="my-card ">
          <q-card-section>
            <div class="text-h6 text-orange-10 q-mt-lg">Unwrap WETH (WETH -> ETH)</div>
            <div class="text-subtitle2 q-ma-lg">
              Please note we use the official WETH contract for unwrapping.
              <br />
              <q-btn
                push
                color="dark"
                @click="getBalance"
                text-color="white"
                :label="balance"
                style="margin: 3%"
              ></q-btn>
              <q-input
              dark
                outlined
                v-model="amount"
                label="Please Enter Amount of WETH to Unwrap"
                style="margin-top: 2%"
              />
            </div>
          </q-card-section>

          <q-separator dark/>

          <q-card-actions class="text-center" horizontal>
            <q-icon class="q-pa-sm text-red q-ml-lg" name="fas fa-box-open" />
            <q-btn class="text-center" @click="unwrap" flat> Unwrap my WETH!</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import wETH from '../assets/wABI.json';

const address = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'; // Production
// const address = '0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5'; // Ropsten

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
    this.init();
  },
  methods: {
    async init() {
      if (this.$API.userAccount === undefined) {
        await this.$API.init();
        this.CheckChainData();
      }
    },
    async getBalance() {
      const contract = new this.$API.web3.eth.Contract(wETH, address);
      contract.methods.balanceOf(this.$API.userAccount[0]).call().then((res) => {
        this.balance = `${res / 1e18} WETH`;
        this.amount = `${res / 1e18}`;
      });
    },
    async unwrap() {
      const weiAmount = this.$API.web3.utils.toWei(this.amount);
      console.log(`Amount in Wei: ${weiAmount}`);
      const finalAmount = this.$API.web3.eth.abi.encodeParameter('uint256', weiAmount);
      console.log(`Final Amount as uint256: ${finalAmount}`);
      const contract = new this.$API.web3.eth.Contract(wETH, address);
      contract.methods.withdraw(finalAmount).send({ from: this.$API.userAccount[0] }).then((res) => {
        console.log(res);
        this.getBalance();
      });
    },
  },
};
</script>
