<template>
    <section>
        <v-row class="h-100 content" justify="center" align="center">
            <v-col class="d-flex justify-center w-50" cols="12" md="6">
                <v-container style=" width: auto;">
                    <div class="mb-4" style="width: 134px; height: 18px; position: relative">
                        <div
                            style="left: 0px; top: 0px; position: absolute; color: #F59E0B; font-size: 14px; font-weight: 500;">
                            Ready to Sell!</div>
                        <div
                            style="width: 32px; height: 1px; left: -42px; top: 8px; position: absolute; background: #F59E0B">
                        </div>
                    </div>
                    <h1>Let's Tour And See Our House!</h1>
                    <p class="subtitle-1 hero-subtitle my-6 font-weight-light">Houses recommended by our partners that have
                        been <br /> curated to become the home of your dreams</p>
                    <h3>House Detail</h3>
                    <v-row class="mt-4">
                        <v-col>
                            <div class="mb-6">
                                <Bed class="mr-4" />
                                <span>4 Bedrooms</span>
                            </div>
                            <div class="my-6">
                                <Car class="mr-4" />
                                <span>1 Carport</span>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="mb-6">
                                <Bath class="mr-4" />
                                <span>2 Bathrooms</span>
                            </div>
                            <div class="my-6">
                                <Floors class="mr-4" />
                                <span>2 Floors</span>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="w-auto mt-14 px-4">
                        <v-row justify="center" align="center">
                            <v-avatar class="ml-1" size="large">
                                <v-img src="@/assets/img/avatar1.jpeg" alt="avatar"></v-img>
                            </v-avatar>
                            <v-col>
                                <p style="color: #0E1735;">
                                    Dianne Russell
                                </p>
                                <p style="color: #888B97; font-weight: 300; font-size: 14px;">
                                    Manager Director
                                </p>
                            </v-col>
                            <v-btn height="48px" size="large" variant="flat" rounded="xl" class="text-none" color="#10B981"
                                style="color: white;">
                                <template v-slot:prepend>
                                    <Phone class="mx-3" />
                                </template>
                                Contact Now
                            </v-btn>
                        </v-row>
                    </v-row>
                </v-container>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" md="6">
                <v-container class="w-auto">
                    <v-img class="rounded" src="@/assets/img/readytosell.png" height="416" width="488" cover
                        style="overflow: visible;">
                        <v-img class="rounded" src="@/assets/img/readytosell2.jpeg" height="168" width="296" cover
                            style="position: absolute; bottom: -10%; left: -8%; overflow: visible;">
                            <v-img class="rounded" src="@/assets/img/readytosell3.jpeg" height="80" width="96" cover
                                style="position: absolute; bottom: 0; right: -35%"></v-img>
                            <v-img class="rounded" src="@/assets/img/readytosell4.jpeg" height="80" width="96" cover
                                style="position: absolute; bottom: 0; right: -70%"></v-img></v-img>

                    </v-img>
                </v-container>
            </v-col>
        </v-row>
        <div class="blur">
            <svg width="520" height="678" viewBox="0 0 520 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_4_11)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
                        fill="#FF9882" />
                </g>
                <defs>
                    <filter id="filter0_f_4_11" x="0" y="0" width="734" height="678" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_11" />
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="blur-yellow">
            <svg width="461" height="678" viewBox="0 0 461 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_4_13)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
                        fill="#FFFA82" />
                </g>
                <defs>
                    <filter id="filter0_f_4_13" x="0" y="0" width="734" height="678" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_13" />
                    </filter>
                </defs>
            </svg>
        </div>
    </section>
</template>

<script>
import Bath from '@/components/icons/bath.vue';
import Bed from '@/components/icons/bed.vue';
import Floors from '@/components/icons/floors.vue';
import Car from '@/components/icons/car.vue';
import Phone from '@/components/icons/phone.vue';

export default {
    name: 'ReadyToSellSection',
    components: {
        Bath,
        Bed,
        Floors,
        Car,
        Phone
    },
    mounted () {
      console.log(this.$vuetify.display.mobile)
    },
}
</script>

<style scoped>
section {
    position: relative;
    overflow: hidden;
    padding: 0 16px;
}

.box {
    width: 300px;
    height: 300px;
    background-color: #F3F4F6;
    border-radius: 10px;
}

h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1B1C57;
}

p {
    font-size: 16px;
    color: #626687;
}

h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #545581;
}

span {
    font-size: 16px;
    color: #626687;
}

.blur {
    position: absolute;
    top: 0;
    right: 0;
    /* width: 100%; */
    /* height: 100%; */
    z-index: 0;
}

.blur-yellow {
    position: absolute;
    top: 10%;
    right: 0;
    /* width: 100%; */
    /* height: 100%; */
    z-index: 0;
}

.content {
    position: relative;
    z-index: 1;
}
</style>
