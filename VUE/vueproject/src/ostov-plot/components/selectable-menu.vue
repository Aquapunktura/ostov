<template lang="html">
  <ul>
    <template v-if="buttons && buttons.length > 0">
      <li v-for="(button, id) in buttons" :key='id' @click="change(button)" :style="button.color?'background:'+button.color:''"  :class="addClass(button)">
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
    standard: String
  },
  data() {
    return {
      emited: ''
    }
  },
  methods: {
    change(button) {
      if (!button.disabled) {
        if (!button.justEmit) {
          this.emited = button.emit;
        }
        this.$emit('set', button.emit);
      }

    },
    addClass(button) {
      let res = this.emited==button.emit?'selected ':' ';
      res += button.disabled?'disabled':''
      return res;
    }
  },
  beforeMount() {
    if (this.standard) {
      this.emited = this.standard;
      this.$emit('set', this.emited);
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
  border: 2px solid #fff0;
}
span {
  padding: 10px;
  display: inherit;
}
span:hover {
  background-color: #4040408c;
}
li:hover {
  border: 2px solid white;
}
li:first-child,li:first-child>* {
  border-bottom-left-radius: 10px;
}
li:last-child, li:last-child>* {
  border-bottom-right-radius: 10px;
}

.selected {
  border: 2px solid black !important;
}
.selected>* {
  color: white;
  text-shadow: 5px 5px 20px rgb(9, 9, 9);
}
.disabled {
  cursor: not-allowed;
  background-color: #7b7676 !important;
}
</style>
