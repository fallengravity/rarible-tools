<template>
  <q-page>
    <div class="row text-center justify-evenly q-pt-xl">
      <div class="col-xs-12 col-sm-5" style="padding: 1%;">
        <q-card class="my-card q-pa-lg ">
          <q-card-section>
            <div class="text-h6 text-orange-10">Add Unlockable Content</div>
            <div class="text-subtitle2 q-mt-lg">
              <br>
              <q-input dark outlined v-model="collection" label="Please Enter Collection Address" style="margin-top: 2%;" />
              <q-input dark outlined v-model="tokenId" label="Please Enter Token Id" style="margin-top: 2%;" />
              <q-input dark outlined v-model="content" label="Please Enter Unlockable Content" style="margin-top: 2%;" />
              <br>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions class="text-center" horizontal>
            <q-btn class="text-center" @click="createUnlockable" flat><q-icon class="q-pa-sm text-red" name="fas fa-lock" /> Add Unlockable Content</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
 </q-page>
</template>

<script>
export default {
  name: 'Unlockable',
  data() {
    return {
      collection: '',
      content: '',
      tokenId: '',
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
    createUnlockable() {
      this.$API.web3.eth.personal.sign(`I would like to set lock for ${this.collection}:${this.tokenId}. content is ${this.content}`, `${this.userAccount[0]}`).then((result) => {
        this.$axios.post(`https://api.rarible.com/protocol/v0.1/ethereum/unlockable/item/${this.collection}%3A${this.tokenId}/lock`, {
          signature: result,
          content: `${this.content}`,
        }).then((response) => {
          console.log(response.data);
        });
        console.log(result);
      });
    },
  },
};
</script>
