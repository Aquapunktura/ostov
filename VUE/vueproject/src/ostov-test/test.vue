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
        <table>
          <tr>
            <td>а</td>
            <td>я</td>
            <td class="td0"></td>
            <td>б</td>
            <td>п</td>
            <td class="td0"></td>
            <td>в</td>
            <td>ф</td>
            <td class="td0"></td>
            <td>й</td>
            <td>х</td>
          </tr>
          <tr>
            <td>о</td>
            <td>ё</td>
            <td class="td0"></td>
            <td>д</td>
            <td>т</td>
            <td class="td0"></td>
            <td>ж</td>
            <td>ш</td>
            <td class="td0"></td>
            <td>ц</td>
            <td>ч</td>
          </tr>
          <tr>
            <td>у</td>
            <td>ю</td>
            <td class="td0"></td>
            <td>г</td>
            <td>к</td>
            <td class="td0"></td>
            <td>з</td>
            <td>с</td>
            <td class="td0"></td>
            <td>щ</td>
            <td class="td0"></td>
          </tr>
          <tr>
            <td>ы</td>
            <td>и</td>
          </tr>
          <tr>
            <td>э</td>
            <td>е</td>
            <td class="td0"></td>
            <td>л</td>
            <td>м</td>
            <td class="td0"></td>
            <td>н</td>
            <td>р</td>
            <td class="td0"></td>
            <td>ъ</td>
            <td>ь</td>
          </tr>
        </table>
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

}
table {
  border: 1px solid #B4ADA3;
  border-radius: 7px;
  text-align: center;
  border-collapse: separate;
  border-spacing: 7px;
  user-select: none;
}
table>* {
  color: #B4ADA3;
  font-size: x-large;
}
td {
  border: 1px solid #B4ADA3;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  text-transform: capitalize;
}
td:hover {
  background-color: #3B3A53;
  cursor: pointer;
}
.td0 {
  width: 15px;
  opacity: 0;
}
.td0:hover {
  background-color: inherit;
  cursor: auto;
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
