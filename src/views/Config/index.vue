<template>
  <div class="public_body">
    <div class="public_head">
      <el-steps :active="activeSteps" align-center>
        <el-step :title="item.title" :description="item.desc" v-for="(item, index) in elStepData" :key="index"></el-step>
      </el-steps>
    </div>
    <div class="public_content">
      <transition :name="transitionShow">
        <div class="transition-box">.el-fade-in-linear</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { configDispose } from '@/service/index'
export default {
  name: 'AppConfig',
  data() {
    return {
      activeSteps: 1, //默认进度
      transitionShow: 'el-fade-in-linear', //切换动画效果
      elStepData: []
    }
  },
  created() {
    this.elStepData = configDispose.elStepData
  },
  mounted() {
    console.log(configDispose)
  }
}
</script>

<style lang="scss" scoped>
</style>