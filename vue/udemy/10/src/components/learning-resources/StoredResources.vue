<template>
    <ul>
        <learning-resource 
        v-for="res in resources" 
        :key="res.id" 
        :id="res.id" 
        :title="res.title" 
        :description="res.description" 
        :link="res.link"
        >
        </learning-resource>
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
    inject: ['resources'],
    components: {
        LearningResource,
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>