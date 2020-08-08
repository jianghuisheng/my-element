<template>
  <div>
    <h1>二级分类页面</h1>

    <!-- <router-link to="/sencondtype/content/2"> -->
    <el-button type="primary" @click="contentClick">查看内容</el-button>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentid: 1
    };
  },
  methods: {
    contentClick() {
      this.$router.push("/sencondtype/content/" + this.contentid);
    }
  }
};
</script>

<style></style>
