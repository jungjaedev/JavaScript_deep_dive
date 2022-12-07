<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button @click="message += '!'">느낌표추가</button>
    <p v-html="rawhtml"></p>
    <h2>속성 바인딩</h2>
    <div :title="dynamicTitle">hello</div>
    <input v-bind="attrs" />
    {{ message.split("").reverse().join("") }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("안녕");
    const rawhtml = ref("<strong>HI</strong>");
    const attrs = ref({
      type: "text",
      value: "123321",
      disabled: "true",
    });

    const dynamicTitle = ref("안녕");
    return {
      message,
      rawhtml,
      dynamicTitle,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
