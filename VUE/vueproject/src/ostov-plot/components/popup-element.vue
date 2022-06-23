<template lang="html">
  <div class="b-popup" @click="hide" v-if="!hidden">
    <div class="b-popup-content" @click="stop">
        <slot>Пустое окно</slot>
    </div>
</div>
</template>

<script>
export default {
  name: 'popup-element',
  props: ['hidden'],
  methods: {
    hide() {
      this.$emit('hide');
    },
    stop(e) {
      e.stopPropagation();
    }
  }
}
</script>

<style lang="css" scoped>
.b-popup{
    width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.5);
    overflow:hidden;
    position:fixed;
    top:0px;
    left: 0px;

}
.b-popup .b-popup-content{
    margin:40px auto 0px auto;
    width: 200px;
    padding:10px;
    background-color: #c5c5c5;
    border-radius:5px;
    box-shadow: 0px 0px 10px #000;
}
</style>
