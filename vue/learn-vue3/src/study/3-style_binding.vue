<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      voluptatum qui quis at, dicta repudiandae vitae suscipit reiciendis ab aut
      reprehenderit delectus nihil quod iste. Dolorem possimus architecto quo
      consequuntur!
    </div>
    <button @click="fontSize++">+</button>
    <button @click="fontSize--">-</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    // const styleObject = reactive({
    //   color: "red",
    //   fontSize: "13px",
    // });
    const fontSize = ref(13);
    const styleObject = computed(() => {
      return {
        color: "red",
        fontSize: fontSize.value + "px",
      };
    });
    return {
      styleObject,
      fontSize,
    };
  },
};
</script>

<style lang="scss" scoped></style>
