<template>
  <q-page>
    <div class="row text-center" style="display: flex; justify-content: center; align-items: center; background-color: transparent">
      <div class="col-xs-8 col-sm-8" style="padding: 1%; background-color: transparent">
        <q-input rounded filled v-model="itemId" placeholder="Please enter the item id" dark>
        <template v-slot:append>
          <q-avatar>
            <q-btn @click="getItemData" clickable>
              <q-icon name="search" color="white" />
            </q-btn>
          </q-avatar>
        </template>
      </q-input>
      </div>
    </div>
    <div class="row text-center justify-evenly q-mt-xl q-mb-xl" v-if="displayItem === true">
      <div class="col-xs-12 col-sm-6 " style="padding: 1%">
        <q-card class="my-card shadow-12">
          <q-card-section>
            <div class="text-h6 text-orange-10">{{ itemName }} - Blacklisted: {{ blacklisted }} </div>
            <div class="text-subtitle2">
              {{ itemDescription }}
            </div>
            <br>
            <q-img style="max-width: 100%; height: 400px;" :src="itemImage" contain basic />
            <br>
            <div class="text-h6 text-orange-10" style="margin-top: 2%;">Owners</div>
            <div class="text-subtitle2" style="margin-top: 2%;">
              {{ owners }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ItemView',
  data() {
    return {
      itemId: '',
      displayItem: false,
      itemName: '',
      itemDescription: '',
      itemImage: '',
      blacklisted: '',
      owners: [],
    };
  },
  methods: {
    getItemData() {
      this.$axios.get(`https://api-mainnet.rarible.com/items/${this.itemId}`).then((response) => {
        this.displayItem = true;
        this.itemName = response.data.properties.name;
        this.itemDescription = response.data.properties.description;
        this.itemImage = response.data.properties.imageBig;
        this.blacklisted = response.data.item.blacklisted;
        this.owners = response.data.item.owners;
        console.log(response.data);
      });
    },
  },
};
</script>
