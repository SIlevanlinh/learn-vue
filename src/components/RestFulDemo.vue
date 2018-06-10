<template>
    <div class="restful-demo">
        <h1>RestFul Demo</h1>
        <ul>
            <li v-for="person in people" :key="person.id">            
                <img :src="person.avatar">
                {{ person.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            people: [],
            api: 'http://localhost:3000/people'
        }
    },
    mounted () {
        this.fetchOk(this.api)
        .then(response =>
            response.json()
            .then(data => {
                this.people = data
            })
        )
        .catch(err => console.log(err))
    },
    methods: {
        fetchOk: api =>
            fetch(api)
            .then(res => res.ok ? res : res.json().then(err => Promise.reject(err)))
    }
}
</script>




