<template lang="html">
  <div v-if="chapter">
    <h2 v-if="!changeName" @click="changeName = true; newName = chapter.name">
      - {{chapter.name}} -
    </h2>
    <div v-else>
      <input v-model="newName"><span @click="saveName()">💾</span>
    </div>
    <selectable-menu
      :buttons="buttons"
      @set="changeEditType"
      class="edit"
    />
    <div class="tree">
      <template v-for="(item, id) in chapter.steps">
        <div :key="id" :class="'step '+item.type" @click="stepClick(item, id)">
          {{ returnText(item.textId) }}
        </div>
      </template>
    </div>


  </div>

</template>

<script>
import SelectableMenu from './../components/selectable-menu.vue'
export default {
  name: 'block-tree',
  props: {
    data: Object,
    chapterArrId: Number
  },
  components: {
    'selectable-menu': SelectableMenu
  },
  data() {
    return {
      changeName: false,
      newName: '',
      actionType: 'select',
      buttons: [
        {name: 'добавить', emit: 'add', color: 'green', justEmit: true},
        {name: 'выбрать', emit: 'select'},
        {name: 'изменить', emit: 'edit'},
        {name: 'удалить', emit: 'delete', color: 'red'},
      ]
    }
  },
  computed: {
    chapter: function() {
      return this.data.chapters[this.chapterArrId];
    }
  },
  methods: {
    findTextById(id) {
      return this.data.texts.find((item)=>item.id===id);
    },
    returnText(id) {
      let a = this.findTextById(id);
      return a?a.summary:'нет текста';
    },
    changeEditType(emitName) {
      if (emitName === 'add') {
        this.addStep();
      }
      else this.actionType = emitName;
    },
    stepClick(item, stepId) {
      switch (this.actionType) {
        case 'select':
          this.$emit('changeText', item.textId);
          break;
        case 'delete':
          this.$emit('deleteStep', {arrId: this.chapterArrId, stepId});
          break;
        default:

      }
    },
    saveName() {
      this.$emit('newName', {newName:this.newName,arrId: this.chapterArrId});
      this.newName = '';
      this.changeName = false;
    },
    addStep() {
      this.$emit('newStep', {arrId: this.chapterArrId});
    }
  },

}
</script>

<style lang="css" scoped>
h2 {
  border-bottom: 2px solid #ccdbcb;
  border-radius: 5px;
  color: beige;
  text-align: center;
}
.edit {
  padding-bottom: 5px;
  margin-bottom: 30px;
}

.step {
  padding: 10px;
  background-color: yellow;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;
}
.choice {
  background-color: green;
}
.event {
  background-color: red;
}
.choice {
  margin: 20px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
.tree {
  text-align: center;
}


</style>
