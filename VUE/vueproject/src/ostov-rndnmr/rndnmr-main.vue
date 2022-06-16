<template lang="html">
  <div>
    <div class="trio">
      <div class="ele res">
        {{word}}
      </div>
      <hr>
      <div class="ele" style="width: 600px; margin: 10px auto; border: 0px;">
        <table>
          <tr>
            <td class="gen" style="font-size: large" @click="choceAll(true)">выбрать все</td>
            <td class="gen" @click="generate()">сгенерировать</td>
            <td class="gen" style="font-size: large" @click="choceAll(false)">снять все</td>
          </tr>
        </table>
      </div>

      <div class="ele" style="width: 680px; margin: 10px auto">
        <div v-for="(group, id) in data" class="letters" :key="id">
          <letter-button v-for="letter in group.all" :key="letter.l" :letter="letter" @update="change(letter)" />
        </div>
      </div>

    </div>
    <div class="duo">
      <template v-if="showMenu">
        <!-- Если отображаем маски -->
        <button type="button" name="button"  @click="showMenu = false">скрыть</button>
        <button type="button" name="button"  @click="masks.splice(0,masks.length)">Удалить все маски</button>
        <button type="button" name="button"  @click="wordHistory.splice(0,wordHistory.length)">Удалить всю историю</button>
        <button type="button" name="button"  @click="saveAll()">Сохранить принудительно</button>
        <button type="button" name="button"  @click="loadDefault()">Загрузить стандартые маски</button>
        <div class="ele" id="allMasks" style="display: none; overflow: auto; height:200px;">
          маски
        </div>
        <div class="ele" style="overflow: auto; height:200px; text-transform:capitalize;">
          <ul>
            <mask-list v-for="(mask, id) in masks" :key="id" :mask="mask" @delete="masks.splice(id, 1)" />
          </ul>
        </div>
        <div class="ele">
          <div class="add" @click="addMask()">
            Добавить новую маску
          </div>
          <input type="text" v-model="newMaskName" id="newMask">
        </div>
        <div class="ele" style="overflow: auto; height:200px; text-transform:capitalize;">
          <ul>
            <li v-for="(word, id) in wordHistory" :key="id">
              {{word}}
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <!-- Если маски скрыты -->
        <button type="button" name="button"  @click="showMenu = true">меню</button>
      </template>

    </div>

  </div>
</template>

<script>
import Letters from './letters.json'
import Masks from './masks.json'

import LetterButton from './letterButton.vue'
import MaskList from './maskList.vue'
export default {
  data() {
    return {
      data: undefined,
      masks: undefined,
      word: '',
      wordHistory: undefined,
      newMaskName: '',
      showMenu: true
    }
  },
  components: {
    LetterButton,
    MaskList
  },
  methods: {
    choceAll(a) {
      //выделить или снять выделение с букв
      // true - выделить; false - снять выделение
      this.data.forEach((item) =>item.all.forEach((item)=>item.isSelected = a));
    },
    change(letter) {
      letter.isSelected = !letter.isSelected;
      this.saveButtons();
    },
    addMask() {
      if (!this.newMaskName.length) return;
      this.newMaskName = this.newMaskName.toLowerCase();

      let goalMask = {
        orig: this.newMaskName,
        data: []
      }
      for(let a=0;a<this.newMaskName.length;a++) {
        let nameLetter = this.newMaskName[a];
        let isSet = false;
        this.data.forEach((group, groupNubmer) => {
          if(!isSet && group.all.find(letterObj => letterObj.l == nameLetter)) {
            goalMask.data.push(groupNubmer);
            isSet = true;
          }
        });
        if (!isSet) goalMask.data.push(-1);
      }
      this.masks.push(goalMask);
      this.saveMasks();

    },

    saveAll() {
      this.saveMasks();
      this.saveHistory();
      this.saveButtons();
    },
    saveMasks() {localStorage.setItem('saveMasks', JSON.stringify(this.masks));},
    saveHistory() {localStorage.setItem('saveHistory', JSON.stringify(this.wordHistory));},
    saveButtons() {localStorage.setItem('saveButtons', JSON.stringify(this.data));},
    loadAll() {
      if (localStorage.getItem('saveButtons')) {
        this.data = JSON.parse(localStorage.getItem('saveButtons'));
      }
      else {
        let letters = []
        Letters.groups.forEach((item) => {
          let a = {
            name: item.name,
            all: []
          }
          item.all.forEach((l) => {
            a.all.push({
              l,
              isSelected: true
            });
          });
          letters.push(a);
        });
        this.data = letters;
      }

      if (localStorage.getItem('saveHistory')) {
        this.wordHistory = JSON.parse(localStorage.getItem('saveHistory'));
      }
      else this.wordHistory = [];

      if (localStorage.getItem('saveMasks')) {
        this.masks = JSON.parse(localStorage.getItem('saveMasks'));
      }
      else this.masks = Masks;

      this.word = this.wordHistory.length?this.wordHistory[0]:' ';
    },
    loadDefault() {
      this.masks = Masks;


    },
    generate() {
      //выбрать маску
      if (!this.masks.length) {
          this.word='нет масок!';
          return;
      }
      let setMaskArr = this.masks[this.$getRandomInt(this.masks.length-1)].data;
      let word = '';
      setMaskArr.forEach((groupArrId) => {
        if (this.data[groupArrId]) {
          let letterGroup = this.data[groupArrId].all;
          let letters = []
          letterGroup.forEach((letterObj) => {
            if (letterObj.isSelected) letters.push(letterObj.l);
          });

          if (letters.length) {
            word+=letters[this.$getRandomInt(letters.length-1)];
          }
          else word+='#'; //если нет выбранных букв



        }
        else word+='*'; //если нет такой группы

      });
      this.word = word;
      this.wordHistory.unshift(word);
      this.saveHistory();
    }
  },
  beforeMount() {
    this.loadAll();

  },
  mounted() {

  }

}
</script>

<style lang="css" scoped>
.ele {
  border: 1px solid #604d46;
  border-radius: 10px;
  padding: 5px;
  font-family: sans-serif;
  font-size: x-large;
  color: #604d46;
  margin: 5px;
  display: flow-root;
}
.res {
  border: 0px;
  margin: 70px;
  font-size: xxx-large;
  text-transform: capitalize;
}
.gen:hover, .letters div:hover, .add:hover {
  background: #c0bfdb;
  cursor: pointer;
}
.gen {
  width: 200px;
  /*margin: auto;*/
  border: 0px;
  user-select: none;
  border-radius: 10px;
  vertical-align: middle;
}
.add {
 cursor: pointer;
  /*margin: auto;*/
  border: 0px;
  user-select: none;
  border-radius: 10px;
  vertical-align: middle;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
#newMask {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #9b869870;
  text-align: center;
  border-radius: 15px;
  font-size: x-large;
  color: currentColor;
  text-transform: capitalize;
  font-weight: bolder;
}

.trio {
  text-align: center;
  width: 60%;
  background: #8f8eb35c;
  padding: 20px;
  float: left;
}
.letters {
  display: flow-root;
  border: 0px;
  width: 120px;
  float: left;
  margin: 10px 25px;
}
.letters div {
  width: 40px;
  height: 40px;
  float: left;
  border: 1px solid #604d46;
  border-radius: 10px;
  padding: 5px;
  margin: 2px;
  text-transform: capitalize;
  user-select: none;
}
.duo {
  background: #b06ea35c;
  padding: 20px;
  float: right;
  width: 30%;
}


</style>
