<template>
  <div>
      <p class="foo">{{name}}</p>
      <p class="foo">{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:"I am Foo"
        }
    }
}
</script>

<style>
    .foo{
        color: green;
    }
</style>
