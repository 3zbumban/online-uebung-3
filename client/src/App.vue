<template>
  <div id="nav">
    <router-link to="/">Home </router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
body {
  font-family: 'Roboto', sans-serif;
}
</style>
