<template>
    <div class="mobile-website-home">
        <div style="padding-bottom: 0 !important;" class="header padding">
            <!-- <div class="logo">
                <img style="width: 37vw;" src="../assets/icon/topLogo.png" alt="Logo">
            </div> -->
            <div :style="{ fontSize: 3 / (magnification / 16) + 'vw' }" class="changeLanguage">
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
            <div style="flex-direction: column;" class="module1_text fontSize1">
                <img style="width: 70%;border-radius: 0;" src="../assets/icon/topLogo.png" alt="">
                <div style="color: rgb(12,62,118);font-size: 5vw;margin-top: 10px;">凯戎生物</div>
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
                <div :style="{ fontSize: 3.5 / (magnification / 16) + 'vw' }"
                    style="font-size: 3.5vw;text-align-last: left;" class="module2_title fontWeight">关于 Aicogen</div>
                <div :style="{ fontSize: 2.8 / (magnification / 16) + 'vw' }"
                    style="text-align: left;font-size: 2.8vw;"><br>Aicogen
                    Limited是一家处于临床前阶段生物创新科技企业。致力于开发前沿RNA技术，通过对免疫细胞进行工程化重编程，以攻克自身免疫性疾病、肿瘤及其他严重威胁生命的疾病。</div>
                <div :style="{ fontSize: 2.8 / (magnification / 16) + 'vw' }"
                    style="text-align: left;font-size: 2.8vw;">
                    <br>公司已发现多种具有差异化特征的分子，有望成为自身免疫和肿瘤适应症的"同类首创"(first-in-class)和"同类最佳" (best-in-class)疗法。
                </div>
            </div>
            <div class="module3 fontSize2">
                <div class="module3_topBox">
                    <div :style="{ height: (magnification / 16) > 1.2 ? '19.5vh' : '17.1vh' }"
                        class="module3_topBox_one">
                        <img class="icon" src="../assets/icon/iconTeam.png" alt="">
                        <div :style="{ fontSize: 3 / (magnification / 16) + 'vw' }" class="module3_text">全球化研发布局</div>
                    </div>
                    <div :style="{ height: (magnification / 16) > 1.2 ? '19.5vh' : '17.1vh' }"
                        class="module3_topBox_two">
                        <img class="icon" src="../assets/icon/iconpipeline.png" alt="">
                        <div :style="{ fontSize: 3 / (magnification / 16) + 'vw' }" class="module3_text">
                            拥有多项有潜力成为<br>同类首创新药（FIC）与
                            <br>同类最优（BIC）的研发项目
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
                    <div style="flex-direction: column;" class="height25"><span
                            :style="{ fontSize: 3 / (magnification / 16) + 'vw' }"
                            class="fontWeight">aBody</span>蛋白质序列优化平台
                    </div>
                    <div style="flex-direction: column;" class="height25"><span
                            :style="{ fontSize: 3 / (magnification / 16) + 'vw' }"
                            class="fontWeight">xMRNA</span>mRNA序列优化平台</div>
                    <div style="flex-direction: column;" class="height25"><span
                            :style="{ fontSize: 3 / (magnification / 16) + 'vw' }"
                            class="fontWeight">xLNP</span>靶向器官和细胞的体内递送平台</div>
                    <!-- <div style="flex-direction: column;" class="height25"><span style="font-size: 3vw;"
                            class="fontWeight">aBody</span>Protein
                        optimization</div> -->
                </div>
            </div>
            <div class="module4">
                <img src="../assets/headPage/backgroundpipeline.jpg" alt="">
                <div style="font-size: 2.8vw;" class="module6_text fontSize2 lh17">
                    <div style="margin-top: 7vw;">
                        <img style="width: 4vw;border-radius: 0;" src="../assets/icon/iconpipeline2.png" alt="">
                        <span class="fontWeight" style="margin-left: 2vw;">管线</span>
                    </div>
                    <div :style="{ fontSize: 2.8 / (magnification / 16) + 'vw' }" style="height: 95%;overflow-y: auto;">
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.2%;text-size-adjust: 100% !important;">
                                ACG-102</div>
                            <div style="width: 80%;">体内mRNA编码的B 细胞靶向疗法，用于自身免疫性疾病。</div>
                        </div>
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.3%;">ACG-201</div>
                            <div style="width: 80%;">mRNA体内mRNA编码的多特异性靶向疗法，用于血液系统恶性肿瘤。</div>
                        </div>
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.3%;">ACG-301</div>
                            <div style="width: 80%;">体内mRNA编码的多特异性靶向疗法，用于治疗实体瘤。</div>
                        </div>
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.3%;">ACG-401</div>
                            <div style="width: 80%;">mRNA体内mRNA编码的多特异性靶向疗法，用于治疗炎症及纤维化疾病。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module4">
                <img src="../assets/mobile/mobile5.jpg" alt="">
                <div :style="{ fontSize: 2.5 / (magnification / 16) + 'vw' }" class="module4_text lh17">
                    <div style="margin-top: 8%;" :style="{ fontSize: 5.5 / (magnification / 16) + 'vw' }"
                        class="fontSize1">团队</div>
                    <div class="lh17" style="margin-top: 1vh;font-size: 2.8vw;width: 75%;">
                        国际化顶尖的科研与管理团队成员包括LNP-mRNA
                        领域的资深专家、经验丰富的AI工程师，以及来国际知名大药企的高管。
                    </div>
                    <div style="margin-top: 2vh;" :style="{ fontSize: 5.5 / (magnification / 16) + 'vw' }"
                        class="fontSize1">战略合作</div>
                    <div class="lh17" style="margin-top: 1vh;font-size: 2.8vw;width: 75%;">
                        与全球领先的CRO机构以及知名高校建立了深度战略合作伙伴关系。
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
            module1_text: '',
            magnification: 16,
        }
    },
    mounted() {
        setTimeout(() => {
            this.magnification = this.isWeChatFontEnlargedAndroid();
        }, 100);
    },
    methods: {
        isWeChatFontEnlargedAndroid() {
            // 步骤1：创建一个隐藏的测试元素（用于检测字体渲染尺寸）
            const testElement = document.createElement('div');
            testElement.style.position = 'absolute';
            testElement.style.visibility = 'hidden';
            testElement.style.fontSize = '16px'; // 固定原始字体大小
            testElement.style.width = 'auto';
            testElement.style.height = 'auto';
            testElement.innerText = '测试文本';
            document.body.appendChild(testElement);

            // 步骤2：获取实际渲染的字体大小（微信放大后会大于16px）
            const computedFontSize = parseFloat(window.getComputedStyle(testElement).fontSize);
            document.body.removeChild(testElement); // 移除测试元素

            // 步骤3：判断渲染字体是否大于原始值（阈值可根据需求调整）
            return computedFontSize; // 留少量误差空间，避免精度问题
        },
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
    padding-top: 5%;
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
    padding-top: 5%;
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