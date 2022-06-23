<template lang="html">
  <article>
    <section>
      <select-options
        :options="data.texts"
        outputKey="summary"
        label="Тексты"
        :default="openedTextArrId"
        @delete="deleteText()"
        @add="addNewText()"
        @set="selectTextByArrId"
      />
      <text-ui
        v-if="openedText"
        :text="openedText"
        @save="saveText"
       />
    </section>
    <section>
      <select-options
        :options="data.chapters"
        outputKey="name"
        label="Главы"
        :default="chapterArrId"
        @delete="deleteChapter()"
        @add="addNewChapter()"
        @set="setChapter"
      />
      <tree-generator
        :data="data"
        :chapterArrId="chapterArrId"
        @changeText="setTextById"
        @newName="setNewStepName"
        @newStep="addNewStep"
        @deleteStep="deleteStep"
        @bindStep="bindStep"
        @stepIsEdited="storeSave()"
      />
    </section>
  </article>
</template>

<script>
import Tree from './tree-generator/tree.vue'
import DataJSON from './data/data.json'
import SelectOptions from './components/select-options.vue'
import TextUi from './text-ui/text-ui.vue'
export default {
  components: {
    'tree-generator': Tree,
    'text-ui': TextUi,
    'select-options': SelectOptions,
  },
  data() {
    return {
      data: DataJSON,
      chapterArrId: 0,
      openedTextArrId: null
    }
  },
  computed: {
    openedText: function() {
      return this.data.texts[this.openedTextArrId];
    }
  },
  methods: {
    storeSave() {
      localStorage.setItem('plotData', JSON.stringify(this.data));
      localStorage.setItem('plotChapterArrId', this.chapterArrId);
      localStorage.setItem('plotOpenedTextArrId', this.openedTextArrId);
    },
    storeLoad() {
      if (localStorage.getItem('plotData')) {
        this.data = JSON.parse(localStorage.getItem('plotData'));
        this.chapterArrId = +localStorage.getItem('plotChapterArrId');
        this.openedTextArrId = +localStorage.getItem('plotOpenedTextArrId');
      }

    },

    findTextIndexById(id) {
      return this.data.texts.findIndex((item)=>item.id===id);
    },

    setTextById(idText) {
      this.openedTextArrId = this.findTextIndexById(idText);
    },
    selectTextByArrId(arrId) {
      this.openedTextArrId = arrId;
      this.storeSave();
    },
    saveText(newText) {
      let {summary, id, content} = newText;
      this.openedText.summary = summary;
      this.openedText.id = id;
      this.openedText.content = content;
      this.storeSave();
    },
    addNewText() {
      this.data.texts.push({
        id: 'text'+Math.random(),
        tags: [],
        content: '',
        summary: ''
      })
      this.openedTextArrId = this.data.texts.length-1;
      this.storeSave();
    },
    deleteText() {
      this.data.texts.splice(this.openedTextArrId, 1);
      this.openedTextArrId = this.data.texts.length-1;
      this.storeSave();
    },


    addNewChapter() {
      this.data.chapters.push({
        "name": "*",
        "steps": []
      })
      this.chapterArrId = this.data.chapters.length-1;
      this.storeSave();
    },
    deleteChapter() {
      this.data.chapters.splice(this.chapterArrId, 1);
      this.storeSave();
    },
    setChapter(arrId) {
      this.chapterArrId = arrId;
      this.storeSave();
    },


    setNewStepName(o) {
      this.data.chapters[o.arrId].name = o.newName;
      this.storeSave();
    },
    addNewStep(o) {
      this.data.chapters[o.arrId].steps.push({
        type: "normal",
        textId: "0"
      })
      this.storeSave();
    },
    deleteStep(o) {
      this.data.chapters[o.arrId].steps.splice(o.stepId, 1);
      this.storeSave();
    },
    bindStep(o) {
      if (this.openedText) {
        this.data.chapters[o.arrId].steps[o.stepId].textId = this.openedText.id;
      }
      else {
        alert('Не выбран текст для привязки')
      }
      this.storeSave();
    }
  },
  updated() {
    this.storeSave();
  },
  created() {
    this.storeLoad();
  },

}
</script>

<style lang="css" scoped>
article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
article>* {
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  display: grid;
  justify-self: center;
  grid-template-rows: 100px 1fr;
}
article>*:first-child {
  border-right: 5px dotted #d9d9d9;;
}
</style>
