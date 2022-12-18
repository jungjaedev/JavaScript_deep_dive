// var vm = new Vue({
//     el: '#app',
//     data: {
//         message:'hi'
//     },
//     methods: {

//     },
//     created() {

//     },
// })
/* 전역 컴포넌트 등록*/
Vue.component("app-header", {
    template: "<h1>Header</h1>",
});

new Vue({
    el: "#app",
    components: {
        "app-footer": {
            template: "<footer>footer</footer>",
        },
    },
});
