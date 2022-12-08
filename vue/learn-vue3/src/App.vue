<template>
  <div>
    <ul>
      <template v-for="(item, index) in items" :key="index">
        <li v-if="item.id % 2 === 0">
          ID: {{ item.id }}인덱스{{ index }}, {{ item.message }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const items = reactive([
      { id: 1, message: "C++" },
      { id: 2, message: "HTML" },
      { id: 3, message: "CSS" },
      { id: 4, message: "JavaScript" },
    ]);
    return { items };
  },
};
</script>

<style lang="scss" scoped></style>
