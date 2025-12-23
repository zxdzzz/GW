<template>
  <div style="overflow-x: hidden;">
    <header style="position: absolute;display: flex;justify-content: flex-start;align-items: center" id="header"
      v-bind:class="[flag ? 'isActive' : '', 'fixed-top']" ref="scrollElement" v-show="!showCompany">
      <div class="w1400">
        <div>
          <!-- <a class="navbar-brand" href="#"> -->
          <!-- </a> -->
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
            v-on:click="toggleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button> -->
          <div style="display: flex !important;width: 100vw;justify-content: flex-start;" id="navbarNavDropdown">
            <ul style="width: 100vw;" class="navbar_nav">
              <li class="li1 cursorPointer">
                <img @click="scrollToTop" src="../assets/icon/topLogo.png" alt="" class="navbar_img" />
              </li>
              <li class="li2 cursorPointer" style="width: 7rem;text-align: center;">
                <div href="javascript:void(0)" @click="scrollToSection('section1')">{{ navbar1[L] }}</div>
              </li>
              <li class="li3 cursorPointer" style="text-align: center;"
                :style="{ width: L == 'CN' ? '8.8rem' : '11.8rem' }">
                <div href="javascript:void(0)" @click="scrollToSection('section2')">{{ navbar2[L] }}</div>
              </li>
              <li class="li4 cursorPointer" style="width: 5rem;text-align: center;">
                <div href="javascript:void(0)" @click="scrollToSection('section10')">{{ navbar3[L]
                }}</div>
              </li>
              <li class="li5 cursorPointer" style="width: 8rem;text-align: center;">
                <div href="javascript:void(0)" @click="scrollToSection('section8')">{{ navbar4[L] }}
                </div>
              </li>
              <li class="li6 cursorPointer" style="align-items: center;width: 11rem;">
                <div style="display: flex;align-items: center;" href="#">
                  <div @click="changeL('CN')" style="display: flex;justify-content: center;align-items: center;">
                    <img style="width: 1.5rem;margin-top: 2px;" src="../assets/icon/CN.png" alt="">
                    <span style="width: 5rem;height: 100%;">中文简体</span>
                  </div>
                  <div style="height: 15px;border-left: 1px solid #000;"></div>
                  <div @click="changeL('EN')"
                    style="display: flex;justify-content: center;align-items: center;margin-left: 0.5vw;">
                    <img style="width: 1.5rem;margin-top: 2px;" src="../assets/icon/EN.png" alt="">
                    <span style="width: 5rem;height: 100%;">English</span>
                  </div>
                </div>
                <!-- <div href="#">{{ L == 'EN' ? 'CN' : 'EN' }}</div> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view v-show="!showCompany" />
    <footer>
      <div id="section8" style="padding: 4vh;font-weight: 700;" class="container">
        <div style="padding: 15px;display: flex;flex-direction: column;justify-content: center;align-items: center;"
          class="foot-box">
          <div class="contact_us" style="margin-top: 4vh;font-size: 2vw;">{{ foot1[L] }}</div>
          <div class="EM_us" style="display: flex;margin-top: 3vh;margin-bottom: 3vh;">
            <img class="EM_img" style="width: 2vw;margin-right: 15px;" src="../assets/icon/EM.png" alt="">
            <div style="display: flex;align-items: center;font-size: 1.5vw;font-weight: 300;">{{
              foot2[L]
            }}</div>
          </div>
          <!-- <div class="foot3"
            style="margin-top: 25px;border: 1px solid #000;width: 10vw;display: flex;align-items: center;justify-content: center;border-radius:2.5vh;height: 5vh;">
            {{ foot3[L] }}
          </div>
          <div class="foot4" style="text-align: center;color:#ccc;margin-top: 25px;font-weight: 400;">©️ 2025 Aicogen
            Therapeutics.
            {{ foot4[L] }}<br>{{ foot5[L] }}
            | {{ foot6[L] }}</div> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);
export default {
  name: "topBar",
  props: {
    msg: String,
  },
  data() {
    return {
      showCompany: false,
      scrollListener: null,
      L: 'EN',
      flag: false,
      navbar1: {
        'EN': 'About Us',
        'CN': '关于我们'
      },
      navbar2: {
        EN: 'Technical Platform',
        CN: '技术平台'
      },
      navbar3: {
        EN: 'Team',
        CN: '团队'
      },
      navbar4: {
        EN: 'Contact Us',
        CN: '联系我们'
      },
      foot1: {
        EN: 'Contact Us',
        CN: '联系我们'
      },
      foot2: {
        EN: 'Email: info@aicogen.net',
        CN: '邮箱: info@aicogen.net'
      },
      foot3: {
        EN: 'Contact us!',
        CN: '与我们联系！'
      },
      foot4: {
        EN: 'All rights reserved',
        CN: '版权所有'
      },
      foot5: {
        EN: 'Privacy Policy',
        CN: '隐私政策'
      },
      foot6: {
        EN: 'Terms of Use',
        CN: '使用条款'
      },

      // show:false,  我自己写的
    };
  },
  mounted() {
    this.scrollListener = () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 150) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    };
    window.addEventListener("scroll", this.scrollListener);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    changeL(e) {
      this.L = e;
      if (this.L == 'CN') {
        this.$router.push('/cn');
      } else {
        this.$router.push('/home');
      }
    },
    scrollToTop() {
      // 滚动到页面顶部，behavior: 'smooth' 实现丝滑效果
      window.scrollTo({
        top: 0, // 滚动到顶部（Y轴坐标0）
        behavior: 'smooth' // 平滑滚动
      });
    },
    goBack() {
      console.log(2222);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // 可选，平滑滚动效果
      });
      this.showCompany = !this.showCompany;
    },
    introductingCompany() {
      console.log(11111);
      this.showCompany = !this.showCompany;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // 可选，平滑滚动效果
      });
    },
    scrollToSection(sectionId) {
      if (window.innerWidth < 991) {
        // this.show = false;
        this.$scrollTo(`#${sectionId}`, 500, { offset: -358 });
      } else {
        this.$scrollTo(`#${sectionId}`, 500, { offset: -85 });
      }
    },
    toggleNavbar() {
      console.log("1111");
      this.show = !this.show;
      console.log(this.show);
    },
  },
};

</script>


<style scoped>
.navbar_nav {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

.cursorPointer {
  cursor: pointer;
}

ul {
  /* 清除默认外边距 */
  margin: 0;
  /* 清除默认内边距（通常是左侧的缩进） */
  padding: 0;
  /* 去掉列表项前的默认标记（小圆点） */
  list-style-type: none;
}

header {
  height: 80px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
}

.w1400 {
  width: 100%;
  margin: auto;
}

.nav-item {
  margin-right: 20px;
}

.nav-link {
  color: rgb(28, 42, 75) !important;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  /* background: rgba(0, 0, 0, 0.3); */
  transition: transform 0.2s linear;
}

.nav-link:hover {
  transform: scale(1.1);
}

.logo {
  /* width:170px; */
  cursor: pointer;
  height: 40px;
  margin-left: -30px;
  /* 向左移动一点 */
  margin-top: -6px;
  /* 向上移动一点 */
}

/* 底部样式 */
footer {
  color: #000;
}

footer img {
  width: 100px;
}

.f_left {
  text-align: center;
  /* margin: 85px 0; */
}

.f_right {
  /* margin: 85px 0; */
  font-size: 14px;
}

.isActive {
  background-color: #fff;
  color: #333;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.isActive ul li a {
  color: #333 !important;
}

@media screen and (max-width: 991px) {

  /* 在这里写入当屏幕宽度小于或等于991px时的CSS规则 */
  .w1400 {
    width: 100%;
  }

  header {
    height: 30px;
    background: #fff !important;
  }

  header ul {
    font-size: 8px;
    background: #fff;
    display: flex;
  }

  header ul li {
    /* background-color: aqua; */
    /* border-bottom: 1px solid black; */
    color: #0d0d0d;
    text-align: center;
  }

  #header ul li a {
    color: #0d0d0d !important;
    border-radius: 0%;
    background: none;
    /* background-color: aquamarine; */
  }

  /* 导航栏 样式 */

  /* 其他样式 */
  .logo {
    width: 100px;
    height: 28px;
    cursor: pointer;
  }

  .container {
    padding: 0 !important;
    font-size: 0.7rem !important;
  }

  /* 底部样式 */
  /* footer { */
  /* color: #fff; */
  /* margin-top: 90px; */
  /* } */

  /* footer img {
    width: 80px;
    height: 80px;
  } */
  .f_right {
    font-size: 12px;
  }
}

@media screen and (orientation: landscape) {
  .navbar_img {
    height: 20px;
    margin-bottom: 6px;
  }

  .li1 {
    margin-bottom: 2px;
  }

  .li2 {
    margin-left: 25px;
  }

  .li6 {
    margin-left: 20px;
  }

  .foot-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foot-logo {
    display: none;
  }

  .foot-connect {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
  }

  .foot-code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (orientation: portrait) {
  .navbar_img {
    height: 12px;
  }

  .container {
    padding: 0 !important;
    font-size: 0.7rem;
  }

  .EM_img {
    width: 2vh !important;
  }

  .contact_us {
    margin-top: 20px !important;
    font-size: 2vw;
  }

  .EM_us {
    margin-top: 10px !important;
  }

  .foot3 {
    margin-top: 10px !important;
    width: 10vh !important;
    height: 5vw !important;
  }

  .foot4 {
    margin-top: 10px !important;
  }

  .li1 {
    margin-bottom: 2px;
  }

  .li2 {
    width: 4rem !important;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-left: 12px;
  }

  .li3 {
    width: 5rem !important;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .li4 {
    width: 3rem !important;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .li5 {
    width: 4rem !important;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-left: 10px;
  }

  .li6 {
    width: 1rem !important;
    display: flex;
    justify-content: center;
    align-items: end !important;
    margin-left: 10px;
  }

  .foot-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foot-logo {
    display: none;
  }

  .foot-connect {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
  }

  .foot-code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
