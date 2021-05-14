const app = Vue.createApp({
    data(){
        return {
            firstName: 'Chao',
            lastName: 'Li',
            email: 'chaolincyzl@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName =  results[0].name.firstName,
            this.lastName = results[0].name.lastName,
            this.email = results[0].name.email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large

            console.log(this.gender)
        }, 
    },
})
app.mount('#app')