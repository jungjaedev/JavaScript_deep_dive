<template>
  <div>
    <h2 v-if="visible">Vue3</h2>
    <h2 v-else>else</h2>
    <button @click="visible = !visible">toggle</button>

    <hr />

    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const visible = ref(true);
    const type = ref("A");
    return { visible, type };
  },
};
</script>

<style lang="scss" scoped></style>
