<template>
<div class="bg font">
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-deep-purple">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <a href="/#/">
        <q-avatar>
          <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/5877.png">
        </q-avatar>
        </a>
        <q-toolbar-title v-if="!$q.platform.is.mobile">
          Rarible Tools
        </q-toolbar-title>

        <div>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" :width="200" :breakpoint="500" bordered dark style="text-decoration: none;">
      <q-scroll-area class="fit">
        <q-list>
          <router-link to="/">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-home" />
              </q-item-section>
              <q-item-section>
                Home
              </q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/Burn">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-fire" />
              </q-item-section>
              <q-item-section>
                Burn
              </q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <router-link to="/Unwrap">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-adjust" />
              </q-item-section>
              <q-item-section>
                Unwrap
              </q-item-section>
            </q-item>
          </router-link>
          <router-link to="/Cost">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-dollar-sign" />
              </q-item-section>
              <q-item-section>
                Cost
              </q-item-section>
            </q-item>
          </router-link>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</div>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
