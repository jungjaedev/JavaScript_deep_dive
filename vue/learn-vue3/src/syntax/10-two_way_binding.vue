<template>
  <div>
    <h2>input value</h2>
    <input type="text" v-model="inputValue" />
    <!-- :value="inputValue"
      @input="event => (inputValue = event.target.value)" -->
    <div>{{ inputValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input type="checkbox" v-model="checkboxValue" />
    <!-- :checked="checkboxValue"
      @change="event => (checkboxValue = event.target.checked)" -->

    <h2>radio value</h2>
    <label>
      <input type="radio" name="type" value="A" v-model="radioValue" />A
      <!-- :checked="radioValue === 'A'"
        @change="event => (radioValue = event.target.value)" -->
    </label>
    <label>
      <input type="radio" name="type" value="B" v-model="radioValue" />B
      <!-- :checked="radioValue === 'B'"
        @change="event => (radioValue = event.target.value)" -->
    </label>
    <h3>
      {{ radioValue }}
    </h3>

    <h2>select value</h2>
    <select v-model="selectValue">
      <option value="html">html</option>
      <option value="css">css</option>
      <option value="javascript">javascript</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const inputValue = ref(null);

    const checkboxValue = ref(true);
    const radioValue = ref("A");

    const selectValue = ref("html");
    return { inputValue, checkboxValue, radioValue, selectValue };
  },
};
</script>

<style lang="scss" scoped></style>
