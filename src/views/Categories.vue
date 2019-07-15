<template>
  <div class="categories">
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  methods: mapActions(['loadCategories']),
})
export default class Categories extends Vue {

  public loadCategories!: () => void;

  public created() {
    this.loadCategories();
  }
}
</script>
