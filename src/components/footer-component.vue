<template lang="html">
  <footer>
    <h1>{{title}}</h1>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      title: "vue footer example",
    }
  },
}
</script>

<style lang="css" scoped>
h1{
  text-align: center;
}
footer{
  /*for padding is top right bottom left is going clockwise */
  padding: 10px 10px 10px 10px;
  background-color: #222;
}
</style>
