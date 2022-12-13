<template>
  <div>
    <button @click="printEventInfo('Hello world!', $event)">
      event handler
    </button>
    <hr />
    <input type="text" @keyup="onKeyupHandler" />
  </div>
</template>

<script>
export default {
  setup() {
    const printEventInfo = (message, event) => {
      console.log("message :", message);
      console.log("event.target :", event.target);
      console.log("tagname :", event.target.tagname);
    };
    const onKeyupHandler = e => {
      console.log(e.key);
    };
    return { printEventInfo, onKeyupHandler };
  },
};
</script>

<style lang="scss" scoped></style>
