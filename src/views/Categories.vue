<template>
  <div class="categories">
    <h2>Categories</h2>
    <p v-if="loading">Loading...</p>
    <p v-else-if="!loading && errors.length">{{errors}}</p>
    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th colspan="2" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" v-bind:key="category.id">
          <td>{{category.id}}</td>
          <td>{{category.name}}</td>
          <td><a href @click.prevent.stop="handleDelete(category.id)">Delete</a></td>
          <td><a href @click.prevent.stop="handleEdit(category.id)">Edit</a></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">
            <a href @click.prevent.stop="handleNew">Add new category</a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

import CategoryForm from './CategoryForm.vue';
import { IHomeFinanceState, ICategory } from '../types';

@Component({
  computed: mapState({
    loading: (state: IHomeFinanceState): boolean => state.loading,
    errors: (state: IHomeFinanceState): string[] => state.errors,
    categories: (state: IHomeFinanceState): ICategory[] => state.entities.categories,
  }),
  methods: mapActions(['loadCategories', 'deleteCategory']),
})
export default class Categories extends Vue {

  public loadCategories!: () => void;
  public deleteCategory!: (id: number) => void;

  public handleNew() {
    this.$modal.show(CategoryForm);
  }

  public handleEdit(id: number) {
    console.log('implement me') //tslint:disable-line
  }

  public handleDelete(id: number) {
    this.deleteCategory(id);
  }

  public created() {
    this.loadCategories();
  }
}
</script>
