let dataset = [
    {
        title: 'Article 1',
        id: 1
    },
    {
        title: 'Article 2',
        id: 2
    },
    {
        title: 'Article 3',
        id: 3
    }
]
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
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large

            const tasksRes = await fetch('http://localhost:3000/tasks')
            const { taskResults } = await tasksRes.body
            
            this.taskName = tasksRes

            console.log(res)


            console.log(tasksRes)


            console.log(taskResults)
        }, 
    },
})

app.mount('#app')