<template>
  <div id="modifiers">
    <div @click="clickDiv">
      DIV
      <p @click="clickP">
        P
        <span @click.stop="clickSpan">SPAN</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log("clickDiv");
    };

    const clickP = () => {
      console.log("clickP");
    };

    const clickSpan = () => {
      console.log("clickSpan");
    };
    return { clickP, clickDiv, clickSpan };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: rgb(196, 172, 172);
}

#modifiers p {
  background-color: #999;
}

#modifiers span {
  background-color: #333;
  display: block;
}
</style>
