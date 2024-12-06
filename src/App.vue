<template>
  <!-- <SpeedInsights /> -->
  <v-app>
    <NavBar :color="color" :flat="flat" />
    <v-main class="pa-0 ma-0">
      <HeroSection />
      <RecommendedSection />
      <ReadyToSellSection />
      <ReviewsSection />
      <TipsAndTricksSection class="h-auto mt-10" />
      <Subscribe />
    </v-main>
    <v-scale-transition>
      <v-btn icon="mdi-chevron-up" v-show="fab" v-scroll="onScroll" color="#10B981" class="mb-4" @click="toTop"
        style="position: fixed; bottom: 0; right: 5%; z-index: 9999;">
      </v-btn>
    </v-scale-transition>
    <Footer />
  </v-app>
</template>

<script>
// import { SpeedInsights } from "@vercel/speed-insights/vue"

import NavBar from './components/NavBar.vue'
import HeroSection from './components/hero/index.vue'
import RecommendedSection from './components/recommended/index.vue'
import ReadyToSellSection from './components/ready-to-sell/index.vue'
import ReviewsSection from './components/reviews/index.vue'
import TipsAndTricksSection from './components/tips-and-tricks/index.vue'
import Subscribe from './components/Subscribe.vue'
import Footer from './components/Footer.vue'

export default {

  name: 'App',

  components: {
    HeroSection,
    NavBar,
    RecommendedSection,
    ReadyToSellSection,
    ReviewsSection,
    TipsAndTricksSection,
    Subscribe,
    Footer,
    // SpeedInsights
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.scrollY || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "#10B981";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.scrollY || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // this.$vuetify.goTo(0);
    },
  }
};
</script>

<style>
* {
  font-family: "Lexend", sans-serif;
}

section {
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  overflow: visible;
  padding: 5% 10%;
}
</style>