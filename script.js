const vue = new Vue({
    mounted() {
        if (localStorage.getItem("tasks")) {
            this.taskList = JSON.parse(localStorage.getItem("tasks"));
        }
    },
    el: "#app",
    data: {
        taskList: [],
        title: null,
        description: "",
        find: ""
    },
    methods: {
        saveTask() {
            if (this.title !== null) {
                this.taskList.unshift({ title: this.title, description: this.description });
                localStorage.setItem("tasks", JSON.stringify(this.taskList));
            }
            //this.taskList = JSON.parse(localStorage.getItem("tasks"))
            this.title = null
            this.description = null
        },
        deleteTask(e) {
            const title = e.target.parentElement.children[0].textContent;
            this.taskList.splice(this.taskList.findIndex(task => task.title == title), 1);
            localStorage.setItem("tasks", JSON.stringify(this.taskList));
        }
    }
})