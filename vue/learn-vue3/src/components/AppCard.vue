<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title red">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // const testStyle = useCssModule();
    // console.log(testStyle);

    const color = ref("red");
    color.value = "blue";
    return { color };
  },
};
</script>

<!-- <style scoped>
.red {
  color: red;
}
</style> -->
<style>
.red {
  color: v-bind(color);
}
</style>
