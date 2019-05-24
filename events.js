new Vue({
    el: '#events',
    data: {
        title: 'Become a Vue Ninja!',
        wage: 10
    },

    methods: {
        // changeWage: function (amount) {
        //     this.wage += amount
        // }

        logEvent(event) {
            console.log(event);
        }
    }
})