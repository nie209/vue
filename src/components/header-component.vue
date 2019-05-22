<template lang="html">
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data(){
    return {
      title: "vue example",
    }
  }
}
</script>

<style lang="css" scoped>
header{
  background-color: red;
}
h1{
  text-align: center;
}
</style>
