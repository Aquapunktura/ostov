<template lang="html">
  <div class="tree">
    <template v-for="(item, id) in data.chapters[chapterArrId].steps">
      <div :key="id" :class="'step '+item.type" @click="$emit('changeText', item.textId)">
        {{ returnText(item.textId) }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'block-tree',
  props: {
    data: Object,
    chapterArrId: Number
  },
  methods: {
    findTextById(id) {
      return this.data.texts.find((item)=>item.id===id);
    },
    returnText(id) {
      let a = this.findTextById(id);
      return a?a.summary:'нет текста';
    }
  },

}
</script>

<style lang="css" scoped>
.step {
  padding: 10px;
  background-color: yellow;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.choice {
  background-color: green;
}
.event {
  background-color: red;
}
.choice {
  max-width: 250px;
  margin: 20px;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}



</style>
