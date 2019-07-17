<template>
  <div class="buckets">
    <h2>Buckets</h2>
    <p v-if="loading">Loading...</p>
    <p v-else-if="!loading && errors.length">{{errors}}</p>
    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Threshold</th>
          <th colspan="2" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="bucket in buckets" v-bind:key="bucket.id">
          <td>{{bucket.id}}</td>
          <td>{{bucket.name}}</td>
          <td>{{bucket.threshold}}</td>
          <td><a href @click.prevent.stop="handleDelete(bucket.id)">Delete</a></td>
          <td><a href @click.prevent.stop="handleEdit(bucket)">Edit</a></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">
            <a href @click.prevent.stop="handleNew">Add new bucket</a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

import BucketForm from './BucketForm.vue';
import { IHomeFinanceState, IBucket } from '@/types';

@Component({
  computed: mapState({
    loading: (state: IHomeFinanceState): boolean => state.loading,
    errors: (state: IHomeFinanceState): string[] => state.errors,
    buckets: (state: IHomeFinanceState): IBucket[] => state.entities.buckets,
  }),
  methods: mapActions(['loadBuckets', 'saveBucket', 'deleteBucket']),
})
export default class Buckets extends Vue {

  public loadBuckets!: () => void;
  public deleteBucket!: (id: number) => void;
  public saveBucket!: (bucket: IBucket) => void;

  public handleNew() {
    this.showModal(Object.create({}));
  }

  public handleEdit(bucket: IBucket) {
    this.showModal(bucket);
  }

  public handleDelete(id: number) {
    this.deleteBucket(id);
  }

  public created() {
    this.loadBuckets();
  }

  private handleSave(bucket: IBucket) {
    this.saveBucket(bucket);
  }

  private showModal(bucket: IBucket) {
    this.$modal.show(BucketForm,
      { bucket, handleSave: this.handleSave },
      { classes: ['flex-vmodal', 'v--modal'], draggable: false, adaptive: true });
  }

}
</script>
