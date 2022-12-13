<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length ? "있음" : "없음" }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <h2>이름 : {{ fullName }}</h2>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { reactive } from "vue";

export default {
  setup() {
    const teacher = reactive({
      name: "teacher",
      lectures: ["HTML", "JAVASCRIPT", "VUE3"],
    });

    const hasLecture = computed(() => {
      console.log("computed");
      return teacher.lectures.length > 0 ? "있음" : "없음";
    });

    const existLecture = () => {
      console.log("method");

      return teacher.lectures.length > 0 ? "있음" : "없음";
    };

    const firstName = ref("홍");
    const lastName = ref("길동");

    // const fullName = computed(() => firstName.value + " " + lastName.value);
    const fullName = computed({
      get() {
        return firstName.value + " " + lastName.value;
      },
      set(value) {
        console.log("value : ", value);
        console.log(value.split(" "));
        [firstName.value, lastName.value] = value.split(" ");
      },
    });
    console.log("이름 :", fullName.value);
    fullName.value = "김 코딩";
    console.log("이름 :", fullName.value);

    return {
      teacher,
      hasLecture,
      existLecture,
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
