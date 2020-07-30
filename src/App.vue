<template>
  <div id="app">
    <!-- <router-view/> -->
    <Index />
  </div>
</template>

<script>
import Index from "@/components/Index";
export default {
  name: "App",
  components: {
    Index
  }
};
</script>

<style>
@import "./assets/index"; /* 不可以放到底部 */
</style>
