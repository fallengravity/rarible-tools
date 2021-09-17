<template>
<q-page>
  <q-card dark bordered style="margin: 2%">
  <q-card-section>
    <q-input dark outlined v-model="uri" label="Outlined" />
    <br>
    <q-input dark outlined v-model="creator" label="Outlined" />
    <br>
    <q-input dark outlined v-model="creatorPercentage" label="Outlined" />
    <br>
    <q-input dark outlined v-model="royalties" label="Outlined" />
    <br>
    <q-input dark outlined v-model="royaltiesBasis" label="Outlined" />
    <br>
    <q-btn dark color="white" @click="mint" text-color="black" label="Look For Open Positions" />
  </q-card-section>

  <q-separator dark inset />

  <q-card-section>
  </q-card-section>
</q-card>
</q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      uri: '',
      creator: '',
      creatorPercentage: '100',
      royalties: '',
      royaltiesBasis: '1000',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      if (this.$API.userAccount === undefined) {
        await this.$API.init();
        this.load();
      }
    },
    load() {
      [this.creator] = this.$API.userAccount;
      [this.royalties] = this.$API.userAccount;
    },
    async mint() {
      this.$axios.get(`https://api-dev.rarible.com/protocol/v0.1/ethereum/nft/collections/0x0f886642b88b3d1cb4a9e14b65f79907fd39f5c2/generate_token_id?minter=${this.$API.userAccount[0]}`).then((result) => {
        console.log(result.data);
        const msgParams = JSON.stringify({
          types: {
            EIP712Domain: [
              {
                type: 'string',
                name: 'name',
              },
              {
                type: 'string',
                name: 'version',
              },
              {
                type: 'uint256',
                name: 'chainId',
              },
              {
                type: 'address',
                name: 'verifyingContract',
              },
            ],
            Mint721: [
              { name: 'tokenId', type: 'uint256' },
              { name: 'tokenURI', type: 'string' },
              { name: 'creators', type: 'Part[]' },
              { name: 'royalties', type: 'Part[]' },
            ],
            Part: [
              { name: 'account', type: 'address' },
              { name: 'value', type: 'uint96' },
            ],
          },
          domain: {
            name: 'Mint721',
            version: '1',
            chainId: 3,
            verifyingContract: '0x0f886642b88b3d1cb4a9e14b65f79907fd39f5c2',
          },
          primaryType: 'Mint721',
          message: {
            '@type': 'ERC721',
            contract: '0x0f886642b88b3d1cb4a9e14b65f79907fd39f5c2',
            tokenId: result.data.tokenId,
            tokenURI: '/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp',
            uri: '/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp',
            creators: [
              {
                account: `${this.creator}`,
                value: this.creatorPercentage,
              },
            ],
            royalties: [
              {
                account: `${this.royalties}`,
                value: this.royaltiesBasis,
              },
            ],
          },
        });
        const params = [this.$API.userAccount[0], msgParams];
        const method = 'eth_signTypedData_v4';
        this.$API.web3.currentProvider.send(method, params, this.$API.userAccount[0]).then((results) => {
          console.log(results);
          this.$axios.post('https://api-dev.rarible.com/protocol/v0.1/ethereum/nft/mints', {
            '@type': 'ERC721',
            contract: '0x0f886642b88b3d1cb4a9e14b65f79907fd39f5c2',
            tokenId: result.data.tokenId,
            tokenURI: '/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp',
            uri: '/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp',
            creators: [
              {
                account: `${this.creator}`,
                value: this.creatorPercentage,
              },
            ],
            royalties: [
              {
                account: `${this.royalties}`,
                value: this.royaltiesBasis,
              },
            ],
            signatures: [
              `${results.result}`,
            ],
          }).then((resp) => {
            console.log(resp);
          });
        });
      });
    },
  },
};
</script>
