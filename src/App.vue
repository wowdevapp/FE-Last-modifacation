<template>
  <div id="app">
      <appHeader></appHeader>
      <aboutUs></aboutUs>
      <hoWorks></hoWorks>
      <services></services>
      <prices></prices>
      <theCar></theCar>
  </div>
</template>
<script>
import aboutUs from './components/section/aboutUs.vue';
import hoWorks from './components/section/hoWorks.vue';
import services from './components/section/services.vue';
import prices from './components/section/prices.vue';
import theCar from './components/section/theCar.vue';
export default {
  name: 'App',
  components: {
    'aboutUs':aboutUs,
    'hoWorks':hoWorks,
    'services':services,
    'prices':prices,
    'theCar':theCar
  }
}
</script>

<style>
body {
	font-family: 'Open Sans', sans-serif;
  background:white;
  color: #737189;
}
</style>
