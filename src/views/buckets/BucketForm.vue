<template>
    <v-flex flexDirection="column" flexWrap="wrap" :m="3">
        <v-box :width="[1]">
            <h3>{{title}}</h3>
        </v-box>
        <v-box tag="form" :width="[1]">
            <v-flex flexWrap="wrap" alignItems="center">
                <v-box tag="label" :width="[1/4]" for="name" :mb="3">Name</v-box>
                <v-box tag="input" :width="[3/4]" input type="text" v-model="bucketData.name" name="name" id="name" :mb="3" />
                <v-box tag="label" :width="[1/4]" for="threshold" :mb="3">Threshold</v-box>
                <v-box tag="input" :width="[3/4]" input type="number" v-model="bucketData.threshold" name="threshold" id="threshold" :mb="3" />
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
        bucketData: {},
    },
    props: {
        bucket: Object,
        handleSave: {
            type: Function,
            default: () => false,
        },
    },
    computed: {
        title() {
            return this.bucketData.id ? 'Update bucket' : 'Create new bucket';
        },
    },
    methods: {
        save() {
            this.handleSave(this.bucketData);
            this.$emit('close');
        },
    },
    created() {
        this.bucketData = JSON.parse(JSON.stringify(this.bucket));
    },
};
</script>

<style scoped>
form {
    flex: 1;
}
</style>
