<template>
  <div id="app">
    <header>
      <v-flex flexWrap="wrap" maxWidth="64em" justifyContent="space-between" alignItems="center">
        <v-box :width="[1/2, 1/2, 1/4]">
          <router-link to="/">Home</router-link>
        </v-box>
        <v-box :width="[1/2, 1/2, 1/4]">
          <router-link to="/categories">Categories</router-link>
        </v-box>
        <v-box :width="[1/2, 1/2, 1/4]">
          <router-link to="/buckets">Buckets</router-link>
        </v-box>
        <v-box :width="[1/2, 1/2, 1/4]">
          <router-link to="/accounts">Accounts</router-link>
        </v-box>
      </v-flex>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
