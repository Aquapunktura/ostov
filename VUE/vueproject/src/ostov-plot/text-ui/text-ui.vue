<template lang="html">
  <div>
    <template v-if="text">
      <h2>{{text.summary}} [{{text.id}}]</h2>
      <textarea :value="text.content" />
    </template>
    <template v-else>
      не выбран текст
    </template>


  </div>
</template>

<script>
export default {
  name: 'text-ui',
  props: {
    text: Object
  },
  data() {
    return {
      id: '',
      selected: null
    }
  },
  methods: {

  },
  created() {

  },
}
</script>

<style lang="css" scoped>
textarea {
 width: 100%; /* Ширина поля в процентах */
 height: 500px; /* Высота поля в пикселах */
 resize: none; /* Запрещаем изменять размер */
}
</style>
