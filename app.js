new Vue({
    el: '#app',
    data: {
        title: 'Become a Vue master',
        name: 'Ryan',
        age: 34,
        url: 'https://www.youtube.com/?gl=GB&hl=en-GB',
        classes: ['one', 'two']
    },

    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}. You are ${this.age} years old!`
        }
    }
})