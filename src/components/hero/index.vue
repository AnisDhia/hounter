<template>
  <section id="hero" :style="{'margin-top': smAndDown ? '6%' : '0', 'height': smAndDown ? 'auto' : '100vh'}">
    <v-row style="height: 100%;" class="content">
      <v-col cols="12" md="6" align-self="center" class="pl-0 pl-md-16 mt-16 mt-md-0">
        <v-container class="text-hero ml-lg-16" :style="{ 'width': smAndDown ? '90%' : '75%' }">
          <h1 class="font-weight-bold hero-title">Find The Place To <br class="d-none d-md-flex" /> Live <span
              class="hero-title-outline">Your
              Dreams</span> <br /> Easily Here</h1>
          <p class="subtitle-1 hero-subtitle my-8 font-weight-light">Everything you need about finding your place to live
            will be <br /> here, where it will be easier for you</p>

          <v-text-field label="Search for the location you want!" variant="outlined" rounded>
            <template v-slot:append-inner>
              <v-btn size="large" variant="flat" rounded="xl" class="text-none" color="#10B981"
                style="color: white;">Search<v-icon>mdi-chevron-right</v-icon></v-btn>
            </template>
            <template v-slot:prepend-inner>
              <Location />
              <!-- <v-icon icon="fa:fas fa-lock" color="#F59E0B">mdi-map-marker</v-icon> -->
            </template>
          </v-text-field>

          <p class="font-weight-light mt-4">Our Partnership</p>

          <v-row class="d-block d-md-flex mt-4 w-auto" justify="start" align="center" dense>
            <v-col class="d-flex ">
              <v-col>
                <v-img src="@/assets/img/traveloka.png" class="my-1 my-md-0" max-height="20" max-width="" />
              </v-col>
              <v-col>
                <v-img src="@/assets/img/tiketcom.png" class="my-1 my-md-0" max-height="25" max-width="" />
              </v-col>
            </v-col>
            <v-col class="d-flex">
              <v-col>
                <v-img src="@/assets/img/airbnb.png" class="my-1 my-md-0" max-height="28" max-width="" />
              </v-col>
              <v-col>
                <v-img src="@/assets/img/tripadvisor.png" class="my-1 my-md-0" max-height="18" max-width="" />
              </v-col>
            </v-col>
            <!-- <v-img src="@/assets/img/tiketcom.png" max-height="25" max-width="" />
            <v-img src="@/assets/img/airbnb.png" max-height="28" max-width="" />
            <v-img src="@/assets/img/tripadvisor.png" max-height="18" max-width="" /> -->
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" style="height: 100%;" class="d-none d-md-flex">
        <v-img src="@/assets/img/hero.png" class="img-hero" cover>
        </v-img>
      </v-col>
    </v-row>
    <div class="blur1">
      <svg :width="smAndDown ? auto : 441" :height="smAndDown ? auto : 481" viewBox="0 0 441 481" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3" filter="url(#filter0_f_4_18)">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M298.209 155.001C287.173 189.669 261.914 216.19 239.037 244.462C219.326 268.821 198.32 290.535 173.292 309.373C145.414 330.356 119.122 359.558 84.2732 360.946C49.3115 362.339 19.9507 336.407 -8.93251 316.634C-36.0888 298.044 -55.4251 272.427 -78.8344 249.286C-110.874 217.612 -166.167 199.642 -172.434 155.001C-178.493 111.845 -134.511 78.3497 -107.647 44.0607C-83.8375 13.6712 -57.2616 -13.2453 -24.5624 -33.7378C9.01465 -54.7805 45.0816 -81.9806 84.2732 -76.2154C123.401 -70.4596 140.038 -20.5008 176.088 -4.2213C218.116 14.7576 280.755 -11.4202 308.836 25.1917C335.703 60.222 311.604 112.919 298.209 155.001Z"
            fill="#82F7FF" />
        </g>
        <defs>
          <filter id="filter0_f_4_18" x="-293" y="-197" width="734" height="678" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_18" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="blur2">
      <svg :width="smAndDown ? auto :688" :height="smAndDown ? auto :396" viewBox="0 0 688 396" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3" filter="url(#filter0_f_4_19)">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M545.209 70.0007C534.173 104.669 508.914 131.19 486.037 159.462C466.326 183.821 445.32 205.535 420.292 224.373C392.414 245.356 366.122 274.558 331.273 275.946C296.311 277.339 266.951 251.407 238.067 231.634C210.911 213.044 191.575 187.427 168.166 164.286C136.126 132.612 80.8334 114.642 74.5661 70.0007C68.5073 26.8452 112.489 -6.65035 139.353 -40.9393C163.162 -71.3288 189.738 -98.2453 222.438 -118.738C256.015 -139.781 292.082 -166.981 331.273 -161.215C370.401 -155.46 387.038 -105.501 423.088 -89.2213C465.116 -70.2424 527.755 -96.4202 555.836 -59.8083C582.703 -24.778 558.604 27.919 545.209 70.0007Z"
            fill="#82FFD2" />
        </g>
        <defs>
          <filter id="filter0_f_4_19" x="-46" y="-282" width="734" height="678" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_19" />
          </filter>
        </defs>
      </svg>

    </div>
  </section>
</template>

<script>
import Location from '@/components/icons/location.vue'

// import { computed } from 'vue'
import { useDisplay } from 'vuetify';

export default {
  name: 'HeroSection',
  components: {
    Location
  },
  data: () => ({
    partnerLogos: [
      { src: '@/assets/img/airbnb.png' },
      { src: '@/assets/img/tripadvisor.png' },
      { src: '@/assets/img/tiketcom.png' },
      { src: '@/assets/img/traveloka.png' },
    ],
  }),
  setup() {
    const { smAndDown } = useDisplay();
    const { name } = useDisplay();
    console.log(name + name.value)
    return { smAndDown };
  },
}
</script>

<style scoped>
.img-hero {
  border-bottom-left-radius: 15%;
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #1B1C57;
}

.hero-title-outline {
  font-family: "Lexend deca", sans-serif;
  font-weight: 700 !important;
  color: #1B1C57;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #1B1C57;
  -webkit-text-stroke-width: 1px;
}

p {
  color: #626687;
}

.blur1 {
  position: absolute;
  top: -5%;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(180deg, #82F7FF 0%, rgba(130, 247, 255, 0) 100%);*/
  z-index: 0;
}

.blur2 {
  position: absolute;
  top: -5%;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(180deg, #82FFD2 0%, rgba(130, 255, 210, 0) 100%);*/
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
}
</style>