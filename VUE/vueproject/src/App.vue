<template lang="html">
  <div @keydown.esc="call(0)" tabindex="0" ref="main">
    <div v-if="nowOpenedComponent === undefined" class="wrapper">
        <button @click="call(1)">plot</button>
        <button @click="call(2)">ui</button>
        <button @click="call(3)">tree</button>
        <button @click="call(4)">rndnmr</button>
        <button @click="call(5)">test</button>
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
import OstovTest from './ostov-test/test.vue'

export default {
  data() {
    return {
      allComponents: [undefined,OstovPlot,OstovUi,OstovTree,OstovRnd,OstovTest],
      nowOpenedComponent: undefined
    }
  },
  methods: {
    call(id) {
      this.nowOpenedComponent = this.allComponents[id];
      localStorage.setItem('chosenModule',id);
    }
  },
  beforeMount() {
    this.nowOpenedComponent = this.allComponents[localStorage.getItem('chosenModule')];
  },
  updated() {
    this.$refs.main.focus();
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
.wrapper {
    position: absolute;
    text-align: center;
    width: 100%;
}
.wrapper>* {
  font-size: large;
  margin: 10px;
  padding: 10px;
  background-color: #56565650;
  border-radius: 20px;
  border-style: solid;
  border-color: #e0e0e0;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
}
.wrapper>*:hover {
  color: white;
  cursor: pointer;
  border-color: black;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.4) inset;
}
</style>
