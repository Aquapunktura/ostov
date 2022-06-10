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
        <div class="child1">1</div>
        <div class="child2">unt in culpa qui officia deserunt mollit anim id est laborum</div>
        <div class="child3">3</div>
        <div class="child4">4</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: grey;
  width: 100%;
  // min-height: 100vh;
}
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
.parentgrid>* {
  // all child
  display: grid;
  place-items: center;
  background-color: #25752589;
  border-style: solid;
  border-color: #999;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
}
.parentgrid>*:hover {
  cursor: pointer;
  background-color: #257525;
  border-color: #ababab;
}

</style>

<!--Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
