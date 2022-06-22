<template lang="html">
  <ul>
    <template v-if="buttons && buttons.length > 0">
      <li v-for="(button, id) in buttons" :key='id' @click="change(button)" :style="button.color?'background:'+button.color:''"  :class="emited==button.emit?'selected':''">
        <span>{{button.name}}</span>
      </li>
    </template>
    <template v-else>
      <li class="disabled"><span>нет доступных опций</span></li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'selectable-menu',
  props: {
    buttons: Array,
  },
  data() {
    return {
      emited: ''
    }
  },
  methods: {
    change(button) {
      if (!button.justEmit) {
        this.emited = button.emit;
      }
      this.$emit('set', button.emit);
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  display: grid;
  grid-auto-flow: column;
  text-align: center;
}
li {
  display: grid;
  color: #eff2e1;
  cursor: pointer;
  background-color: #22646a;
  user-select: none;
  border: 1px solid #fff0;
}
span {
  padding: 10px;
  display: inherit;
}
span:hover {
  background-color: #4040408c;
}
li:hover {
  border: 1px solid white;
}
li:first-child {
  border-bottom-left-radius: 10px;
}
li:last-child {
  border-bottom-right-radius: 10px;
}

.selected {
  border: 1px solid black;
}
.selected>* {
  color: white;
  text-shadow: 5px 5px 20px rgb(9, 9, 9);
}
.disabled {
  cursor: not-allowed;
}
</style>
