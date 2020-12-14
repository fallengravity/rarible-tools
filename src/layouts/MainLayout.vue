<template>
<div class="bg font">
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <a href="/#/">
        <q-avatar>
          <!--<img src="../assets/logocf.svg">-->
        </q-avatar>
        </a>
        <q-toolbar-title v-if="!$q.platform.is.mobile">
          Rarible Tools
        </q-toolbar-title>

        <div>
          <MetamaskChecker>
            <div id="err" slot="errored" slot-scope="{ error }">
              {{ error.message || 'Unexpected error' }}
            </div>

            <div id="app" slot="checked" slot-scope="{ provider, selectedAccount, selectedNetwork }">
              Active Account: {{ selectedAccount }} On Network ID: {{ selectedNetwork }}
            </div>

            <div id="loader">
              Loading Data
            </div>
          </MetamaskChecker>
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
import MetamaskChecker from '@metamask-checker/vue';

export default {
  name: 'MainLayout',
  components: {
    MetamaskChecker,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
