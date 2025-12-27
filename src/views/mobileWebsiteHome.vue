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
            <div class="module1_text fontSize1">
                <img style="width: 70%;border-radius: 0;" src="../assets/icon/topLogo.png" alt="">
            </div>
        </div>
        <div class="body padding">
            <div class="module1">
                <img src="../assets/mobile/mobile1.jpg" alt="">
                <div style="flex-direction: column;font-size: 5vw;"
                    :style="{ fontSize: 5 / (magnification / 16) + 'vw' }" class="module1_text">
                    NEXT-GENERATION<br>IMMUNOTHERAPIES<br>
                    <span style="margin-top: 4vw;font-size: 3.3vw;"
                        :style="{ fontSize: 3.3 / (magnification / 16) + 'vw' }">Restoring and resetting the
                        balance of the<br>human immune system</span>
                </div>
            </div>
            <div class="module2 fontSize2 lh17">
                <div style="font-size: 3.5vw;text-align-last: left;" class="module2_title fontWeight">About Aicogen
                </div>
                <div style="text-align: left;font-size: 2.9vw;"><br>Aicogen Limited is a preclinical-stage immunology
                    company dedicated to developing cutting-edge RNA technologies that program immune cells to combat
                    autoimmune diseases, cancer, and other life-threatening conditions.<br><br>The company has
                    discovered multiple molecules with differentiated characteristics, positioned to become
                    "first-in-class" and "best-in-class" therapies for autoimmune and oncology indications.
                </div>
            </div>
            <div class="module3 fontSize2">
                <div class="module3_topBox">
                    <div class="module3_topBox_one">
                        <img class="icon" src="../assets/icon/iconTeam.png" alt="">
                        <div class="module3_text">Global Team</div>
                    </div>
                    <div class="module3_topBox_two">
                        <img class="icon" src="../assets/icon/iconpipeline.png" alt="">
                        <div class="module3_text">Multiple FIC/BIC<br>Pipelines
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
                    <div :style="{ fontSize: 4.5 / (magnification / 16) + 'vw' }" class="fontSize6">TECHNOLOGY PLATFORMS
                    </div>
                </div>
            </div>
            <div class="module5">
                <img src="../assets/mobile/mobile4.jpg" alt="">
                <div class="module5_text" :style="{ fontSize: 2.2 / (magnification / 16) + 'vw' }">
                    <div style="flex-direction: column;" class="height25"><span
                            :style="{ fontSize: 3 / (magnification / 16) + 'vw' }"
                            class="fontWeight">aBody</span>protein
                        optimization
                    </div>
                    <div style="flex-direction: column;" class="height25"><span
                            :style="{ fontSize: 3 / (magnification / 16) + 'vw' }" class="fontWeight">xMRNA</span>mRNA
                        optimization</div>
                    <div style="flex-direction: column;" class="height25"><span
                            :style="{ fontSize: 3 / (magnification / 16) + 'vw' }" class="fontWeight">xLNP</span>cell
                        specific invivo delivery</div>
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
                        <span class="fontWeight" style="margin-left: 2vw;">Pipelines</span>
                    </div>
                    <div :style="{ fontSize: 2.8 / (magnification / 16) + 'vw' }" style="height: 95%;overflow-y: auto;">
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.2%;text-size-adjust: 100% !important;">
                                ACG-102</div>
                            <div style="width: 80%;">Targeted mRNA immune therapy for autoimmune diseases.</div>
                        </div>
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.3%;">ACG-201</div>
                            <div style="width: 80%;">Multi-targeted mRNA immune therapy for hematologic cancers.</div>
                        </div>
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.3%;">ACG-301</div>
                            <div style="width: 80%;">Multi-specific mRNA immune therapeutics for solid tumors.</div>
                        </div>
                        <div style="display: flex;margin-top: 2vh;">
                            <div :style="{ width: (magnification / 16) > 1.1 ? '22%' : '18%' }"
                                style="font-weight: 600;width: 18%;padding-top: 0.3%;">ACG-401</div>
                            <div style="width: 80%;">Multi-specific mRNA immune therapeutics for inflammatory and
                                fibrotic diseases.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module4">
                <img src="../assets/mobile/mobile5.jpg" alt="">
                <div :style="{ fontSize: 2.5 / (magnification / 16) + 'vw' }" class="module4_text fontSize2 lh17">
                    <div :style="{ fontSize: 5.5 / (magnification / 16) + 'vw' }" class="fontSize1">TEAM</div>
                    <div class="lh17">
                        International top-tier scientific & executive team<br>with global LNP-mRNA expertis, senior
                        Al<br>
                        engineers, and experienced pharma leaders.
                    </div>
                    <div style="margin-top: 2vh;" :style="{ fontSize: 5.5 / (magnification / 16) + 'vw' }"
                        class="fontSize1">PARTNERS</div>
                    <div class="lh17">
                        Strategic collaborations with leading CROs and<br>universities.
                    </div>
                </div>
            </div>
        </div>
        <div class="footer padding">
            <div class="fontSize6 fontWeight">Contact Us</div>
            <div class="dfjccaic mt3vh">
                <img style="width: 4vw;margin-right: 2vw;" src="../assets/mobile/EM.png" alt="">
                <div style="font-size: 3vw;">Email: info@aicogen.net</div>
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
            //创建一个隐藏的测试元素（用于检测字体渲染尺寸）
            const testElement = document.createElement('div');
            testElement.style.position = 'absolute';
            testElement.style.visibility = 'hidden';
            testElement.style.fontSize = '16px'; // 固定原始字体大小
            testElement.style.width = 'auto';
            testElement.style.height = 'auto';
            testElement.innerText = '测试文本';
            document.body.appendChild(testElement);
            //获取实际渲染的字体大小（微信放大后会大于16px）
            const computedFontSize = parseFloat(window.getComputedStyle(testElement).fontSize);
            document.body.removeChild(testElement); // 移除测试元素
            //判断渲染字体是否大于原始值（阈值可根据需求调整）
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
    width: 94%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 5%;
    overflow-y: auto;
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