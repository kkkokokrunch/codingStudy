<template>
  <div>
      <h2>{{$store.state.counter}}</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.more20stu}}</h2>
      <h2>{{$store.getters.more20stuLength}}</h2>
      <h2>{{$store.getters.moreAgeStu(8)}}</h2>
  </div>
</template>

<script>
export default {
    name:"HelloVuex"
}
</script>

<style>

</style>