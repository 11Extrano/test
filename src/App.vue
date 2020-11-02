<template>
  <div id="app">
 
      <router-view />

  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  background-color: #f4f4f4;
  color: #2c3e50;
  min-height: 100%;
  img {
    vertical-align: middle;
  }
}
html {
  font-size: 100px;
}
body {
  font-size: 0.14rem;
}

html,
body {
  height: 100%;
}
</style>
