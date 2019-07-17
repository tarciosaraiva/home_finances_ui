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
          <td><a href @click.prevent.stop="handleEdit(category)">Edit</a></td>
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
import { IHomeFinanceState, ICategory } from '@/types';

@Component({
  computed: mapState({
    loading: (state: IHomeFinanceState): boolean => state.loading,
    errors: (state: IHomeFinanceState): string[] => state.errors,
    categories: (state: IHomeFinanceState): ICategory[] => state.entities.categories,
  }),
  methods: mapActions(['loadCategories', 'saveCategory', 'deleteCategory']),
})
export default class Categories extends Vue {

  public loadCategories!: () => void;
  public deleteCategory!: (id: number) => void;
  public saveCategory!: (category: ICategory) => void;

  public handleNew() {
    this.showModal(Object.create({}));
  }

  public handleEdit(category: ICategory) {
    this.showModal(category);
  }

  public handleDelete(id: number) {
    this.deleteCategory(id);
  }

  public created() {
    this.loadCategories();
  }

  private handleSave(category: ICategory) {
    this.saveCategory(category);
  }

  private showModal(category: ICategory) {
    this.$modal.show(CategoryForm,
      { category, handleSave: this.handleSave },
      { classes: ['flex-vmodal', 'v--modal'], draggable: false, adaptive: true });
  }

}
</script>
