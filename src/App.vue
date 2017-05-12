<template>
    <div>
        <ul>
            <li>呵呵呵呵</li>
            <li>呵呵呵呵</li>
        </ul>
        <div>
            <router-link to='/User/Foo'>Go to Foo</router-link>
            <router-link to='/User/Bar'>Go to Bar</router-link>
        </div>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    
        <!--<router-view name="Foo"></router-view>
            <router-view name="Bar"></router-view>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello Vue'
        }
    },
}
</script>

<style lang="">
ul {
    background-color: red;
    list-style: none;
}


</style>