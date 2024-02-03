<template>
  <section id="hero">
    <v-row style="height: 100%;">
      <v-col cols="6" align-self="center" class="pl-16">
        <v-container class="text-hero ml-16 container">
          <h1 class="font-weight-bold hero-title">Find The Place To <br /> Live <span class="hero-title-outline">Your
              Dreams</span> <br /> Easily Here</h1>
          <p class="subtitle-1 hero-subtitle my-10 font-weight-light">Everything you need about finding your place to live
            will be <br /> here, where it will be easier for you</p>
          <v-text-field label="Search for the location you want!" variant="outlined" rounded>
            <template v-slot:append-inner>
              <v-btn size="large" variant="flat" rounded="xl" class="text-none mx-0" color="#10B981"
                style="color: white;">Search<v-icon>mdi-chevron-right</v-icon></v-btn>
            </template>
            <template v-slot:prepend-inner>
              <v-icon icon="fa:fas fa-lock" color="#F59E0B">mdi-map-marker</v-icon>
            </template>
          </v-text-field>
          <p class="font-weight-light">Our Partnership</p>
          <v-row class="my-4 w-auto" justify="start" align="center" dense>
            <v-img src="@/assets/img/traveloka.png" height="20" />
            <v-img src="@/assets/img/tiketcom.png" height="25" />
            <v-img src="@/assets/img/airbnb.png" height="28" />
            <v-img src="@/assets/img/tripadvisor.png" height="18" />
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" style="height: 100%;">
        <v-img src="../assets/img/hero.png" class="img-hero" cover />
      </v-col>
    </v-row>

  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data: () => ({
    partnerLogos: [
      { src: '@/assets/img/airbnb.png' },
      { src: '@/assets/img/tripadvisor.png' },
      { src: '@/assets/img/tiketcom.png' },
      { src: '@/assets/img/traveloka.png' },
    ],
  }),
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

.container {
  width: 500px;
}
</style>