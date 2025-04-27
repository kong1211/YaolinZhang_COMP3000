<template>
  <div :style="{position,width,height}" class="particles-container">
    <vue-particles
      color="#304156"
      :particle-opacity="0.4"
      :particles-number="80"
      shape-type="circle"
      :particle-size="4"
      lines-color="#304156"
      :lines-width="2"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
      style="height:100%"
    />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100vh'
    },
    position: {
      type: String,
      default: 'absolute'
    }
  }
}
</script>

<style>
.particles-container{
  overflow: hidden;
}
</style>
