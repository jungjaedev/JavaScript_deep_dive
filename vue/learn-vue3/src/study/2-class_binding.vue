<template>
  <div :class="classObject">텍스트</div>
  <button v-on:click="toggle">toggle</button>
</template>

<script>
import { computed } from "vue";
import { ref } from "vue";

export default {
  setup() {
    const isActive = ref(true);

    // const classObject = reactive({
    //   active: true,
    //   "text-danger": true,
    // });

    const classObject = computed(() => {
      return {
        active: true && true,
        "text-danger": true && true,
      };
    });
    const toggle = () => {
      isActive.value = !isActive.value;
    };
    return {
      isActive,
      toggle,
      classObject,
    };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-danger {
  color: red;
}
</style>
