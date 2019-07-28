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
          <td><router-link :to="`/buckets/${bucket.id}/edit`">Edit</router-link></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">
            <router-link to="/buckets/new">Add new bucket</router-link>
          </td>
        </tr>
      </tfoot>
    </table>
    <router-view></router-view>
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
  methods: mapActions(['loadBuckets', 'deleteBucket']),
})
export default class Buckets extends Vue {

  public loadBuckets!: () => void;
  public deleteBucket!: (id: number) => void;

  public handleDelete(id: number) {
    this.deleteBucket(id);
  }

  public created() {
    this.loadBuckets();
  }
}
</script>
