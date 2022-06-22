<template lang="html">
  <div class="container">
    <h2>{{label}}</h2>
    <select v-model="selected">
      <template v-if="options && options.length > 0">
        <option
          v-for="(item, id) in options"
          :key="id"
          :value="id"
        >
          {{item[outputKey]}}
        </option>
      </template>
      <template v-else>
        <option disabled>нет данных</option>
      </template>
    </select>
    <div class="buttons">
      <button class="button delete" @click="del()">‐</button>
      <button class="button add" @click="add()">+</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'text-ui',
  props: {
    options: Array,
    outputKey: String,
    label: String,
    default: [String, Number]
  },
  data() {
    return {
      id: '',
      selected: null
    }
  },
  watch: {
    selected: function(v) {
      if (v !== null) {
        this.$emit('set', v);
      }
    },
    default: function(v) {
      this.selected = v;
    }
  },
  methods: {
    add() {this.$emit('add')},
    del() {this.$emit('delete')},
  },
  created() {
    if (this.label) this.id = this.label;
    else this.id = 'lable'+Math.random()
    if (this.default !== undefined) {
      this.selected = this.default;
    }
  },
}
</script>

<style lang="css" scoped>
h2 {
  text-align: center;
}
.container {
  display: grid;
  justify-content: space-evenly;
  align-content: baseline;
}
.container>* {
  display: grid;
}

.button {
  display: grid;
  font-size: x-large;
  background-color: #f2e7e740;
  padding: 2px;
  cursor: pointer;
  border: 2px solid #0000004a;
}
.buttons>*:first-child {
  border-bottom-left-radius: 70%;
}
.buttons>*:last-child {
  border-bottom-right-radius: 70%;
}
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.button:hover {
  border-color: white;
}
.add {background-color: green}
.delete {background-color: red}
</style>
