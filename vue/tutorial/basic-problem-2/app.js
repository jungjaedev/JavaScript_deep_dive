const app = Vue.createApp({
  data() {
    return {
      inputData: "",
      inputData2: "",
    };
  },
  methods: {
    showAlert() {
      alert("alert");
    },
    setInputData(event) {
      this.inputData = event.target.value;
    },
    setInputDataByEnter() {
      this.inputData2 = this.inputData;
    },
  },
});

app.mount("#assignment");
