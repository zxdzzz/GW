<template>
  <router-view />
</template>

<script>
/* global WeixinJSBridge */ // 关键：声明全局变量，消除ESLint报错
// import HelloWorld from './components/HelloWorld.vue'
(function () {
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });

    // 禁止用户在网页中调整字体
    WeixinJSBridge.on('menu:setfont', function () {
      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
    });
  }
})();
export default {
  name: "App",
};
</script>

<style>
body {
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  overflow-x: hidden;
}

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
