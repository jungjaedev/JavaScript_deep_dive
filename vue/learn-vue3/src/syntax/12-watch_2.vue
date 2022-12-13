<template>
  <div></div>
</template>

<script>
import { watch, ref, reactive } from "vue";

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);
    const obj = reactive({
      count: 0,
    });
    // watch(
    //   () => x.value + y.value,
    //   (sum, oldValue) => {
    //     console.log("sum : ", sum);
    //     console.log("oldValue : ", oldValue);
    //   },
    // );

    watch([x, y], ([newX, nexY]) => {
      console.log(newX, nexY);
    });
    watch(obj, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    // watch(
    //   () => obj.count,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },
    // );

    const person = reactive({
      name: "홍길동",
      age: 30,
      hobby: "운동",
      obj: {
        count: 0,
      },
    });

    watch(person, newValue => {
      console.log("newValue: ", newValue);
    });

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>
