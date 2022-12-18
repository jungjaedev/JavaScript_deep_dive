<template>
    <form v-on:submit.prevent="submitForm">
        <div>
            <label for="username">id: </label>
            <input type="text" id="username" v-model="username" />
        </div>
        <div>
            <label for="password">pw: </label>
            <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">login</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        submitForm() {
            console.log(this.username, this.password);
            var url = "https://jsonplaceholder.typicode.com/users";
            var data = {
                useranme: this.username,
                password: this.password,
            };
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style></style>
