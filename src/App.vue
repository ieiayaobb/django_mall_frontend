<template>
  <div>
    <div id="app">
      <dashboard />
      <banner />
      <control />
      <showcase />
      <recommend />
      <sale />
      <floor />
      <floor />
      <floor />
      <floor />
      <floor />
      <selected />
      <feature />
      <term />
      <copyright />
    </div>
  </div>
</template>

<script>
import Dashboard from './components/framework/Dashboard'
import Banner from './components/framework/Banner'
import Control from './components/framework/Control'
import Showcase from './components/framework/Showcase'
import Recommend from './components/framework/Recommend'
import Sale from './components/framework/Recommend'
import Floor from './components/framework/Floor'
import Selected from './components/framework/Selected'
import Feature from './components/framework/Feature'
import Term from './components/framework/Term'
import Copyright from './components/framework/Copyright'

export default {
  name: 'app',
  components: {
    Dashboard, Banner, Control, Showcase, Recommend, Sale, Floor, Selected, Feature, Term, Copyright
  }
}
</script>

<style>
#app {
  width: 1210px;
  margin: 0 auto;
}
</style>
