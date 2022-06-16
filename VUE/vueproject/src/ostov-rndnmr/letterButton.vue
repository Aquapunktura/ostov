<template>
  <div :class="{ selected: letter.isSelected }" @click="$emit('update')">
    {{letter.l}}
  </div>
</template>

<script>
export default {
  name: 'letter-button',
  props: {
    letter: Object
  }
}
</script>

<style lang="css" scoped>
.selected {
  background: #a7a6c1;
}
</style>
