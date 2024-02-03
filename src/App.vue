<template>
  <v-app>
    <NavBar :color="color" :flat="flat"/>
    <v-main class="pt-0">
      <HeroSection />
      <FeaturedSection />
      <HeroSection />
      <TestSection />
    </v-main>
    <v-scale-transition>
      <v-btn fab v-show="fab" v-scroll="onScroll" fixed bottom right color="secondary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-footer>yo</v-footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturedSection from './components/FeaturedSection.vue'
import TestSection from './components/TestSection.vue'

export default {

  name: 'App',

  components: {
    HeroSection,
    NavBar,
    FeaturedSection,
    TestSection,
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
        this.color = "secondary";
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
      this.$vuetify.goTo(0);
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
}
</style>