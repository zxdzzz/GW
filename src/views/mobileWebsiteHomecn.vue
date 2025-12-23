<template>
    <div class="mobile-website-home">
        <div style="padding-bottom: 0 !important;" class="header padding">
            <!-- <div class="logo">
                <img style="width: 37vw;" src="../assets/icon/topLogo.png" alt="Logo">
            </div> -->
            <div class="changeLanguage">
                <el-dropdown @command="handleLanguageChange">
                    <span class="el-dropdown-link">
                        Language/语言<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="cn">简体中文</el-dropdown-item>
                        <el-dropdown-item command="en">English</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div style="margin-top: 4vw;" class="module1">
            <img style="border-radius: 0;" src="../assets/headPage/banner-1.jpg" alt="">
            <div class="module1_text fontSize1">
                <img style="width: 70%;border-radius: 0;" src="../assets/icon/topLogo.png" alt="">
            </div>
        </div>
        <div class="body padding">
            <div class="module1">
                <img src="../assets/mobile/mobile1.jpg" alt="">
                <div style="flex-direction: column;font-size: 5vw;" class="module1_text">
                    新一代免疫疗法
                    <span style="margin-top: 4vw;">重塑人体免疫系统平衡</span>
                </div>
            </div>
            <div class="module2 fontSize2 lh17">
                <div style="font-size: 3.5vw;" class="module2_title fontWeight">关于 Aicogen</div>
                <div style="text-align: center;font-size: 2.9vw;">Aicogen Limited是一家临床前阶段免疫学公司，致力于开发尖端</div>
                <div style="text-align: center;font-size: 2.9vw;">RNA技术，对免疫细胞进行编程，以对抗自身免疫疾病，肿瘤和其他</div>
                <div style="text-align: center;font-size: 2.9vw;">致命疾病。</div>
            </div>
            <div class="module3 fontSize2">
                <div class="module3_topBox">
                    <div class="module3_topBox_one">
                        <img class="icon" src="../assets/icon/iconTeam.png" alt="">
                        <div class="module3_text">中美双研发中心布局</div>
                    </div>
                    <div class="module3_topBox_two">
                        <img class="icon" src="../assets/icon/iconpipeline.png" alt="">
                        <div class="module3_text">多项FIC/BIC管线
                        </div>
                    </div>
                </div>
                <!-- <div class="module3_bottomBox">
                    <div class="module3_bottomBox_one">
                        <img class="icon" src="../assets/mobile/mobileicon2.png" alt="">
                        <div class="module3_text"> AI-powered mRNA In vivo <br> therapy platform</div>
                    </div>
                    <div class="module3_bottomBox_two">
                        <img class="icon" src="../assets/mobile/mobileicon3.png" alt="">
                        <div class="module3_text">A professional international <br> R&D team
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="module4">
                <img src="../assets/mobile/mobile3.jpg" alt="">
                <div class="module4_text fontSize2 lh17">
                    <div style="font-size: 6vw;">核心技术平台</div>
                </div>
            </div>
            <div class="module5">
                <img src="../assets/mobile/mobile4.jpg" alt="">
                <div class="module5_text" style="font-size: 2.2vw;">
                    <div style="flex-direction: column;" class="height25"><span style="font-size: 3vw;"
                            class="fontWeight">aBody</span>蛋白质序列优化
                    </div>
                    <div style="flex-direction: column;" class="height25"><span style="font-size: 3vw;"
                            class="fontWeight">xMRNA</span>mRNA序列优化</div>
                    <div style="flex-direction: column;" class="height25"><span style="font-size: 3vw;"
                            class="fontWeight">xLNP</span>细胞特异性体内递送</div>
                    <!-- <div style="flex-direction: column;" class="height25"><span style="font-size: 3vw;"
                            class="fontWeight">aBody</span>Protein
                        optimization</div> -->
                </div>
            </div>
            <div class="module4">
                <img src="../assets/headPage/backgroundpipeline.jpg" alt="">
                <div style="font-size: 2.8vw;" class="module6_text fontSize2 lh17">
                    <div style="margin-top: 7vw;">
                        <img style="width: 4vw;" src="../assets/icon/iconpipeline2.png" alt="">
                        <span class="fontWeight" style="margin-left: 2vw;">管线</span>
                    </div>
                    <div style="display: flex;margin-top: 3.4vh;padding-left: 6vw;">
                        <div style="font-weight: 600;">ACG-102- </div>
                        <div style="display: flex;align-items: center;">mRNA 编码的工程化 B
                            细胞靶向治疗，<br>用于自身免疫性疾病。
                        </div>
                    </div>
                    <div style="display: flex;margin-top: 3.4vh;padding-left: 6vw;">
                        <div style="font-weight: 600;">ACG-202- </div>
                        <div style="display: flex;align-items: center;">mRNA
                            编码的工程化多特异性靶向治疗，<br>用于血液系统恶性肿瘤。
                        </div>
                    </div>
                    <div style="display: flex;margin-top: 3.4vh;padding-left: 6vw;">
                        <div style="font-weight: 600;">ACG-302- </div>
                        <div style="display: flex;align-items: center;">mRNA 编码的工程化多特异性靶向治疗，<br>用于实体瘤。
                        </div>
                    </div>
                    <div style="display: flex;margin-top: 3.4vh;padding-left: 6vw;">
                        <div style="font-weight: 600;">ACG-402- </div>
                        <div style="display: flex;align-items: center;">mRNA
                            编码的工程化多特异性靶向治疗，<br>用于炎症及纤维化疾病。
                        </div>
                    </div>
                </div>
            </div>
            <div class="module4">
                <img src="../assets/mobile/mobile5.jpg" alt="">
                <div class="module4_text lh17">
                    <div class="fontSize1">团队</div>
                    <div class="lh17" style="margin-top: 1vh;font-size: 2.8vw;">
                        国际化顶尖团队，涵盖LNP-mRNA
                        科学家、资深<br>
                        AI工程师及国际制药高管。
                    </div>
                    <div style="margin-top: 2vh;" class="fontSize1">战略合作</div>
                    <div class="lh17" style="margin-top: 1vh;font-size: 2.8vw;">
                        与顶级 CRO与大学建立战略合作。
                    </div>
                </div>
            </div>
        </div>
        <div class="footer padding">
            <div class="fontSize6 fontWeight">联系我们</div>
            <div class="dfjccaic mt3vh">
                <img style="width: 4vw;margin-right: 2vw;" src="../assets/mobile/EM.png" alt="">
                <div style="font-size: 3vw;">邮箱: info@aicogen.net</div>
            </div>
            <!-- <div class="mt3vh fontSize3 dfjccaic">
                <div class="connectUs">Contact Us！</div>
            </div> -->
            <!-- <div style="color: #ccc;" class="mt3vh fontSize3">©️ 2025 Aicogen Therapeutics. All rights
                reserved<br>Privacy Policy|Terms of Use</div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            module1_text: ''
        }
    },
    methods: {
        changeLanguage() {
            this.$router.push('/cn');
        },
        handleLanguageChange(command) {
            if (command === 'en') {
                this.$router.push('/');
            } else {
                this.$router.push('/cn');
            }
        }
    }
}
</script>

<style scoped>
.connectUs {
    width: 23vw;
    border: 1px solid #000;
    border-radius: 4vw;
    width: auto;
    padding: 1.5vw 1.5vw 1.5vw 2vw;
}

.mt3vh {
    margin-top: 1vh;
}

.fontSize3 {
    font-size: 2vw;
}

.dfjccaic {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
}

.footer {
    margin-top: 2.2vh;
    margin-bottom: 2.2vh;
    text-align: center;
}

.height25 {
    width: 80%;
    height: 34%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
}

.height25:last-child {
    border-bottom: 0px solid #ccc;
}

.module6_text {
    position: absolute;
    top: 0;
    color: #fff;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 7vw;
}

.module5_text {
    position: absolute;
    top: 0;
    color: #000;
    right: 0;
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.fontSize6 {
    font-size: 4.5vw;
}

.module5 {
    position: relative;
    margin-top: 4.2vh;
}

.module4_text {
    position: absolute;
    top: 0;
    color: #fff;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.module4 {
    position: relative;
    margin-top: 4.2vh;
}

.icon {
    height: 3.4vh;
    width: auto;
}

.module3_text {
    margin-top: 2vh;
    color: #000;
    height: 3vh;
}

.module3_bottomBox_one {
    width: 43vw;
    height: 15.1vh;
    border-radius: 3vw;
    background-color: rgb(253, 201, 97);
    padding-top: 2.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.module3_bottomBox_two {
    width: 43vw;
    height: 15.1vh;
    border-radius: 3vw;
    background-color: rgb(250, 124, 156);
    padding-top: 2.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.module3_bottomBox {
    display: flex;
    justify-content: space-between;
    margin-top: 4vw;
}

.module3_topBox_one {
    width: 43vw;
    height: 17.1vh;
    border-radius: 3vw;
    background-color: #74c0fc;
    /* padding-top: 3.5vh; */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.module3_topBox_two {
    width: 43vw;
    height: 17.1vh;
    border-radius: 3vw;
    background-color: #74c0fc;
    /* padding-top: 3.5vh; */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.module3_topBox {
    display: flex;
    justify-content: space-between;
}

.module3 {
    margin-top: 4.2vh;
    color: #fff;
    text-align: center;
}

img {
    width: 100%;
    border-radius: 3vw;
}

.module1_text {
    position: absolute;
    top: 0;
    color: #fff;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.module2 {
    text-align: center;
    margin-top: 4.2vh;
}

.lh17 {
    line-height: 1.7;
}

.fontSize1 {
    font-size: 5.5vw;
}

.fontSize2 {
    font-size: 2.5vw;
}

.fontWeight {
    font-weight: bold;
}

.module1 {
    position: relative;
}

.body {
    margin-top: 4.2vh;
}

.mobile-website-home {
    width: 100vw;
}

.padding {
    padding: 0 5vw 5vw 5vw;
}

.header {
    margin-top: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.changeLanguage {
    width: 100%;
    font-size: 3vw;
    border: 0px solid #000;
    border-radius: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 1.5vw;
    box-sizing: border-box;
}

.el-dropdown {
    width: 100%;
}

.el-dropdown-link {
    cursor: pointer;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.el-dropdown-link:hover {
    color: #000;
}

.el-dropdown-menu__item {
    font-size: 3vw;
    padding: 1vw 2vw;
}

.el-dropdown-menu {
    min-width: 100%;
    width: 100%;
}
</style>