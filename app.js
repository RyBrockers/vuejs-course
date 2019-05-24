new Vue({
    el: '#app',
    data: {
        title: 'Become a Vue master',
        name: 'Ryan'
    },

    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}`
        }
    }
})