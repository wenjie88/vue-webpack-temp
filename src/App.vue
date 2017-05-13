<template>
    <div>
        <ul>
            <li>呵呵呵呵</li>
            <li>呵呵呵呵</li>
        </ul>
        <div>
            <router-link to='/User/Foo'>Go to Foo</router-link>
            <router-link to='/User/Bar'>Go to Bar</router-link>
            <img class='imgclass' src="./assets/login.jpg"/>
        </div>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    
        <!--<router-view name="Foo"></router-view>
            <router-view name="Bar"></router-view>-->
    </div>
</template>

<script>
import './css/flex2.css'
export default {
    data() {
        return {
            msg: 'Hello Vue'
        }
    },
}
</script>

<style scoped>
.imgclass{
    width:100px;
    height: 100px;
}
ul {
    background-color: red;
    list-style: none;
}
.f{
    display: flex;
}


</style>