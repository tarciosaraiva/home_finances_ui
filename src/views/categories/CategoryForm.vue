<template>
  <modal-form :entity="category" :entityType="'category'" :handleSave="handleSave">
    <template v-slot:form-fields="{entityData}">
      <v-box :width="[1/5]">
        <label for="name">Name</label>
      </v-box>
      <v-box tag="span" :width="[4/5]">
        <input type="text" v-model="entityData.name" name="name" id="name" required />
      </v-box>
    </template>
  </modal-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

import ModalForm from '@/components/ModalForm.vue';
import { IHomeFinanceState, ICategory } from '@/types';

const CategoryFormProps = Vue.extend({
  props: {
    id: String,
  },
});

@Component({
  components: { ModalForm },
  methods: mapActions(['saveCategory', 'retrieveCategory']),
  watch: { $route: 'fetchData' },
})
export default class CategoryForm extends CategoryFormProps {
  private category: ICategory = Object.create({});

  private saveCategory!: (category: ICategory) => void;
  private retrieveCategory!: (id: number) => Promise<ICategory>;

  private handleSave(category: ICategory) {
    this.saveCategory(category);
  }

  private created() {
    this.fetchData();
  }

  private async fetchData() {
    if (this.id) {
      const categoryId = Number(this.id);
      this.category = await this.retrieveCategory(categoryId);
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
