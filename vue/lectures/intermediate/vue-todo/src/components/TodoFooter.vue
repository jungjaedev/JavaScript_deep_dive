<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo"> Clear All </span>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    methods: {
        ...mapMutations({
            clearTodo: "removeAll",
        }),
    },
};
</script>

<style scoped>
.clearAllContainer {
    width: 8.3rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    color: #e20303;
    display: block;
    cursor: pointer;
}
</style>
