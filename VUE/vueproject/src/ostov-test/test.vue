<template lang="html">
  <div class="container">
    <div class="main">
      <div class="nameReady">
        BillyReady
      </div>
      <div class="choiceButtons">
123
      </div>
      <div class="alphabetButtons">
456
      </div>
    </div>
    <div class="menu">
      <div class="maskButtons">

      </div>
      <div class="maskList">

      </div>
      <div class="nameHistory">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ostov-test'
}
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: auto 0.3fr;
  width: 100%;
  min-height: 100vh;
}
.main {
  display: grid;
  place-items: center;
  background-color: #2B2633;
  grid-template-rows: 0.2fr 0.1fr auto;
}
.main>*{
  display: grid;
  place-items: center;
}
.nameReady{
  border-bottom: 1px solid #B4ADA3;
  border-radius: 7px;
  font-size: xx-large;
  color: #B4ADA3;
  padding: 10px 20px;
}
.choiceButtons{
  border-radius: 7px;
  font-size: x-large;
  color: #B4ADA3;
  padding: 10px 20px;
}
.alphabetButtons{
  border-radius: 7px;
  font-size: x-large;
  color: #B4ADA3;
  padding: 10px 20px;
}
.menu {
  display: grid;
  place-items: center;
  background-color: #3A2838;
}
.maskButtons{
  border: 1px solid white;
}
.maskList{
  border: 1px solid white;
}
.nameHistory{
  border: 1px solid white;
}
</style>
