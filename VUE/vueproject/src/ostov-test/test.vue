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
        <div class="vowels">
          <div class="vow1">
            <div>А</div>
            <div>О</div>
            <div>У</div>
            <div>Э</div>
            <div>Ы</div>
          </div>
          <div class="vow2">
            <div>Я</div>
            <div>Ё</div>
            <div>Ю</div>
            <div>Е</div>
            <div>И</div>
          </div>
        </div>
        <div class="consonants">
          <div class="con1">
            <div>Б</div>
            <div>Д</div>
            <div>Г</div>
          </div>
          <div class="con2">
            <div>П</div>
            <div>Т</div>
            <div>К</div>
          </div>
          <div class="con3">
            <div>В</div>
            <div>Ж</div>
            <div>З</div>
          </div>
          <div class="con4">
            <div>Ф</div>
            <div>Ш</div>
            <div>С</div>
          </div>
          <div class="con51">
            <div>Л</div>
          </div>
          <div class="con52">
            <div>М</div>
          </div>
          <div class="con53">
            <div>Н</div>
          </div>
          <div class="con54">
            <div>Р</div>
          </div>
          <div class="con6">
            <div>Й</div>
            <div>Ц</div>
            <div>Щ</div>
          </div>
          <div class="con7">
            <div>Х</div>
            <div>Ч</div>
          </div>
          </div>
        <div class="silent">
            <div>Ъ</div>
            <div>Ь</div>
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
  grid-template-columns: auto auto auto;
  margin-top: 30px;
  gap: 50px;
}
.alphabetButtons{
  display: grid;
  height: 100vh;
  border-radius: 7px;
  font-size: x-large;
  color: #B4ADA3;
  padding: 10px 20px;
  gap: 20px;
  grid-template-areas:
  "A B C D E F H I"
  "A B C D E F H I"
  "A B C D E F H  "
  "A B            "
  "A B G G G G J J";
}
.vowels{
  display: grid;
  place-items: center;
}
.vow1 {
  grid-area: A;
}
.vow2 {
  grid-area: B;
}
.consonants{
  display: grid;
  place-items: center;
}
.con1{
  grid-area: C;
}
.con2{
  grid-area: D;
}
.con3{
  grid-area: E;
}
.con4{
  grid-area: F;
}
.con51{
  grid-area: F;
}
.con52{
  grid-area: F;
}
.con53{
  grid-area: F;
}
.con54{
  grid-area: F;
}
.con6{
  grid-area: F;
}
.con7{
  grid-area: F;
}
.silent {
  grid-area: ;
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
