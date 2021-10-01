<template>
  <router-view/>
  <br>
  <footer class="mt-5" id="nav"> 
    <Navbar />
  </footer>
  <br>
  
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default{
  components: { Navbar },
  name:"App",

}
</script>


<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;
 

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
