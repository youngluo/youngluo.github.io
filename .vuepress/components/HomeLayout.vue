<template>
  <div class="home-page">
    <router-link
      class="enter-button"
      to="/articles/"
    >
      ENTER
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.enter-button {
  font-size: 24px;
}
</style>


