<template>
  <div>
    <div class="part3">
      <h2 class="title title1"></h2>
      <div style="max-width: 100vw !important;padding: 0;margin: 0;" class="container development_box">
        <div style="position: relative" class="row">
          <img :src="DBAI1" alt="" width="100%" style="border-radius: 10px" />
          <div class="img1_wordOutBox"
            style="position: absolute;top: 0%;left: 0%;color: rgb(255, 255, 255);width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;">
            <img style="width: 30%;" src="../assets/icon/topLogo.png" alt="">
            <div style="color: rgb(12,62,118);font-size: 2rem;margin-top: 10px;">凯戎生物</div>
          </div>
        </div>
      </div>
      <div style="max-width: 100vw !important;padding: 0;margin: 0;margin-top: 6vh;" class="container development_box">
        <div style="position: relative" class="row">
          <img :src="DBAI2" alt="" width="100%" style="border-radius: 10px" />
          <div class="img1_wordOutBox"
            style="font-size: 2rem;font-weight: 700;position: absolute;top: 0%;left: 0%;color: rgb(255, 255, 255);width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;color: #000;text-align: center;">
            新一代免疫疗法
            <div style="font-size: 1.5rem;font-weight: 400;margin-top: 4vh;">重塑人体免疫系统平衡</div>
          </div>
        </div>
      </div>
    </div>
    <div id="section1" class="part2">
      <div style="padding-left: 10vw !important; padding-right: 10vw !important;" class="container Function">
        <h2 style="margin-top: 100px; margin-bottom: 80px;" class="title title1 success Aicogen"></h2>
        <h2 style="font-size: 2rem;text-align: center;font-weight: 700;" class="title1 success">关于 Aicogen</h2>
        <h2 style="margin-top:40px;font-size: 1.4vw;text-align: center;" class="title1 success mb09rem">
          Aicogen Limited是一家处于临床前阶段生物创新科技企业。致力于开发前沿RNA技术，<br>通过对免疫细胞进行工程化重编程，以攻克自身免疫性疾病、肿瘤及其他严重威胁生命的疾病。</h2>
        <h2 style="margin-top:30px;font-size: 1.4vw;text-align: center;margin-bottom: 60px;"
          class="title1 success mb2rem">
          公司已发现多种具有差异化特征的分子，有望成为自身免疫和肿瘤适应症的"同类首创"<br>(first-in-class)和"同类最佳" (best-in-class)疗法。</h2>
        <div class="part2_row">
          <div class="part2_card">
            <img style="width: 3vw;margin-top: 3vh;" src="../assets/icon/iconTeam.png" alt="">
            <div style="margin: 2vh 2vh;">全球化研发布局</div>
          </div>
          <div class="part2_card">
            <img style="width: 3vw;margin-top: 3vh;" src="../assets/icon/iconpipeline.png" alt="">
            <div style="margin: 2vh 2vh;text-align: center;">拥有多项有潜力成为同类首创新药（FIC）<br>与同类最优（BIC）的研发项目
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div id="section2" style="max-width: 100vw !important;margin-top: 140px;" class="container section2">
        <div style="position: relative; height: 30vw;" class="row section2_box">
          <template>
            <div style="margin-top: -120px;" class="block">
              <span style="opacity: 0;" class="demonstration">默认 Hover 指示器触发</span>
              <el-carousel style="height: 100%;">
                <el-carousel-item v-for="(item, i) in carouselImages" :key="i">
                  <h3 style="position: relative;color: #fff;" class="small">
                    <img class="section2_img" style="width: 100%;" :src="item.src" alt="">
                    <div
                      style="height: 86%;display: flex;flex-direction: column;position: absolute;top: 0;left: 30%;align-items: center;justify-content: center;">
                      <h1 class="section2_title" :style="{ top: i == 0 ? '34%' : '40%' }"
                        style="font-size: 2.5vw;font-weight: 700;text-align: left;width: 100%;" v-if="i != 100">
                        {{
                          item.title }}</h1>
                      <div class="section2_text"
                        :style="{ top: i == 0 ? '40%' : '48%', fontSize: i == 0 ? '1vw' : '1.4vw', lineHeight: i == 0 ? 2 : 1.6 }"
                        style="line-height: 1.6;top: 48%;white-space: pre-line;font-size: 1.4vw;text-align: left;">
                        {{
                          item.text }}</div>
                    </div>
                  </h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="out-box">
      <div>
        <div class="introduce-team-box">
          <div>
            <!-- <div style="color: #000;font-size: 2vw;text-align: center;">About Us</div> -->
            <div id="section1" style="width: 100vw;">
              <div style="position: relative;width: 100%;margin-top: 2vh;">
                <img style="width: 100%;" src="../assets/headPage/aboutUs1.jpg" alt="">
                <div
                  style="position: absolute;left: 60%;height: 100%;display: flex;flex-direction: column;justify-content: center;top: 0;">
                  <div class="section1_box" style="border-bottom: 1px solid #ccc;padding-bottom: 6%;">
                    <div class="section1_text" style="font-weight: 700;font-size: 2vw;width: 27vw;">
                      aBody
                      <div style="font-weight: 400;font-size: 1.5vw;">
                        蛋白质序列优化平台
                      </div>
                    </div>
                  </div>
                  <div class="section1_box" style="border-bottom: 1px solid #ccc;margin-top: 8%;padding-bottom: 8%;">
                    <div class="section1_text" style="font-weight: 700;font-size: 2vw;width: 27vw;">
                      xMRNA
                      <div style="font-weight: 400;font-size: 1.5vw;">
                        mRNA序列优化平台
                      </div>
                    </div>
                  </div>
                  <div class="section1_box" style="margin-top: 8%;padding-bottom: 8%;">
                    <div class="section1_text" style="font-weight: 700;font-size: 2vw;width: 27vw;">
                      xLNP
                      <div style="font-weight: 400;font-size: 1.5vw;">
                        靶向器官和细胞的体内递送平台
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="section11" class="section10" style="position: relative;width: 100%;">
                <img class="section10_img" style="width: 100%;" :src="DBAI3" alt="">
                <div
                  style="position: absolute;font-size: 1.8vw;color: #fff;top: 0%;left: 0%;width: 100%;height: 100%;display: flex;flex-direction: column;">
                  <div
                    style="margin-top: 8vh;margin-left: 12vw;display: flex;justify-content: start;align-items: center;">
                    <img style="width: 2vw;" src="../assets/icon/iconpipeline2.png" alt="">
                    <span style="margin-left: 1vw;font-size: 2vw;">管线</span>
                  </div>
                  <div style="display: flex;margin-top: 7vh;margin-left: 15vw;">
                    <div style="font-weight: 600;">ACG-102</div>
                    <div style="font-weight: 300;">&ensp;体内mRNA编码的B 细胞靶向治疗，用于自身免疫性疾病。</div>
                  </div>
                  <div style="display: flex;margin-top: 7vh;margin-left: 15vw;">
                    <div style="font-weight: 600;">ACG-201 </div>
                    <div style="font-weight: 300;">&ensp;体内mRNA编码的多特异性靶向疗法，用于治疗血液系统恶性肿瘤。</div>
                  </div>
                  <div style="display: flex;margin-top: 7vh;margin-left: 15vw;">
                    <div style="font-weight: 600;">ACG-301 </div>
                    <div style="font-weight: 300;">&ensp;体内mRNA编码的多特异性靶向疗法，用于治疗实体瘤。</div>
                  </div>
                  <div style="display: flex;margin-top: 7vh;margin-left: 15vw;">
                    <div style="font-weight: 600;">ACG-401 </div>
                    <div style="font-weight: 300;">&ensp;体内mRNA编码的多特异性靶向疗法，用于治疗炎症及纤维化疾病。</div>
                  </div>
                </div>
              </div>
              <div id="section10" class="section10" style="position: relative;width: 100%;margin-top: 4vh;">
                <img class="section10_img" style="width: 100%;" :src="teamUrl" alt="">
                <div
                  style="position: absolute;color: #fff;top: 0%;left: 0%;width: 100%;height: 100%;display: flex;justify-content: center;">
                  <div style="text-align: center;" class="team_word">
                    <div style="font-size: 2.5vw;margin-top: 10%;">团队</div>
                    <div class="lh17" style="margin-top: 2vh;font-size: 1.8vw;font-weight: 300;">
                      国际化顶尖的科研与管理团队成员包括LNP-mRNA
                      领域的资深专家、经验丰富的<br>AI工程师，以及来国际知名大药企的高管。</div>
                    <div style="margin-top: 6vh;font-size: 2.5vw;margin-top: 6%;">战略合作</div>
                    <div class="lh17" style="margin-top: 1vh;font-size: 1.8vw;font-weight: 300;">
                      与全球领先的CRO机构以及知名高校建立了深度战略合作伙伴关系。
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div style="position: relative;width: 100%;color: #fff;margin-top: 5vh;">
                <img style="width: 100%;" src="../assets/headPage/technicalAdvantage.jpg" alt="">
                <div style="position: absolute;top: 35%;left: 10%;">
                  <div style="margin-top: 10%;padding-bottom: 10%;">
                    <div style="font-size: 1.6vw;">技术优势</div>
                    <div style="line-height: 2;margin-top: 10%;">
                      ● 高效的靶点筛选与验证能力<br>
                      ● 驱动的生物大分子设计与优化<br>
                      ● 新型递送技术平台的开发<br>
                      ● 平台具备扩展性、安全性与可控性<br>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- <div id="section10" :class="showMoreInfo" class="company-news">
          <div class="company-news-title">公司动态</div>
          <div class="news-list-box">
            <div style="cursor: pointer" class="news-list">
              <img class="news-list-img" src="../assets/headPage/companyDynamics1.jpg" alt="" />
              <div class="news-list-time">
                <div class="news-list-time-year">2025</div>
                <div>08-19</div>
              </div>
              <div style="height: 40%;" class="news-list-content">
                <div style="font-size: 16px; color: #aaa; font-weight: 600;">使用我们优化的AlphaFold耗实现准确预测蛋白质和复合体结构</div>
                <div style="font-size: 16px; color: #aaa; margin-top: 0.6vw;">
                  我们使用DiffDock预测在人类5-HT耗b受体中结合的不同构象的LSD分<br />子。
                </div>
              </div>
            </div>
            <div style="cursor: pointer" class="news-list">
              <img class="news-list-img" src="../assets/headPage/companyDynamics2.jpg" alt="" />
              <div class="news-list-time">
                <div class="news-list-time-year">2025</div>
                <div>06-22</div>
              </div>
              <div style="height: 40%;" class="news-list-content">
                <div style="font-size: 16px; color: #aaa; font-weight: 600;">蛋白质工程</div>
                <div style="font-size: 16px; color: #aaa; margin-top: 0.6vw;">
                  Neurosnap通过我们优化的一系列生成模型，使设计新型蛋白质变得轻而<br />易举。
                </div>
              </div>
            </div>
            <div style="cursor: pointer" class="news-list">
              <img class="news-list-img" src="../assets/headPage/companyDynamics3.jpg" alt="" />
              <div class="news-list-time">
                <div class="news-list-time-year">2025</div>
                <div>03-18</div>
              </div>
              <div style="height: 40%;" class="news-list-content">
                <div style="font-size: 16px; color: #aaa; font-weight: 600;">蛋白质折叠</div>
                <div style="font-size: 16px; color: #aaa; margin-top: 0.6vw;">
                  使用我们优化的AlphaFold耗实现准确预测蛋白质和复合体结构。<br />
                  不再需要繁琐的实验室工作，只需配置您的位置，运行作业，然后在我们为<br />您处理困难部分时去喝杯咖啡。
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import "../style/bootstrap.min.css";
import "../style/bootstrap.css";
export default {
  data() {
    return {
      portraitMedia: null,
      teamUrl: require('../assets/headPage/team.jpg'),
      DBAI1: require('../assets/headPage/DBAI1.jpg'),
      DBAI2: require('../assets/headPage/DBAI2.jpg'),
      DBAI3: require('../assets/headPage/DBAI3.jpg'),
      carouselImages: [
        { src: require('../assets/broadCast/1.jpg'), alt: '', title: '核心技术平台', text: '' },
      ],
      showSpeakVideo: false,
      showNormalVideo: true,
      showMoreInfo: "",
    };
  },
  mounted() {
    // 1. 初始化媒体查询对象（匹配竖屏）
    this.portraitMedia = window.matchMedia('(orientation: portrait)');

    console.log(this.portraitMedia.matches, "event.matches");
    if (this.portraitMedia.matches) {
      this.teamUrl = require('../assets/headPage/team.jpg')
      this.DBAI1 = require('../assets/headPage/DBAI11.jpg')
    }

    // 3. 监听方向变化事件（箭头函数确保this指向组件实例）
    this.portraitMedia.addEventListener('change', (event) => {
      console.log(event.matches, "event.matches");
    });
  },
  beforeDestroy() {
    // 组件销毁时移除监听，避免内存泄漏
    if (this.portraitMedia) {
      this.portraitMedia.removeEventListener('change', () => { });
    }
  },
  methods: {
    speakEnd() {
      this.showSpeakVideo = false;
    },
    clickNormalVideo() {
      console.log("cccccccc");
      this.showSpeakVideo = true;
      setTimeout(() => {
        console.log(this.$refs.videoPlayer);
        this.video = this.$refs.videoPlayer;
        console.log(this.video);
        this.video.volume = 1;
        this.video.play(); // 播放
      }, 200);
    },
    showMore() {
      this.showMoreInfo = "no-height";
    },
    clickNews(e) {
      if (e) {
        window.open(e);
      }
    },
    goBack() {
      this.$emit("goBack");
    },
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // 可选，平滑滚动效果
      });
    },
  },
};
</script>
<style scoped>
::v-deep .el-carousel__container {
  height: 100% !important;
}

::v-deep .el-carousel__arrow {
  display: none !important;
}

@media screen and (orientation: landscape) {
  .out-box {
    width: 100%;
  }

  .goBack-box {
    text-align: center;
    position: fixed;
    right: 2vw;
    bottom: 20vh;
    width: 5vw;
    height: 10vw;
    background-color: rgb(15, 138, 205);
    border-radius: 8px;
    color: #fff;
    z-index: 99;
  }

  .goBack {
    border-bottom: 0.5px solid rgba(225, 225, 225, 0.8);
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .goBack-img {
    width: 3vw;
  }

  .goBack-word {
    display: none;
  }

  .goTop-img {
    width: 3vw;
  }

  .goTop {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .introduce {
    width: 51vw;
    color: #fff;
    padding-top: 16.67vw;
    padding-left: 12.5vw;
  }

  .introduce-title {
    font-size: 2.2vw;
  }

  .introduce-content {
    font-size: 1.2vw;
    line-height: 2.5vw;
  }

  .introduce-team-box {
    width: 100%;
    /* height: 74vw; */
    /* padding-top: 7.81vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .introduce-team-title {
    width: 100%;
    font-size: 2.2vw;
    font-weight: 900;
    text-align: center;
  }

  .introduce-team-content {
    width: 74.9vw;
    font-size: 1.62vw;
    text-align: center;
    margin-top: 5vh;
  }

  .introduce-people-box {
    width: 74.9vw;
    height: 38.96vw;
    margin-top: 4.38vw;
    display: flex;
    justify-content: space-between;
  }

  .introduce-people {
    width: 18.07vw;
    height: 100%;
    background-color: #fff;
  }

  .people-img {
    width: 100%;
  }

  .name {
    width: 100%;
    font-size: 1.32vw;
    font-weight: 900;
    text-align: center;
    margin-top: 1vw;
  }

  .position {
    width: 100%;
    font-size: 1.32vw;
    font-weight: 900;
    text-align: center;
  }

  .educational {
    text-align: center;
    font-size: 1.1vw;
    margin-top: 0.5vw;
    height: 3vw;
    overflow: auto;
  }

  .brief-introduce {
    padding: 0.5vw 1vw 0;
    font-size: 1.1vw;
    overflow: auto;
    height: 14vw;
  }

  .company-news {
    width: 100%;
    padding-top: 5vw;
    height: 107vh;
    overflow: hidden;
    position: relative;
  }

  .no-height {
    height: auto !important;
  }

  .company-news-title {
    text-align: center;
    font-size: 2.2vw;
    font-weight: 900;
  }

  .show-more-box {
    cursor: pointer;
    position: absolute;
    top: 101vh;
    background-color: rgb(2, 0, 37);
    border-radius: 2vw;
    color: #fff;
    left: 42vw;
    height: 6vh;
    width: 16vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .show-more {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    font-size: 1.3vw;
  }

  .news-list {
    width: 74.9vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 12.55vw;
    margin-top: 5vw;
    margin-top: 7vh;
    height: 21vh;
  }

  .news-list-img {
    width: 16.57vw;
  }

  .news-list-time {
    font-size: 1.62vw;
    border-right: 1px dashed #ccc;
    padding-right: 3vw;
    color: #ccc;
  }

  .news-list-time-year {
    font-size: 2.2vw;
    font-weight: 600;
    color: #000;
  }

  .news-list-content {
    width: 38.54vw;
    font-size: 1.1vw;
  }

  .news-title {
    font-size: 1.62vw;
    font-weight: 700;
  }
}

@media screen and (orientation: portrait) {
  .out-box {
    width: 100%;
  }

  .card-body {
    justify-content: start !important;
    padding-top: 1.5rem !important;
  }

  .card-text {
    font-size: 0.5rem !important;
    width: 84% !important;
  }

  .h25vh {
    height: 9rem !important;
    border-radius: 0 !important;
  }

  .section2 {
    max-width: 96vw !important;
    margin-top: 130px !important;
  }

  .section2_img {
    width: 92vw !important;
    border-radius: 10px;
  }

  .section1_box {
    padding-bottom: 0 !important;
  }

  .section2_title {
    font-size: 0.5rem !important;
  }

  .section2_text {
    font-size: 0.5rem !important;
  }

  .section1_text {
    font-size: 0.5rem !important;
    text-align: center;
  }

  .section2_box {
    height: 20vw !important;
  }

  .section10 {
    font-size: 0.5rem;
    margin-top: 3vh;
    width: 93vw !important;
    margin-left: 3vw;
  }

  .section10_img {
    border-radius: 10px;
  }

  .development_box {
    width: 94vw !important;
    margin-left: 3vw !important;
  }

  .goBack-box {
    text-align: center;
    position: fixed;
    right: 2vw;
    bottom: 20vh;
    width: 8vw;
    height: 15vw;
    background-color: rgb(15, 138, 205);
    border-radius: 1vw;
    z-index: 99;
    color: #fff;
  }

  .goBack {
    border-bottom: 0.5px solid rgba(225, 225, 225, 0.8);
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1vw;
  }

  .goBack-img {
    width: 4.5vw;
  }

  .goBack-word {
    display: none;
  }

  .goTop-img {
    width: 4.5vw;
  }

  .goTop {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .introduce {
    width: 51vw;
    color: #fff;
    padding-top: 16.67vw;
    padding-left: 12.5vw;
  }

  .introduce-title {
    font-size: 2.2vw;
  }

  .introduce-content {
    font-size: 1.2vw;
    line-height: 2.5vw;
  }

  .introduce-team-box {
    width: 100%;
    /* height: 74vw; */
    /* height: 64.9vw; */
    /* padding-top: 7.81vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .introduce-team-title {
    width: 100%;
    font-size: 2.2vw !important;
    font-weight: 900 !important;
    text-align: center;
  }

  .introduce-team-content {
    width: 74.9vw;
    font-size: 1.62vw;
    text-align: center;
  }

  .introduce-people-box {
    width: 74.9vw;
    height: 38.96vw;
    margin-top: 4.38vw;
    display: flex;
    justify-content: space-between;
  }

  .introduce-people {
    width: 18.07vw;
    height: 100%;
    background-color: #fff;
  }

  .news-info {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .people-img {
    width: 100%;
  }

  .name {
    width: 100%;
    font-size: 1.62vw;
    font-weight: 900;
    margin-top: 1vw;
    text-align: center;
  }

  .position {
    width: 100%;
    font-size: 1.62vw;
    font-weight: 900;
    text-align: center;
  }

  .educational {
    text-align: center;
    font-size: 1.4vw;
  }

  .brief-introduce {
    padding: 1vw 1vw 0;
    font-size: 1.1vw;
    overflow: auto;
    height: 11vw;
    /* display: none; */
  }

  .company-news {
    width: 100%;
    padding-top: 5vw;
    /* height: 100vh; */
    overflow: hidden;
    position: relative;
  }

  .company-news-title {
    text-align: center;
    font-size: 2.2vw;
    font-weight: 900;
  }

  .news-list {
    width: 74.9vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 12.55vw;
    margin-top: 5vw;
  }

  .news-list-img {
    width: 20.57vw;
  }

  .news-list-time {
    font-size: 1.62vw;
    border-right: 1px dashed #ccc;
    padding-right: 3vw;
    color: #ccc;
  }

  .news-list-time-year {
    font-size: 2.2vw;
    font-weight: 600;
    color: #000;
  }

  .news-list-content {
    width: 38.54vw;
    font-size: 1.1vw;
  }

  .news-title {
    font-size: 1.62vw;
    font-weight: 800;
  }

  .show-more-box {
    display: none;
  }
}
</style>

<style scoped>
/* 企业数字员工核心功能样式 */
.part2 .card {
  height: 66vh;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  border-radius: 20px;
}

.part8 .card {
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  border: 0px solid #fff !important;
}

.part2 .card:hover,
.part8 .card:hover {
  /* cursor: pointer; */
  transform: translateY(-10px) scale(1.05);
  /* 兼容写法 */
  -webkit-transform: translateY(-10px) scale(1.05);
  -moz-transform: translateY(-10px) scale(1.05);
  -ms-transform: translateY(-10px) scale(1.05);
  -o-transform: translateY(-10px) scale(1.05);
  /* 阴影效果 */
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
}

.part2 .card-text,
.introduce {
  color: #000;
  font-size: 1.2vw;
  height: 40%;
}

.card-title {
  font-size: 1.7vw;
  font-weight: 600;
  text-align: center;
  margin-top: 8%;
}

.card-body {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.icon_box {
  text-align: center;
  margin-bottom: 20%;
  width: 100%;
}

.introduce {
  /* padding:16px; */
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
}

.intr {
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  color: #2a2828;
}

.d_btn {
  position: absolute;
  top: 45%;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9%;
  height: 10px;
  background: none;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  border: none;
}

.d_text {
  top: 30%;
}

.car_bt {
  padding: 14px 32px;
  background-color: #ff434f;
  margin-top: 30px;
  border: 0;
  color: var(--text-color-lightest);
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
}

.title {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 2.2vw;
  font-weight: 550;
}

.part4 .title1::after,
.part5 .title::after,
.part6 .title1::after,
.part7 .title1::after {
  width: 9%;
}

.part4 .title {
  margin-bottom: 0;
}

.feature-title {
  position: absolute;
  top: 40%;
  left: 37%;
  grid-area: title;
  font-size: 18px;
  color: var(--text-color-darker);
  color: #e7e9ec;
  /* background-color: chocolate; */
  background: rgba(188, 61, 20, 0.7);
  width: 80px;
  line-height: 30px;
  text-align: center;
  display: block;
  border-radius: 5px;
  font-size: 14px;
}

/* 企业数字员工六大应用场景样式 */
.part3 .col {
  margin-bottom: 35px;
}

.col-12 {
  margin-top: 20px;
}

.intro {
  font-size: 18px;
  text-align: center;
  color: #727272;
}

/* 智慧园区产品样式 */
.part4 .feature {
  width: 100%;
  height: 460px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.06);
  padding: 16px;
  text-align: center;
}

.part4 h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
}

.part4 .pt4_img {
  height: 80%;
}

/* 成功案例 */
.part5 .col div {
  height: 250px;
  overflow: hidden;
  margin-top: 34px;
}

.part5 .col img {
  max-width: 100%;
  max-height: 100%;
}

.pt5_wrap {
  height: 100%;
}

.part5 .row {
  margin-bottom: 25px;
}

.part6 {
  display: none;
}

.part6 .jcsa {
  justify-content: space-around !important;
}

/* 核心团队样式 */
.part6 .team-member {
  background-color: #fff;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-bottom: 28px;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  justify-items: center;
  height: 100%;
}

.part6 .team-member:hover {
  transform: translateY(-20px) scale(1.05);
  -webkit-transform: translateY(-20px) scale(1.05);
  -moz-transform: translateY(-20px) scale(1.05);
  -ms-transform: translateY(-20px) scale(1.05);
  -o-transform: translateY(-20px) scale(1.05);
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
}

.part6 .name {
  margin-top: 16px;
  font-size: 22px;
  font-weight: 700;
}

.part6 .position {
  font-size: 16px;
  margin-bottom: 8px;
}

.profile-image {
  overflow: hidden;
}

.profile-image .imgb {
  height: 300px;
}

.profile-image img {
  width: 100%;
  object-fit: cover;
  object-position: center top;
}

.pt7_bg {
  background: #727272;
  padding: 50px 0;
}

.part7 .col {
  text-align: center;
  height: 90px;
  line-height: 90px;
}

.part7 .col img {
  width: 100px;
}

/* 公司动态样式 */
.part8 img {
  border-radius: 10px;
}

.part8 .act-title {
  color: var(--text-color-dark);
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 600;
}

.date-published {
  color: #a39d9d;
  font-size: 14px;
}

.part8 .card-text {
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  height: 40%;

}

.read-more-btn {
  border: 0;
  color: white;
  background-color: #ff434f;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  padding: 6px 14px;
  margin-top: 24px;
}

.part8 .meta {
  color: #c6c6c6;
  display: flex;
}

.part8 .comments {
  margin-left: 8px;
}

@media screen and (max-width: 991px) {

  /* 在这里写入当屏幕宽度小于或等于991px时的CSS规则 */
  /* 轮播图样式 */
  .carousel-indicators {
    display: none;
  }

  /* 企业数字员工核心功能 */
  .part2 .card {
    height: 400px;
    /* transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s; */
    margin-bottom: 10px;
  }

  .part2 .card:hover,
  .part8 .card:hover {
    cursor: pointer;
    transform: translateY(-10px) scale(1.05);
  }

  .card-img-top {
    width: 100%;
    /* height: 55%; */
  }

  .part2 .card-text,
  .introduce {
    font-size: 14px;
  }

  .part2 .card-body {
    padding: 0rem;
  }

  .part2 .container {
    padding-left: 10vw !important;
    padding-right: 10vw !important;
  }

  /* 企业数字员工六大应用场景 */
  .part3 .container {
    width: 100%;
    padding: 0;
    margin-right: auto;
    padding-left: 0vw !important;
    padding-right: 0vw !important;
  }

  .part3 .row {
    display: flex;
    margin: 0;
  }

  .part3 .col-12 {
    flex: 0 0 50%;
    max-width: 100%;
  }

  .part3 .feature-title {
    position: absolute;
    top: 40%;
    left: 31%;
    width: 60px;
    line-height: 20px;
    font-size: 10px;
    font-weight: 500;
  }

  /* 智慧园区产品样式 */
  .part4 .feature {
    /* width:100%; */
    height: 250px;
    padding-left: 10px;
  }

  .intro {
    font-size: 16px;
    padding: 0px 20px;
  }

  .part4 h4 {
    font-size: 14px;
  }

  .part4 .pt4_img {
    width: 99%;
    height: 75% !important;
  }

  .part4 :nth-of-type(2) .pt4_img {
    width: 98% !important;
  }

  .part4 :nth-of-type(3) .pt4_img {
    width: 50% !important;
  }

  .part4 :nth-of-type(5) .pt4_img {
    width: 76% !important;
  }

  .part4 .container {
    /* width: 100%; */
    padding: 0;
    margin-right: auto;
  }

  .part4 .row {
    display: flex;
    margin: 0;
  }

  .part4 .col-12 {
    flex: 0 0 50%;
    max-width: 100%;
  }

  /* 成功案例样式 */
  .part5 .container {
    width: 100%;
    padding: 0;
    margin-right: auto;
  }

  .part2_row {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
  }

  .part5 .row {
    display: flex;
    margin: 0;
  }

  .part5 .col-12 {
    flex: 0 0 50%;
    max-width: 100%;
  }

  /* 核心团队的样式 */
  .profile-image .imgb {
    height: 200px !important;
  }

  .profile-image img {
    width: 100% !important;
  }

  .intr {
    display: none;
  }

  .part6 .team-member {
    height: 90%;
  }

  .part6 .name {
    margin-top: 10px;
    font-size: 16px;
  }

  .title {
    margin-top: 40px !important;
    margin-bottom: 20px !important;
    font-size: 18px !important;
    font-weight: 550 !important;
  }

  /* 合作伙伴样式 */
  .pt7_bg {
    padding: 10px 0;
  }

  .row {
    text-align: center;
    justify-content: center !important;
  }

  .part7 .col {
    text-align: center;
    height: 30px;
    line-height: 30px;
  }

  .part7 .col img {
    width: 30px;
  }

  .col .millet {
    width: 28% !important;
  }

  .profile-image {
    overflow: hidden;
  }

  .profile-image .imgb {
    height: 100px;
  }

  .profile-image img {
    width: 50%;
    object-fit: cover;
    object-position: center top;
  }
}

.block {
  width: 100%;
}

@media screen and (orientation: portrait) {
  .success {
    font-size: 1rem !important;
  }

  .part2_row {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
  }

  .padding0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
    max-width: 23% !important;
  }

  .img1_wordOutBox {
    top: 25% !important;
    left: 8% !important;
  }

  .mb09rem {
    margin-bottom: 0.9rem;
  }

  .mb2rem {
    margin-bottom: 2.2rem !important;
  }

  .team_word {
    width: 80% !important;
  }

  .img1_wordBox {
    text-align: left !important;
    font-size: 0.8rem !important;
  }

  h2 {
    font-size: 1.2vw !important;
  }

  .img_word {
    position: absolute;
    bottom: 20px;
    width: 83.57%;
    height: 19.8%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2vw;
    border: 2px solid rgba(225, 225, 225, 0.6);
    left: 20px;
    padding: 1vw 0 0 2vw;
    color: #fff;
    text-align: start;

    p {
      font-size: 1.3vw;
    }
  }

  .part1 {
    margin-top: 10vh;
    position: relative;
  }

  .product-introduction {
    position: absolute;
    right: 20vw;
    bottom: 0vh;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
  }

  .top-title {
    font-size: 5vw;
    width: 100%;
    text-align: center;
    margin-left: 5%;
  }

  .top-body {
    font-size: 3vw;
  }
}

@media screen and (orientation: landscape) {
  .part2_row {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
  }

  .img_word {
    position: absolute;
    bottom: 20px;
    width: 83.57%;
    height: 19.8%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    border: 2px solid rgba(225, 225, 225, 0.6);
    left: 20px;
    padding: 20px 0 0 20px;
    color: #fff;

    p {
      font-size: 22px;
    }
  }

  /* 顶部轮播图 */
  .w-100 {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  .product-introduction {
    position: absolute;
    right: 35%;
    bottom: 20%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
  }

  .top-title {
    font-size: 3.5vw;
    width: 100%;
    margin-left: -2.5%;
  }

  .top-body {
    font-size: 2vw;

    li {
      margin-top: 20px;
    }
  }
}

.logo_box {
  width: 74.9vw;
  height: 5vw;
  margin-top: 2vw;
  display: flex;
  justify-content: space-around;
}

.part2_card {
  width: 45%;
  height: 28vh;
  background-color: #74c0fc;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 2%;
  font-size: 1.3vw;
  align-items: center;
}

.section1_text {
  text-align: center;
}
</style>