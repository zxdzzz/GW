<template>
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
};
</script>

<style>
@media screen and (orientation: landscape) {
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 1vh;
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 1vh;
  }
}
</style>
