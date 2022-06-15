<template lang="html">
  <div class="">
    <div v-if="nowOpenedComponent === undefined" class="button">
      <button @click="call(4)">plot</button>
      <button @click="call(1)">ui</button>
      <button @click="call(3)">tree</button>
      <button @click="call(2)">rndnmr</button>
    </div>
    <template v-else>
      <div :is="nowOpenedComponent" />
      <div class="back" @click="call(0)">НАЗАД</div>
    </template>

  </div>
</template>

<script>
import OstovUi from './ostov-ui/ui-main.vue'
import OstovRnd from './ostov-rndnmr/rndnmr-main.vue'
import OstovTree from './ostov-tree/tree-main.vue'
import OstovPlot from './ostov-plot/plot-main.vue'

export default {
  data() {
    return {
      allComponents: [undefined,OstovUi,OstovRnd,OstovTree,OstovPlot],
      nowOpenedComponent: undefined
    }
  },
  methods: {
    call(id) {
      this.nowOpenedComponent = this.allComponents[id];
    }
  }
}
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: grey;
  width: 100%;
}


.back {
  cursor: pointer;
  position: fixed;
  bottom: 0px;
  right: 0px;
}
.back:hover {
  color: white;
}
</style>
