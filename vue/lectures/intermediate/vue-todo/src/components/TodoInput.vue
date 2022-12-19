<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
        <span @click="addTodo" class="addContainer">
            <i class="fa-solid fa-plus"></i>
        </span>
        <AlertModal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                경고!<i
                    class="closeModalBtn fa-solid fa-xmark"
                    @click="showModal = false"
                ></i>
            </h3>
            <div slot="body">내용을 작성해주세요</div>
            <h3 slot="footer">copy right</h3>
        </AlertModal>
    </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== "") {
                this.$store.commit("addOneItem", this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        },
    },
    components: {
        AlertModal,
    },
};
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: auto;
}
.closeModalBtn {
    color: #42b982;
}
</style>
