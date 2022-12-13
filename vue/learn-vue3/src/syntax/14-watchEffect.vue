<template>
  <div>
    <form action="">
      <input v-model="title" placeholder="title" type="text" />
      <textarea v-model="contents" placeholder="contents"></textarea>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const title = ref("");
    const contents = ref("");

    watchEffect(() => {
      console.log(title.value);
      console.log(contents.value);
    });
    return { contents, title };
  },
};
</script>

<style lang="scss" scoped></style>
