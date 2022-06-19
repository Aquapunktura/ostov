<template lang="html">
  <div class="">
    <table border width="800" height="600">
      <tr><td align="center">все герои</td><td align="center">новый герой</td></tr> <!--ряд с ячейками заголовков-->
      <tr><td align="center">все главы</td><td align="center">новая глава</td></tr>
      <tr><td align="center">текст</td><td align="center">текущая глава</td></tr>
      <tr><td align="center">
        <textarea v-if="openedText" :value="openedText.content" />
        <textarea v-else />
      </td>
          <td align="center">
            <tree-generator :data="data" :chapterArrId="chapterArrId" @changeText="changeText" />
          </td>
      </tr> <!--ряд с ячейками тела таблицы-->

    </table>
  </div>
</template>

<script>
import Tree from './tree-generator/tree.vue'
import DataJSON from './data/data.json'

export default {
  components: {
    'tree-generator': Tree
  },
  data() {
    return {
      data: DataJSON,
      chapterArrId: 0,
      openedText: undefined
    }
  },
  methods: {
    findTextById(id) {
      return this.data.texts.find((item)=>item.id===id);
    },
    changeText(idText) {
      this.openedText = this.findTextById(idText);
    }
  }
}
</script>

<style lang="css" scoped>
textarea {
 width: 400px; /* Ширина поля в процентах */
 height: 500px; /* Высота поля в пикселах */
 resize: none; /* Запрещаем изменять размер */
}
td {
  border-style: solid;
  border-width: 0;
  border-bottom: 1px;
}
</style>
