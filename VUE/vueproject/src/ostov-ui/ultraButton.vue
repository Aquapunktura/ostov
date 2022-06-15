<template lang="html">
  <div class="main">
    {{data}}
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css" scoped>
div {

  display: grid;
  place-items: center;
  background-color: #25752589;
  border-style: solid;
  border-color: #999;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
}
div:hover {
  cursor: pointer;
  background-color: #257525;
  border-color: #ababab;
}
</style>
