<template>
  <div class="modal-form">
    <v-flex flexDirection="column" flexWrap="nowrap" flex="1">
      <v-box :width="[1]" :px="3">
        <h3>{{title}}</h3>
      </v-box>
      <v-box tag="form" :width="[1]" v-if="!loading" :px="3">
        <Notice v-if="errors.length" :message="errors" type="error" />
        <v-flex flexWrap="wrap" alignItems="center" :mb="3">
          <slot name="form-fields" v-bind:entityData="entity"></slot>
        </v-flex>
      </v-box>
      <v-flex alignItems="center" justifyContent="space-between" :p="2" bg="whiteSmoke" :px="3">
        <v-box>
          <router-link to="/categories">
          <small>Close</small></router-link>
        </v-box>
        <v-box>
          <button @click.prevent.stop="save" :disabled="loading">Save</button>
        </v-box>
      </v-flex>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

import { IHomeFinanceState } from '@/types';
import Notice from '@/components/Notice.vue';

const ModalFormProps = Vue.extend({
  props: {
    entity: Object,
    entityType: String,
    handleSave: Function,
  },
});

@Component({
  components: { Notice },
  computed: mapState({
    loading: (state: IHomeFinanceState): boolean => state.loading,
    errors: (state: IHomeFinanceState): string[] => state.errors,
  }),
})
export default class ModalForm extends ModalFormProps {

  private loading!: boolean;
  private errors!: string[];

  get title() {
    if (this.loading) {
      return 'Loading...';
    }

    return this.entity.id ? `Update ${this.entityType}` : `Create new ${this.entityType}`;
  }

  private cancel() {
    this.$router.push('/');
  }

  private save() {
    this.handleSave(this.entity);
  }
}
</script>

<style scoped>
form {
  flex: 1;
}

.modal-form {
  -moz-transition: opacity 400ms ease-in;
  -webkit-transition: opacity 400ms ease-in;
  background: rgba(0,0,0,0.65);
  bottom: 0;
  left: 0;
  opacity:1;
  pointer-events: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 400ms ease-in;
  z-index: 99999;
}

.modal-form > div {
  background: -moz-linear-gradient(#fff, #999);
  background: -o-linear-gradient(#fff, #999);
  background: -webkit-linear-gradient(#fff, #999);
  background: #fff;
  border-radius: 0.25rem;
  margin: 10% auto;
  position: relative;
  max-width: 30rem;
  width: 100%;
}
</style>
