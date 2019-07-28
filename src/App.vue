<template>
  <div id="app">
    <header>
      <v-flex flexWrap="wrap" maxWidth="64em" justifyContent="space-between" alignItems="center">
        <v-box>
          <router-link to="/">Home</router-link>
        </v-box>
        <v-box>
          <router-link to="/categories">Categories</router-link>
        </v-box>
        <v-box>
          <router-link to="/buckets">Buckets</router-link>
        </v-box>
        <v-box>
          <router-link to="/accounts">Accounts</router-link>
        </v-box>
      </v-flex>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
.flex-vmodal {
    display: flex;
}
</style>
