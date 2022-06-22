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
        :text="openedText"
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
    findTextIndexById(id) {
      return this.data.texts.findIndex((item)=>item.id===id);
    },

    setTextById(idText) {
      this.openedTextArrId = this.findTextIndexById(idText);
    },
    selectTextByArrId(arrId) {
      this.openedTextArrId = arrId;
    },
    addNewChapter() {
      this.data.chapters.push({
        "name": "*",
        "steps": []
      })
      this.chapterArrId = this.data.chapters.length-1;
    },
    deleteChapter() {
      this.data.chapters.splice(this.chapterArrId, 1);
    },
    setChapter(arrId) {
      this.chapterArrId = arrId;
    },


    setNewStepName(o) {
      this.data.chapters[o.arrId].name = o.newName;
    },
    addNewStep(o) {
      this.data.chapters[o.arrId].steps.push({
        type: "normal",
        textId: "0"
      })
    },
    deleteStep(o) {
      this.data.chapters[o.arrId].steps.splice(o.stepId, 1);
    }
  }
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
