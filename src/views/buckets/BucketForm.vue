<template>
  <modal-form :entity="bucket" :entityType="'bucket'" :handleSave="handleSave">
    <template v-slot:form-fields="{entityData}">
      <v-box :width="[1/5]">
        <label for="name">Name</label>
      </v-box>
      <v-box tag="span" :width="[4/5]">
        <input type="text" v-model="entityData.name" name="name" id="name" />
      </v-box>
      <v-box :width="[1/5]">
        <label for="threshold">Threshold</label>
      </v-box>
      <v-box tag="span" :width="[4/5]">
        <input type="number" v-model="entityData.threshold" name="threshold" id="threshold" />
      </v-box>
    </template>
  </modal-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

import ModalForm from '@/components/ModalForm.vue';
import { IHomeFinanceState, IBucket } from '@/types';

const BucketFormProps = Vue.extend({
  props: {
    id: String,
  },
});

@Component({
  components: { ModalForm },
  methods: mapActions(['saveBucket', 'retrieveBucket']),
  watch: { $route: 'fetchData' },
})
export default class BucketForm extends BucketFormProps {
  private bucket: IBucket = Object.create({});

  private saveBucket!: (bucket: IBucket) => void;
  private retrieveBucket!: (id: number) => Promise<IBucket>;

  private handleSave(bucket: IBucket) {
    this.saveBucket(bucket);
  }

  private created() {
    this.fetchData();
  }

  private async fetchData() {
    if (this.id) {
      const bucketId = Number(this.id);
      this.bucket = await this.retrieveBucket(bucketId);
    }
  }
}
</script>

<style scoped>
span {
  display: flex;
}

input {
  flex: 1;
}
</style>
