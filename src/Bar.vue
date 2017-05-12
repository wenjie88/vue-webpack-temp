<template>
    <div>
        <p class="bar">{{name}}</p>
        <p class="foo">{{$route.params.id}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:"I am Bar"
        }
    }
}
</script>

<style>
.bar {
    color: red;
}
</style>

