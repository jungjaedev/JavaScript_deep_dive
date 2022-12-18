<template>
    <AppHeader v-on:renew="renewStr" v-bind:propsdata="str" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
    data() {
        return {
            str: "Header",
        };
    },
    components: {
        AppHeader,
    },
    methods: {
        renewStr: function () {
            this.str = "hi";
        },
    },
};
</script>

<style></style>
