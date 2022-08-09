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
            <div>
              <center><font size="6">Ambience List</font></center>
              <input type="text" size="40" class="ambSearch" placeholder="Type to search...">
            </div>
            <div class="ambAbcRu">
              <div>А</div>
              <div>Б</div>
              <div>В</div>
              <div>Г</div>
              <div>Д</div>
              <div>Е</div>
              <div>Ё</div>
              <div>Ж</div>
              <div>З</div>
              <div>И</div>
              <div>Й</div>
              <div>К</div>
              <div>Л</div>
              <div>М</div>
              <div>Н</div>
              <div>О</div>
              <div>П</div>
              <div>Р</div>
              <div>С</div>
              <div>Т</div>
              <div>У</div>
              <div>Ф</div>
              <div>Х</div>
              <div>Ц</div>
              <div>Ч</div>
              <div>Ш</div>
              <div>Щ</div>
              <div>Ъ</div>
              <div>Ы</div>
              <div>Ь</div>
              <div>Э</div>
              <div>Ю</div>
              <div>Я</div>
            </div>
            <div class="ambCreated">
              <div>fantasyfantasyfantasy</div>
              <div>far-far</div>
              <div>field</div>
              <div>fixed</div>
              <div>focus</div>
              <div>forest</div>
              <div>fusion</div>
              <div>formed</div>
              <div>future</div>
              <div>fantasy</div>
              <div>far-far</div>
              <div>field</div>
              <div>fixed</div>
              <div>focus</div>
              <div>forest</div>
              <div>fusion</div>
              <div>formed</div>
              <div>future</div>
            </div>
            <div>
              <input type="text" size="40" class="ambCreateNew" placeholder="/create new/">
            </div>
            <div class="nameRangeTxt">
              <div class="nLngthTxt">
                Name length
                <div class="nLngthTxtSmol">
                  choose min and max values
                </div>
              </div>
              <div class="nameRange">
                <div class="nameRangeMin">
                </div>
                <input type="range" min="0" max="20" step="1" value="5" />
                <div class="nameRangeMax">
                </div>
              <input type="range" min="0" max="20" step="1" value="15" />
              </div>
              
            </div>
          </div>
        </div>
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
      isMenuOpened: true
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
  padding-left: 100px;
  padding-right: 100px;
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
  user-select: none;
}
.closedMenu{
  display: grid;
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  width: auto;
  height: auto;
  place-self: start;
  cursor: pointer;
  padding: 7px;
}
.closedMenu:hover {
  background-color: #2B2633;
}
.closedMenu:before {
  display: grid;
  place-self: center;
  content: "<<<";
  color: #B4ADA3;
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
.ambSearch {
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  margin: 10px;
  background-color: #B4ADA3;
  color: #3B3A53;
  height: 30px;
}
.ambAbcRu {
  display: grid;
  grid-auto-flow: column;
  width: 300px;
  overflow-x: auto;
  user-select: none;
}
.ambAbcRu>* {
  display: grid;
  place-items: center;
  height: 30px;
  width: 30px;
  border: 2px solid #3B3A53;
  background-color: #B4ADA3;
  color: #3B3A53;
}
.ambAbcRu>*:hover {
  border: 2px solid #B4ADA3;
  background-color: #3A2838;
  color: #B4ADA3;
  cursor: pointer;
}
.ambCreated{
  overflow-y: scroll;
  height: 100px;
  width: 300px;
  margin-top: 12px;
}
.ambCreated>*{
  display: grid;
  float: left;
  height: 30px;
  width: 90px;
  border: 2px solid #3B3A53;
  background-color: #B4ADA3;
  color: #3B3A53;
  margin: 2px;
  padding: 0px;
  place-content: center;
}
.ambCreated>*:hover{
  margin: 2px;
  padding: 0px;
  border: 2px solid #B4ADA3;
  background-color: #3B3A53;
  color: #B4ADA3;
}
.ambCreateNew{
  border: none;
  text-align: center;
  font-size: 15px;
  margin: 10px;
  background-color: #B4ADA3;
  color: #3B3A53;
  height: 30px;
  width: 150px;
}
.nameRangeTxt{
  margin-top: 10px;
}
.nLngthTxt{
  text-align: center;
  font-size: x-large;
  margin-top: 10px;
  margin-bottom: 10px;
}
.nLngthTxtSmol{
  font-size: 20px;
  font-style: italic;
}
.nameRange{
  display: grid;
  place-self: center;
}
.settingsMenu{
  display: grid;
  place-items: center;
  color: #B4ADA3;
  padding: 5px;
}

.nameHistory{
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  user-select: text;
}
.nameHistory>* {
  color: #B4ADA3;
}
.nameHistory>center {
  border-bottom: 1px solid #B4ADA3;
  margin-bottom: 15px;
}
</style>
