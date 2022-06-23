<template lang="html">
  <div>
    <template v-if="text">
      <h2>{{n.summary}} [{{n.id}}]</h2>
      <selectable-menu :buttons="buttons" @set="pushed" />
      <input type="text" name="" v-model="n.id" placeholder="ID текста">
      <input type="text" name="" v-model="n.summary" placeholder="Краткое описание">
      <textarea v-model="n.content" placeholder="Текст" />
    </template>
    <template v-else>
      не выбран текст
    </template>


  </div>
</template>

<script>
import SelectableMenu from './../components/selectable-menu.vue'
export default {
  name: 'text-ui',
  props: {
    text: Object
  },
  components: {
    'selectable-menu': SelectableMenu
  },
  data() {
    return {
      buttons: [
        {name: 'сохранить', emit: 'save', color: 'green', justEmit: true},
        {name: 'сбросить изменения', emit: 'reject', justEmit: true},
        {name: 'очистить', emit: 'clear', color: '#ac8e66',justEmit: true},
      ],
      n: {
        summary: '',
        id: '',
        content: ''
      },
    }
  },
  watch: {
    text: function() {
      this.loadAll()
    }
  },
  methods: {
    loadAll() {
      if (this.text) {
        let {summary, id, content} = this.text
        this.n = {summary, id, content}
      }
    },
    clearAll() {
      this.n.summary = '';
      this.n.content = '';
    },
    rejectChanges() {
      let {summary, id, content} = this.text;
      this.n = {summary, id, content}
    },
    pushed(e) {
      switch (e) {
        case 'save':
          this.$emit('save', this.n);
          break;
        case 'reject':
          this.rejectChanges();
          break;
        case 'clear':
          this.clearAll();
          break;
        default:

      }
    }
  },
  created() {
    this.loadAll();
  }
}
</script>

<style lang="css" scoped>
h2 {
  border-bottom: 2px solid #ccdbcb;
  border-radius: 5px;
  color: beige;
  text-align: center;

}
textarea {
 width: 100%; /* Ширина поля в процентах */
 height: 500px; /* Высота поля в пикселах */
 resize: none; /* Запрещаем изменять размер */
}
input {
  background-color: wheat;
  margin: 5px;
  padding: 5px;
  border-radius: 155px;
}
</style>
