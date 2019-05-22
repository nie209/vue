<template lang="html">
  <div>
    <h2>List of names</h2>
    <ol>
      <li v-for="name in names">{{name}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data(){
    return{
      names: ["wilson", "bob", "john"],
    }
  }
}
</script>

<style lang="css" scoped>
div{
  background-color: blue;
}
</style>
