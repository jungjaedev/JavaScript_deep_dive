const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 3000);
    },
  },
  computed: {
    result() {
      if (this.number === 37) {
        return this.number;
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return "Not there yet";
      }
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
