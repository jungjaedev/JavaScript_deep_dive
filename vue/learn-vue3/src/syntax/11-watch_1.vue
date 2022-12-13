/** Watch */
<template>
  <div></div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const message = ref("");
    watch(message, (newValue, oldeValue) => {
      console.log("newValue :", newValue);
      console.log("oldeValue :", oldeValue);
    });
    return { message };
  },
};
</script>

<style lang="scss" scoped></style>
