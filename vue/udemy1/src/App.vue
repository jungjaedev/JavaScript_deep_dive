<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponet('active-goals')">Active</button>
    <button @click="setSelectedComponet('manage-goals')">Manage</button>
    <!-- <active-goals v-if="seletedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="seletedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
        <component :is="seletedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
    components: {
        TheHeader,ManageGoals,ActiveGoals
    },
  data() {
    return {
        seletedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponet(cmp) {
        this.seletedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>