<template lang="html">
  <li @click="$emit('delete')">{{mask.orig}} [<template v-for="letterId in mask.data">{{letterId}}</template>]</li>
</template>

<script>
export default {
  name: 'mask-list',
  props: {
    mask: Object
  }
}
</script>

<style lang="css" scoped>
li {
  cursor: alias;
}
</style>
