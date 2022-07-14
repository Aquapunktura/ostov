<template lang="html">
  <div @keydown.esc="call(-1)" tabindex="0" ref="main">
    <transition name="component-fade" mode="out-in">
      <div v-if="componentId < 0" class="wrapper">
        <button
          v-for="(item, id) in allComponents"
          :key="item.name"
          @click="call(id)"
        >
          {{ item.name }}
        </button>
      </div>
      <div v-else>
        <component :is="nowOpenedComponent" />
        <div class="back" @click="call(-1)">НАЗАД</div>
      </div>
    </transition>
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
      allComponents: [
        {name: 'plot', source: OstovPlot},
        {name: 'ui', source: OstovUi},
        {name: 'tree', source: OstovTree},
        {name: 'rndnmr', source: OstovRnd},
        {name: 'test', source: OstovTest}
      ],
      componentId: 0
    }
  },

  computed: {
    nowOpenedComponent() {
      return this.allComponents[this.componentId]?.source;
    }
  },

  watch: {
    componentId() {
      localStorage.setItem('chosenModule',this.componentId);
    }
  },

  methods: {
    call(id) {
      this.componentId = id;
    },
    focus() {
      this.$refs.main.focus();
    }
  },

  created() {
    const LocalStorageId = localStorage.getItem('chosenModule');
    if (LocalStorageId !== undefined) {
      this.componentId = LocalStorageId;
    }
  },

  mounted() {
    this.focus();
  },

  updated() {
    this.focus();
  }

}
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  background: rgb(213,224,224);
  background: linear-gradient(331deg, rgba(213,224,224,1) 0%, rgba(124,124,124,1) 100%);
  min-height: 100vh;
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
  border-color: black;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.4) inset;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
