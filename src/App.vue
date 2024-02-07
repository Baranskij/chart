<template>
  <div id="app">
    <div class="content">
      <div class="nav">
        <v_nav_panel
          :acordeon="acordeonTop"
        />
        <v_nav_panel
          :acordeon="acordeonBottom"
        />
      </div>
      <v_chart
        v-if="navItem === 'Sales'"
        :navItem = navItem
      />
    </div>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import v_nav_panel from './components/v-nav-panel.vue'
import v_chart from './components/v-chart.vue'
export default {
  name: 'App',
  components: {
    v_nav_panel,
    v_chart,
  },
  data() {
    return {
      
    }
  },
  computed: mapGetters(["acordeonTop", "acordeonBottom", "navItem"]),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  box-shadow: 0px 0px 20px 2px #c5c6d1;
}
.content {
  display: flex;
  gap: 15px;
}
</style>
