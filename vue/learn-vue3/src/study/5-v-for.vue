<template>
  <div>
    <ul>
      <template v-for="(item, index) in evenItems" :key="index">
        <!-- <li v-if="item.id % 2 === 0"> -->
        <li>ID: {{ item.id }}인덱스{{ index }}, {{ item.message }}</li>
      </template>
    </ul>
    <hr />
    <ul>
      <!-- <template > -->
      <li v-for="(value, key, index) in itemObject" :key="key">
        {{ index }} {{ key }} {{ value }}
      </li>
      <!-- </template> -->
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { reactive } from "vue";

export default {
  setup() {
    const items = reactive([
      { id: 1, message: "C++" },
      { id: 2, message: "HTML" },
      { id: 3, message: "CSS" },
      { id: 4, message: "JavaScript" },
    ]);

    const evenItems = computed(() => items.filter(el => el.id % 2 === 0));
    const itemObject = reactive({
      title: "제목",
      author: "JAY",
      publishedAt: "2020-02-22",
    });
    return { items, evenItems, itemObject };
  },
};
</script>

<style lang="scss" scoped></style>
