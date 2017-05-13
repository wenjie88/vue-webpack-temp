<template>
    <div class='user'>
        <h2>User {{ $route.params.id }}</h2>
        <router-link :to='one'>{{one}}</router-link>
        <router-link :to='two'>{{two}}</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'this is user',
            one: '',
            two: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('user')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('user update')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('user Leave: ' + this.msg)
        next()
    },
    created() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.one = '/User/' + this.$route.params.id + '/profile'
            this.two = '/User/' + this.$route.params.id + '/posts'
            console.log('获取数据...')
            console.log(navigator.userAgent)
        }
    }
}
</script>

<style scoped>
.user {
    width: 350px;
    height: 350px;
    background-color: yellow;
}
</style>
