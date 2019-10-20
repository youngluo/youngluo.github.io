<template>
  <div class="home">
    <div class="content">
      <router-link
        class="button"
        to="/articles/"
      >
        进入 →
      </router-link>
    </div>
    <div class="footer">
      Copyright © 2018-present Young Luo. <a href="http://www.beian.miit.gov.cn">蜀ICP备15010707号</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  font-size: 24px;
}
</style>
