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
      standard="select"
      @set="changeEditType"
      class="edit"
    />
    <div class="tree">
      <template v-for="(item, id) in chapter.steps">
        <div :key="id" @click="stepClick(item, id)" :class="(id===selectedStepId?'selected':'')+' '+item.type">
          {{ returnText(item.textId) }}
        </div>
        <div
        v-if="id !== chapter.steps.length-1"
        class="h-line"
        :key="'a_'+id"
        />
      </template>
    </div>

    <popup-element v-if="editMenueIsOpen" @hide="editMenueIsOpen = false; $emit('stepIsEdited')" class="popup-edit">
      <input type="text" name="" v-model="chapter.steps[selectedStepId].textId"><Br />
      <div v-for="(item, id) in stepTypes" :key="id" :class="' form_radio_btn'">
        <input :id="'radio-'+id" type="radio" name="radio" :value="item" v-model="chapter.steps[selectedStepId].type">
        <label :for="'radio-'+id" :class="item">{{item}}</label>
      </div>
    </popup-element>
  </div>

</template>

<script>
import SelectableMenu from './../components/selectable-menu.vue'
import PopupElement from './../components/popup-element.vue'
export default {
  name: 'block-tree',
  props: {
    data: Object,
    chapterArrId: Number
  },
  components: {
    'selectable-menu': SelectableMenu,
    'popup-element': PopupElement
  },
  data() {
    return {
      changeName: false,
      newName: '',
      editMenueIsOpen: false,
      actionType: '',
      selectedStepId: null,
      buttons: [
        {name: 'добавить', emit: 'add', color: 'green', justEmit: true},
        {name: 'выбрать', emit: 'select'},
        {name: 'изменить', emit: 'edit'},
        {name: 'привязать', emit: 'bind', color: '#5d0fa6'},
        {name: 'удалить', emit: 'delete', color: 'red'},
      ],
      stepTypes: ['normal', 'event', 'choice']
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
          this.selectedStepId = stepId;
          this.$emit('changeText', item.textId);
          break;
        case 'delete':
          this.$emit('deleteStep', {arrId: this.chapterArrId, stepId});
          break;
        case 'bind':
          this.selectedStepId = stepId;
          this.$emit('bindStep', {arrId: this.chapterArrId, stepId});
          break;
        case 'edit':
          this.selectedStepId = stepId;
          this.editMenueIsOpen = true;
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
.tree,.form_radio_btn  {
  display: grid;
  justify-items: center;
  filter: drop-shadow(1px 0px 0px #445b64a6)
          drop-shadow(-1px 0px 0px #445b64a6)
          drop-shadow(0px 1px 0px #445b64a6)
          drop-shadow(0px -1px 0px #445b64a6)
          drop-shadow(1px 1px 0px #445b64a6)
          drop-shadow(-1px -1px 0px #445b64a6)
          drop-shadow(-1px 1px 0px #445b64a6)
          drop-shadow(1px -1px 0px #445b64a6);
}
.tree>*, .form_radio_btn label{
  padding: 10px;
  background-color: #d9d777;
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;
  user-select: none;
  text-align: center;
}
.selected, .form_radio_btn input[type=radio]:checked + label {
  color: #0d0d0d;
  text-shadow: 0px 0px 1px #0f0f0f;

}
.choice {
  background-color: #c9d9c9 !important;
}
.event {
  background-color: #ff7800 !important;
}
.choice {
  padding: 30px  !important;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
.tree {
  text-align: center;
}


.form_radio_btn {
	display: grid;
}
.form_radio_btn input[type=radio] {
	display: none;
}

.form_radio_btn label:hover {
	color: #666;
}


.h-line {
  height: 25px;
  width: 2px;
  padding: 0;
  cursor: auto;
  background-color: black;
}

</style>
