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
      <div
        :class="{openedMenu: isMenuOpened}"
        class="closedMenu"
        @click="isMenuOpened = !isMenuOpened"
      >
      </div>
      <template v-if="isMenuOpened">
        <div class="maskButtons">
          <div class="settingsMenu">
            Настройки
            <div class="nameLength">
              Выберите длину
              <br>
              <select class="" name="">
                <option value="">Short (1-4)</option>
                <option value="">Medium (5-7)</option>
                <option value="">Long (8+)</option>
              </select>
              <br>
              или введите
              <br>
              точное количество букв
              <br>
              <input type="text" name="" value="">
            </div>
            <div class="nameAtmosphere">
              Выберите
              <br>
              готовое окружение
              <br>
              <select class="" name="">
                <option value="">Пустыня</option>
                <option value="">Лес</option>
                <option value="">Океан</option>
              </select>
              <br>
              или создайте своё
              <br>
              <input type="text" name="" value="">
            </div>
            <div class="userMask">
              Добавьте свой
              <br>
              шаблон имени
              <br>
              <input type="text" name="" value="">
            </div>
          </div>
        </div>
        <!-- <div class="maskList">
          <center>Add new mask:</center>
          <input type="text" name="" value="">
        </div> -->
        <div class="nameHistory">
          <center>Name History:</center>
          <div>Randome Name 1</div>
          <div>SecondRN</div>
          <div>Amber Third</div>
          <div>Four Elements</div>
          <div>MambaNamba5</div>
        </div>
      </template>
      <template v-else>

      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ostov-test',
  data(){
    return {
      isMenuOpened: false
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr auto;
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
  padding-top: 70px;
  padding-bottom: 10px;
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
.closedMenu{
  display: grid;
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  place-self: start;
  cursor: pointer;
}
.closedMenu:hover {
  background-color: #2B2633;
}
.closedMenu:before {
  display: grid;
  place-self: center;
  content: "<";
  color: #B4ADA3;
}
.closedMenu:hover:before {
  content: "<<<";
}
.openedMenu {
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  width: 100%;
  height: 30px;
  place-self: start;
  display: grid;
  place-items: center;
  user-select: none;
}
.openedMenu:before {
  content: "Close Menu";
}
.openedMenu:hover:before {
  content: ">>>";
}
.maskButtons{
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
  /* width: 60px;
  height: 30px; */
}
.settingsMenu {
  display: grid;
  place-items: center;
  color: #B4ADA3;
  padding: 5px;
}
.nameLength {
  display: grid;
  place-items: center;
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}
.nameAtmosphere {
  display: grid;
  place-items: center;
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}
.userMask {
  display: grid;
  place-items: center;
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
}
.maskList{
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
}
.maskList>* {
  color: #B4ADA3;
}
.maskList>input {
  margin-top: 10px;
}
.nameHistory{
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
.nameHistory>* {
  color: #B4ADA3;
}
.nameHistory>center {
  border-bottom: 1px solid #B4ADA3;
  margin-bottom: 15px;
}
</style>
