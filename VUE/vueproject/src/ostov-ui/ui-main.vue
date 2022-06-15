<template>
  <div>
    <div class="base">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>
      <hr>
    </div>
    <div class="parentgrid">
      <ultra-button data="1"></ultra-button>
      <ultra-button data="unt in culpa qui officia deserunt mollit anim id est laborum"></ultra-button>
      <ultra-button data="3"></ultra-button>
      <ultra-button data="4"></ultra-button>
        <!-- <div class="child1">1</div>
        <div class="child2">unt in culpa qui officia deserunt mollit anim id est laborum</div>
        <div class="child3">3</div>
        <div class="child4">4</div> -->
    </div>
  </div>
</template>

<script>
import UltraButton from './ultraButton.vue'
export default {
  components: {
    'ultra-button': UltraButton
  },
  data() {
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

.base {
  background-color: #454545;
  color:#888888;
  margin: 30px;
}
.parentgrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 20px;
  margin: 30px;
}


</style>

<!--Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
