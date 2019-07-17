<template>
    <v-flex flexDirection="column" flexWrap="wrap" :m="3">
        <v-box :width="[1]">
            <h3>{{title}}</h3>
        </v-box>
        <v-box tag="form" :width="[1]">
            <v-flex flexWrap="wrap" alignItems="center">
                <v-box tag="label" :width="[1/4]" for="name">Name</v-box>
                <v-box tag="input" :width="[3/4]" input type="text" v-model="categoryData.name" name="name" id="name" />
            </v-flex>
        </v-box>
        <v-box :width="[1]">
            <button @click.prevent.stop="save" type="submit">Save</button>
        </v-box>
    </v-flex>
</template>

<script>
export default {
    data: {
        categoryData: {},
    },
    props: {
        category: Object,
        handleSave: {
            type: Function,
            default: () => false,
        },
    },
    computed: {
        title() {
            return this.categoryData.id ? 'Update category' : 'Create new category';
        },
    },
    methods: {
        save() {
            this.handleSave(this.categoryData);
            this.$emit('close');
        },
    },
    created() {
        this.categoryData = JSON.parse(JSON.stringify(this.category));
    },
};
</script>

<style scoped>
form {
    flex: 1;
}
</style>
