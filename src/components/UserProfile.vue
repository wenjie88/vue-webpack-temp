
<template>
    <div class='userprofile'>
        <h2>User userprofile</h2>
    </div>
</template>

<script>
export default {
    data() {
        return { msg: 'this is UserProfile' }
    },
    beforeRouteEnter(to, from, next) {
        console.log('UserProfile')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('UserProfile update')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('UserProfile Leave : ' + this.msg)
        next()
    }
}
</script>

<style>

</style>
