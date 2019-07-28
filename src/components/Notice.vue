<template>
  <v-flex justifyContent="space-between" alignItems="center" flex="1" flexWrap="nowrap" bg="pink" :mb="3" :px="3">
    <v-box tag="p">{{message}}</v-box>
    <v-box tag="a" @click.prevent.stop="removeMessage">x</v-box>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const NoticeProps = Vue.extend({
  props: {
    message: String,
    type: String,
  },
});

@Component
export default class Notice extends NoticeProps {
}
</script>
