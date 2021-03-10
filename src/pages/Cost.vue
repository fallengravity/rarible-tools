<template>
  <q-page>
    <div class="row text-center">
      <div class="col-xs-12 col-sm-12" style="padding: 1%">
        <q-btn-group outline class="q-ma-xl" dark>
          <q-btn outline color="white" class="q-pa-md">1 ETH to USD: ${{ usdValue }}</q-btn>
          <q-btn outline color="red" class="q-pa-md">Safe Low: {{ glow }} GWEI</q-btn>
          <q-btn outline color="orange" class="q-pa-md">Average: {{ gaverage }} GWEI</q-btn>
          <q-btn outline color="yellow" class="q-pa-md">Fast: {{ gfast }} GWEI</q-btn>
          <q-btn outline color="green" class="q-pa-md">Fastest: {{ gfastest }} GWEI</q-btn>
    </q-btn-group>
      </div>
    </div>
    <h5 style="margin: 0.5%" class="text-center text-white"> Singles (ERC721) </h5>
    <div class="row text-center justify-evenly q-ma-xl">
      <div class="col-sm-3" style="padding: 1%">
        <q-card class="my-card shadow-12 q-pa-lg">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Creating Unique ERC721 Collection:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Deploy Custom ERC721 Collection
              <br />
              Gas Limit Used For Calculation: 3,173,320
            </div>
            <br>
              <q-list style="margin-top: 1%" dark dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section class="text-orange">
                    Safe Low: {{ (safeLow * 3173320) / 1e18 }} ETH || ${{ (((safeLow * 3173320) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 3173320) / 1e18 }} ETH || ${{ (((average * 3173320) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-green">
                    Fast: {{ (fast * 3173320) / 1e18 }} ETH || ${{ (((fast * 3173320) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple class="text-blue">
                  <q-item-section>
                    Fastest: {{ (fastest * 3173320) / 1e18 }} ETH || ${{ (((fastest * 3173320) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-3" style="padding: 1%">
        <q-card class="my-card q-pa-lg shadow-12">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Minting ERC721 in the default collection for the first time:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Approve ERC721 - Default Collection
              <br />
              Gas Limit Used For Calculation: 45,306
            </div>
            <br>
              <q-list style="margin-top: 1%" dark dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section class="text-orange">
                    Safe Low: {{ (safeLow * 45306) / 1e18 }} ETH || ${{ (((safeLow * 45306) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 45306) / 1e18 }} ETH || ${{ (((average * 45306) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-green">
                    Fast: {{ (fast * 45306) / 1e18 }} ETH || ${{ (((fast * 45306) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-blue">
                    Fastest: {{ (fastest * 45306) / 1e18 }} ETH || ${{ (((fastest * 45306) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class=" col-sm-3" style="padding: 1%">
        <q-card class="my-card  q-pa-lg shadow-12">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Minting ERC721 in the default collection after approval:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Mint ERC721 - Default Collection
              <br />
              Gas Limit Used For Calculation: 293,952
            </div>
            <br>
              <q-list style="margin-top: 1%" dark dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section class="text-orange">
                    Safe Low: {{ (safeLow * 293952) / 1e18 }} ETH || ${{ (((safeLow * 293952) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 293952) / 1e18 }} ETH || ${{ (((average * 293952) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-green">
                    Fast: {{ (fast * 293952) / 1e18 }} ETH || ${{ (((fast * 293952) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-blue">
                    Fastest: {{ (fastest * 293952) / 1e18 }} ETH || ${{ (((fastest * 293952) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h5 style="margin: 0.5%" class="text-center text-white q-pt-xl"> Multiples (ERC1155) </h5>
    <div class="row text-center justify-evenly q-mt-xl">
      <div class=" col-sm-3" style="padding: 1%">
        <q-card class="my-card shadow-12 q-pa-lg">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Creating Unique ERC1155 Collection:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Deploy Custom ERC1155 Collection
              <br />
              Gas Limit Used For Calculation: 2,919,709
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section class="text-orange">
                    Safe Low: {{ (safeLow * 2919709) / 1e18 }} ETH || ${{ (((safeLow * 2919709) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 2919709) / 1e18 }} ETH || ${{ (((average * 2919709) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-green">
                    Fast: {{ (fast * 2919709) / 1e18 }} ETH || ${{ (((fast * 2919709) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-blue">
                    Fastest: {{ (fastest * 2919709) / 1e18 }} ETH || ${{ (((fastest * 2919709) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class=" col-sm-3" style="padding: 1%">
        <q-card class="my-card shadow-12 q-pa-lg">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Minting ERC1155 in the default collection for the first time:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Approve ERC1155 - Default Collection
              <br />
              Gas Limit Used For Calculation: 45,153
            </div>
            <br>
            <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
              <q-item clickable v-ripple>
                <q-item-section class="text-orange">
                  Safe Low: {{ (safeLow * 45153) / 1e18 }} ETH || ${{ (((safeLow * 45153) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Average: {{ (average * 45153) / 1e18 }} ETH || ${{ (((average * 45153) / 1e18) * usdValue).toFixed(2) }}
              </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section class="text-green">
                  Fast: {{ (fast * 45153) / 1e18 }} ETH || ${{ (((fast * 45153) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section class="text-blue">
                  Fastest: {{ (fastest * 45153) / 1e18 }} ETH || ${{ (((fastest * 45153) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class=" col-sm-3" style="padding: 1%">
        <q-card class="my-card shadow-12 q-pa-lg">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Minting ERC1155 in the default collection after approval:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Mint ERC1155 in Default Collection
              <br />
              Gas Limit Used For Calculation: 209,103
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section class="text-orange">
                    Safe Low: {{ (safeLow * 209103) / 1e18 }} ETH || ${{ (((safeLow * 209103) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 209103) / 1e18 }} ETH || ${{ (((average * 209103) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section class="text-green">
                    Fast: {{ (fast * 209103) / 1e18 }} ETH || ${{ (((fast * 209103) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section  class="text-blue">
                    Fastest: {{ (fastest * 209103) / 1e18 }} ETH || ${{ (((fastest * 209103) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h5 style="margin: 0.5%" class="text-center text-white q-pt-xl"> Bidding & Purchasing </h5>
    <div class="row text-center justify-evenly q-mt-xl q-mb-xl">
      <div class="col-xs-12 col-sm-6 " style="padding: 1%">
        <q-card class="my-card shadow-12">
          <q-card-section>
            <div class="text-h6 text-orange-10">Cost of Creating a bid</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Coming soon.
            </div>
            <br>
            <div class="text-h6">Coming Soon</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import Web3 from 'web3';

export default {
  name: 'Unwrap',
  data() {
    return {
      provider: {},
      balance: 'Fetch WETH Balance',
      contract: '',
      userAccount: [],
      usdValue: 0,
      amount: 0,
      safeLow: 0,
      average: 0,
      fast: 0,
      fastest: 0,
      glow: 0,
      gaverage: 0,
      gfast: 0,
      gfastest: 0,
    };
  },
  mounted() {
    this.$axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd').then((result) => {
      this.usdValue = result.data.ethereum.usd;
    });
    this.$axios.get('https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=09d37849af10812f38383db86365b6102829c16fc0fb49ba0517647fbb10').then((res) => {
      this.safeLow = Web3.utils.toWei((res.data.safeLow / 10).toString(), 'gwei');
      this.average = Web3.utils.toWei((res.data.average / 10).toString(), 'gwei');
      this.fast = Web3.utils.toWei((res.data.fast / 10).toString(), 'gwei');
      this.fastest = Web3.utils.toWei((res.data.fastest / 10).toString(), 'gwei');
      this.glow = (res.data.safeLow / 10);
      this.gaverage = (res.data.average / 10);
      this.gfast = (res.data.fast / 10);
      this.gfastest = (res.data.fastest / 10);
    });
  },
  methods: {},
};
</script>
