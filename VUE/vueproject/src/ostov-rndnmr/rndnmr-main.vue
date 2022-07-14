<template lang="html">
  <div class="trioPlusDuo">
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

      <div class="ele" >
        <!-- style="width: 680px; margin: 10px auto" -->
        <div v-for="(group, id) in data" class="letters" :key="id">
          <letter-button
            v-for="letter in group.all"
            :key="letter.l"
            :letter="letter"
            @update="pushedLetter(letter)"
          />
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
      data: null,
      masks: null,
      word: '',
      wordHistory: null,
      newMaskName: '',
      showMenu: true
    }
  },

  components: {
    LetterButton,
    MaskList
  },

  watch: {
    // при изменении параметров, сохраняем их в локалсторэдж
    'data': {
      handler: function() {localStorage.setItem('saveButtons', JSON.stringify(this.data));},
      deep: true
    },
    masks() {
      localStorage.setItem('saveMasks', JSON.stringify(this.masks));
    },
    wordHistory() {
      localStorage.setItem('saveHistory', JSON.stringify(this.wordHistory));
    }
  },

  methods: {
    choceAll(a) {
      if (typeof a === 'boolean') {
        // перебираем все буквы и меняем их выбор на true или false
        this.data.forEach(item =>item.all.forEach((item)=>item.isSelected = a));
      }
      else console.log('choceAll(a) принимает на вход true или false. Передано:', a);
    },
    pushedLetter(letter) {
      // просто меняем значение на противоположное
      letter.isSelected = !letter.isSelected;
    },
    addMask() {
      // если маска не введена
      if (!this.newMaskName.length) return;
      // переводим слово в нижний регистр
      this.newMaskName = this.newMaskName.toLowerCase();
      // переменная для итоговой маски
      const GoalMask = {
        orig: this.newMaskName,
        data: []
      }
      //перебераем символы слова
      for(let a=0; a<this.newMaskName.length; a++) {
        // переменная для одной буквы
        const OneLetter = this.newMaskName[a];
        // перебираем все группы букв
        const Finder = this.data.find((group, groupNubmer) => {
          // ищем в группе (group) букву (OneLetter)
          if(group.all.find(letterObj => letterObj.l == OneLetter)) {
            GoalMask.data.push(groupNubmer);
            return true;
          }
        });
        // если буква не нашлась ни в одной группе прекращаем добавление
        if (!Finder) return alert(`Неподдерживаемый символ "${OneLetter}"`);
      }
      // добавляем итоговую маску
      this.masks.push(GoalMask);
    },
    generate() {
      //выбрать маску
      // если нет масок
      if (!this.masks.length) {
          alert('нет масок!');
          return;
      }
      // выбираем случайную маску из списка
      const ChosenMaskArr = this.masks[this.$getRandomInt(this.masks.length-1)].data;
      // переменная для итогового слова
      let word = '';
      // перебираем массив маски
      ChosenMaskArr.forEach((groupArrId) => { // groupArrId -> айди номер группы букв из маски
        // если существует такая группа
        if (this.data[groupArrId]) {
          // получаем массив всех букв из нужной группы
          const LetterGroup = this.data[groupArrId].all;
          // переменная для хранения всех выбраных букв
          const Letters = []
          LetterGroup.forEach((letterObj) => {
            // перебираем группу букв и добавляем все буквы в массив
            if (letterObj.isSelected) Letters.push(letterObj.l);
          });
          // если есть выбранные буквы в нужной группе
          if (Letters.length) {
            // добавляем случайную в итоговое слово
            word+=Letters[this.$getRandomInt(Letters.length-1)];
          }
          else word+='#'; //если нет выбранных букв
        }
        else word+='*'; //если нет такой группы

      }); // конец перебора маски
      this.word = word;
      this.wordHistory.unshift(word);
    }
  },

  beforeMount() {
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

    this.word = this.wordHistory.length?this.wordHistory[0]:'';

  },


}
</script>

<style lang="css" scoped>
.trioPlusDuo {
  display: grid;
  height: 100vh;
  grid-template-columns: auto 0.3fr;
}
.ele {
  width: 45%;
  margin: 10px auto;
  border: 1px solid #B4ADA3;
  border-radius: 10px;
  padding: 5px;
  font-family: sans-serif;
  font-size: x-large;
  color: #B4ADA3;
  display: flow-root;
}
.res {
  width: auto;
  border: 0px;
  margin: 70px;
  font-size: xxx-large;
  text-transform: capitalize;
}
.gen:hover, .letters div:hover, .add:hover {
  background: #000;
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
  background: #272834;
  padding: 20px;
  float: left;
}
.letters {
  display: flow-root;
  border: 0px;
  width: 120px;
  float: left;
  margin: 0 auto;
}
.letters div {
  width: 40px;
  height: 40px;
  float: left;
  border: 1px solid #71695D;
  border-radius: 10px;
  padding: 5px;
  margin: 2px;
  text-transform: capitalize;
  user-select: none;
}
.duo {
  background: #3A2838;
  padding: 20px;
  float: right;
  /* width: 30%; */
}


</style>
