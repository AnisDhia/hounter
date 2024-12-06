<template>
    <v-footer style="padding: 5% 10%;">
        <v-row justify="center" align="start" style="z-index: 1;">
            <v-col class="" cols="12" md="6">
                <v-img src="@/assets/logo.svg" width="auto" height="50" contain />
                <p class="my-6 font-weight-light">We provide information about properties such
                    <br /> as houses, villas and apartments to help people <br /> find their dream home
                </p>
                <v-row class="my-4">
                    <a class="px-4" href="https://anisdhia.me" target="_blank">
                        <v-img src="@/assets/svg/facebook.svg" height="25" width="auto"></v-img>
                    </a>
                    <a class="px-4" href="https://anisdhia.me" target="_blank">
                        <v-img src="@/assets/svg/x.svg" height="25" width="auto"></v-img>
                    </a>
                    <a class="px-4" href="https://anisdhia.me" target="_blank">
                        <v-img src="@/assets/svg/insta.svg" height="25" width="auto"></v-img>
                    </a>
                </v-row>
            </v-col>
            <v-col class="d-block d-md-flex pa-0 ma-0" cols="12" md="6">
                <v-col>
                    <h3>Property</h3>
                    <p>House</p>
                    <p>Villa</p>
                    <p>Apartment</p>
                </v-col>
                <v-col>
                    <h3>Article</h3>
                    <p>New Article</p>
                    <p>Popular Article</p>
                    <p>Most Read</p>
                    <p>Tips & Tricks</p>
                </v-col>
                <v-col cols="12" md="5">
                    <h3>Contact</h3>
                    <p>2464 Royal Ln, Mesa, New Jersy 45463</p>
                    <p>(671) 555-0110</p>
                    <p>info@hounter.com</p>
                </v-col>
            </v-col>
        </v-row>
        <div class="blur">
            <svg width="414" height="507" viewBox="0 0 414 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_4_15)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
                        fill="#82BBFF" />
                </g>
                <defs>
                    <filter id="filter0_f_4_15" x="0" y="-1.14441e-05" width="734" height="678" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_15" />
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="blur2">
            <svg width="660" height="442" viewBox="0 0 660 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_4_16)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
                        fill="#B9FF82" />
                </g>
                <defs>
                    <filter id="filter0_f_4_16" x="0" y="-1.14441e-05" width="734" height="678" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_16" />
                    </filter>
                </defs>
            </svg>

        </div>
    </v-footer>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';
export default {
    name: 'FooterSection',
    setup() {
        const { smAndDown } = useDisplay();
        return { smAndDown };
    }
};
</script>

<style scoped> p {
     font-size: 14px;
     font-weight: 300;
     color: #888B97;
 }

 h3 {
     font-size: 18px;
     font-weight: 600;
     color: #0E1735;
 }

 p {
     margin-top: 14px;
 }

 .blur {
     position: absolute;
     bottom: -10%;
     right: 0;
     /* width: 100%; */
     /* height: 100%; */
     z-index: 0;
 }

 .blur2 {
     position: absolute;
     bottom: -10%;
     right: 0;
     /* width: 100%; */
     /* height: 100%; */
     z-index: 0;
 }
</style>
