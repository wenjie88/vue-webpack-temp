
<template>
    <div class='userposts'>
        <h2>User userposts</h2>
        <input v-model='isok'>
    </div>
</template>

<script>
export default {
    data() {
        return { msg: 'this is uesrposts', isok: 'true' }
    },
    beforeRouteEnter(to, from, next) {
        console.log('userposts')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('userposts update')
        next()
    },
    beforeRouteLeave(to, from, next) {

        if (this.isok === 'true') {
            console.log('userposts Leave: ' + this.msg)
            next()
        } else {
            console.log('不能跳转 ')
            next(false)
        }
    }
}
</script>

<style>

</style>
