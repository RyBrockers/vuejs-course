new Vue({
    el: '#app',
    data: {
        title: 'Become a Vue master',
        showName: false,
        showAge: true,
    },

    methods: {
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }


    }

})