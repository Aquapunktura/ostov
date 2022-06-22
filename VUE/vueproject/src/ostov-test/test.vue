<template lang="html">
  <div class="container">
    <div class="main">
      <div class="nameReady">
        BillyReady
      </div>
      <div class="choiceButtons">
        <div class="chooseAll">
          choose all
        </div>
        <div class="generateName">
          generate name
        </div>
        <div class="unchooseAll">
          unchoose all
        </div>
      </div>
      <div class="alphabetButtons">
        <div class="groupA">
          a
        </div>
        <div class="groupB">
          b
        </div>
        <div class="groupC">
          c
        </div>
        <div class="groupD">
          d
        </div>
        <div class="groupE">
          e
        </div>
        <div class="groupF">
          f
        </div>
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
.main>* {
  display: grid;
  place-items: center;
}
.nameReady {
  border-bottom: 1px solid #B4ADA3;
  border-radius: 7px;
  font-size: xx-large;
  color: #B4ADA3;
  padding: 10px 20px;
}
.choiceButtons {
  border-radius: 7px;
  font-size: x-large;
  color: #B4ADA3;
  padding: 10px 20px;
  grid-template-columns: auto auto auto;
  margin-top: 30px;
  gap: 50px;
}
.alphabetButtons {
  display: grid;
  place-items: center;
  grid-template-areas:
  "A B C D"
  "A B C D"
  "A B C D"
  "A E E F"
  "A E E F";
  width: 100%;
  height: 100%;
}
.alphabetButtons>* {
  border: 1px solid #fff;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}
.groupA {
  grid-area: A;
}
.groupB {
  grid-area: B;
}
.groupC {
  grid-area: C;
}
.groupD {
  grid-area: D;
}
.groupE {
  grid-area: E;
}
.groupF {
  grid-area: F;
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
