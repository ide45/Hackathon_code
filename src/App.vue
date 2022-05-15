<template>
  <nav>
    <router-link to="/" class="logo">HOME</router-link>
    <router-link to="/api">FISH FINDER</router-link>
  </nav>
  <router-view/>
</template>

<style>
*{  
  max-width: 2000px;
  margin: 0 auto;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-around;


  padding: 13px;
  background: #5884ea41;
  width: 100%;
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(2px);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
    color: #fff;
    text-decoration:underline;
}

nav a.router-link-exact-active::before {
  content: "";
  display: block;
  background: url("assets/logo.png") no-repeat;
  width: 20px;
  height: 15px;
  float: left;
  margin: 0 6px 0 0;
}
</style>
