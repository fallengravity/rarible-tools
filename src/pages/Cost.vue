<template>
  <q-page>
    <div class="row text-center">
      <div class="col-xs-12 col-sm-12" style="padding: 1%">
        <q-btn-group outline>
          <q-btn outline color="black">1 ETH to USD: ${{ usdValue }}</q-btn>
          <q-btn outline color="black">Safe Low: {{ glow }} GWEI</q-btn>
          <q-btn outline color="black">Average: {{ gaverage }} GWEI</q-btn>
          <q-btn outline color="black">Fast: {{ gfast }} GWEI</q-btn>
          <q-btn outline color="black">Fastest: {{ gfastest }} GWEI</q-btn>
    </q-btn-group>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-xs-12 col-sm-4" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Cost of Creating Unique ERC721 Collection:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Deploy Custom ERC721 Collection
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section>
                    Safe Low: {{ (safeLow * 3173320) / 1e18 }} ETH || ${{ (((safeLow * 3173320) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 3173320) / 1e18 }} ETH || ${{ (((average * 3173320) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fast: {{ (fast * 3173320) / 1e18 }} ETH || ${{ (((fast * 3173320) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fastest: {{ (fastest * 3173320) / 1e18 }} ETH || ${{ (((fastest * 3173320) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Cost of Minting ERC721 in the default collection for the first time:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Approve ERC721 - Default Collection
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section>
                    Safe Low: {{ (safeLow * 45306) / 1e18 }} ETH || ${{ (((safeLow * 45306) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 45306) / 1e18 }} ETH || ${{ (((average * 45306) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fast: {{ (fast * 45306) / 1e18 }} ETH || ${{ (((fast * 45306) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fastest: {{ (fastest * 45306) / 1e18 }} ETH || ${{ (((fastest * 45306) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Cost of Minting ERC721 in the default collection after approval:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Mint ERC721 - Default Collection
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section>
                    Safe Low: {{ (safeLow * 293952) / 1e18 }} ETH || ${{ (((safeLow * 293952) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 293952) / 1e18 }} ETH || ${{ (((average * 293952) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fast: {{ (fast * 293952) / 1e18 }} ETH || ${{ (((fast * 293952) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fastest: {{ (fastest * 293952) / 1e18 }} ETH || ${{ (((fastest * 293952) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-xs-12 col-sm-4" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Cost of Creating Unique ERC1155 Collection:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Deploy Custom ERC1155 Collection
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section>
                    Safe Low: {{ (safeLow * 2919709) / 1e18 }} ETH || ${{ (((safeLow * 2919709) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 2919709) / 1e18 }} ETH || ${{ (((average * 2919709) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fast: {{ (fast * 2919709) / 1e18 }} ETH || ${{ (((fast * 2919709) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fastest: {{ (fastest * 2919709) / 1e18 }} ETH || ${{ (((fastest * 2919709) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Cost of Minting ERC1155 in the default collection for the first time:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Approve ERC1155 - Default Collection
            </div>
            <br>
            <!-- 45153 -->
            <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
              <q-item clickable v-ripple>
                <q-item-section>
                  Safe Low: {{ (safeLow * 45153) / 1e18 }} ETH || ${{ (((safeLow * 45153) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Average: {{ (average * 45153) / 1e18 }} ETH || ${{ (((average * 45153) / 1e18) * usdValue).toFixed(2) }}
              </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Fast: {{ (fast * 45153) / 1e18 }} ETH || ${{ (((fast * 45153) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Fastest: {{ (fastest * 45153) / 1e18 }} ETH || ${{ (((fastest * 45153) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4" style="padding: 1%">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Cost of Minting ERC1155 in the default collection after approval:</div>
            <div class="text-subtitle2">
              <br />
              Transaction Type: Mint ERC1155 in Default Collection
            </div>
            <br>
              <q-list style="margin-top: 1%" dense bordered padding class="rounded-borders text-left">
                <q-item clickable v-ripple>
                  <q-item-section>
                    Safe Low: {{ (safeLow * 209103) / 1e18 }} ETH || ${{ (((safeLow * 209103) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Average: {{ (average * 209103) / 1e18 }} ETH || ${{ (((average * 209103) / 1e18) * usdValue).toFixed(2) }}
                </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fast: {{ (fast * 209103) / 1e18 }} ETH || ${{ (((fast * 209103) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    Fastest: {{ (fastest * 209103) / 1e18 }} ETH || ${{ (((fastest * 209103) / 1e18) * usdValue).toFixed(2) }}
                  </q-item-section>
                </q-item>
              </q-list>
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
