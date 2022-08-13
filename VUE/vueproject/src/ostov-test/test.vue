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
              <div class="active">В</div>
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
              <div class="active">field</div>
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
                  /choose min and max values/
                </div>
                <div>{{gNLmin}} - {{gNLmax}}</div>
              </div>
              <div class="nameRange">
                <div class="nameRangeMin">
                </div>
                <input  v-model="generateNameLength.gNL1" type="range" min="1" max="20" step="1" />
                <div class="nameRangeMax">
                </div>
                <input v-model="generateNameLength.gNL2" type="range" min="1" max="20" step="1" />
              </div>
              <div class="nameRangeReady">
                <div class="nRR1" @click="setNameLengthMinMax(1,4)" :class="{ active: gNLmin == 1 && gNLmax == 4 }">
                  small <br>/1-4/
                </div>
                <div class="nRR2" @click="setNameLengthMinMax(5,7)" :class="{ active: gNLmin == 5 && gNLmax == 7 }">
                  medium <br>/5-7/
                </div>
                <div class="nRR3" @click="setNameLengthMinMax(8,20)" :class="{ active: gNLmin == 8 && gNLmax == 20 }">
                  long <br>/8+/
                </div>
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
      isMenuOpened: true,
      generateNameLength: {
        gNL1: 5,
        gNL2: 7,
      }
    }
  },
  computed: {
    gNLmin: function() {
      if (+this.generateNameLength.gNL1 < +this.generateNameLength.gNL2){
        return this.generateNameLength.gNL1;
      }
      else return this.generateNameLength.gNL2;
    },
    gNLmax: function() {
      if (+this.generateNameLength.gNL1 > +this.generateNameLength.gNL2){
        return this.generateNameLength.gNL1;
      }
      else return this.generateNameLength.gNL2;
    },
  },
  methods: {
    setNameLengthMinMax: function(min,max) {
      this.generateNameLength.gNL1 = min;
      this.generateNameLength.gNL2 = max;
    }
  }
}
</script>

<style lang="css" scoped>
  @import './style.css';
</style>
