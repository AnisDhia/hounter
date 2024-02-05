<template>
    <section id="recommended">
        <v-container>
            <div class="mb-4" style="height: 18px; position: relative">
                <div style="left: 0px; top: 0px; position: absolute; color: #F59E0B; font-size: 14px; font-weight: 500;">
                    Our Recommendation</div>
                <div style="width: 32px; height: 1px; left: -42px; top: 8px; position: absolute; background: #F59E0B">
                </div>
            </div>
            <v-row class="mt-4 mb-8">
                <h1 class="pl-2">Featured Houses</h1>
                <v-spacer>
                </v-spacer>
                <v-btn height="48px" size="large" :variant="selected == 0 ? 'tonal' : 'outlined'" rounded="xl"
                    class="text-none mx-3 px-6" :color="selected == 0 ? '#10B981' : '#888B97'" @click="filterHouses">
                    <template v-slot:prepend>
                        <House :color="selected == 0 ? '#10B981' : '#888B97'" />
                    </template>
                    House
                </v-btn>
                <v-btn height="48px" size="large" :variant="selected == 1 ? 'tonal' : 'outlined'" rounded="xl"
                    class="text-none mx-3 px-6" :color="selected == 1 ? '#10B981' : '#888B97'" @click="filerVillas">
                    <template v-slot:prepend>
                        <Villa :color="selected == 1 ? '#10B981' : '#888B97'" />
                    </template>
                    Villa
                </v-btn>
                <v-btn height="48px" size="large" :variant="selected == 2 ? 'tonal' : 'outlined'" rounded="xl"
                    class="text-none mx-3 px-6" :color="selected == 2 ? '#10B981' : '#888B97'" @click="filterApartments">
                    <template v-slot:prepend>
                        <Apartment :color="selected == 2 ? '#10B981' : '#888B97'" />
                    </template>
                    Apartment
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="swiperPrevSlide" icon="mdi-chevron-left" flat class="mr-4" color="#E0E3EB"></v-btn>
                <v-btn @click="swiperNextSlide" icon="mdi-chevron-right" flat color="#10B981"></v-btn>
            </v-row>
            <!-- <v-toolbar>
                <v-toolbar-title class="text-h5 font-weight-bold">
                    <h1>Featured Houses</h1>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text color="primary">
                    View All
                </v-btn>
            </v-toolbar> -->
            <swiper ref="swiperRef" :modules="modules" :slides-per-view="3" :space-between="50" navigation autoplay loop="true"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="(house, index) in filteredList" :key="index">
                    <HouseCard :img-source="house.imgSource" :title="house.title" :price="house.price"
                        :avatar-title="house.avatarTitle" :avatar-subtitle="house.avatarSubtitle"
                        :avatar-source="house.avatarSource" :tag="house.tag" />
                </swiper-slide>
            </swiper>
        </v-container>
    </section>
</template>

<script>
import { ref } from 'vue';

// import Swiper core and required modules
import { Navigation, A11y, Autoplay, Controller } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/a11y';

import HouseCard from './HouseCard.vue';

//? Icons
import House from '@/components/icons/house.vue';
import Villa from '@/components/icons/villa.vue';
import Apartment from '@/components/icons/apartment.vue';

export default {
    name: 'RecommendedSection',
    components: {
        Swiper,
        SwiperSlide,
        HouseCard,
        House,
        Villa,
        Apartment
    },
    data: () => ({
        selected: -1,
        filteredList: [],
        featured: [
            {
                imgSource: "featured.jpeg",
                title: "Roselands House",
                price: "35.000.000",
                avatarSource: "avatar1.jpeg",
                avatarTitle: "Dianne Russell",
                avatarSubtitle: "Manchester, Kentucky",
                tag: "Popular",
                type: "house"
            },
            {
                imgSource: "featured2.jpeg",
                title: "Woodlandside",
                price: "20.000.000",
                avatarSource: "avatar2.jpeg",
                avatarTitle: "Robert Fox",
                avatarSubtitle: "Dr. San Jose, South Dakota",
                tag: "New House",
                type: "house"
            },
            {
                imgSource: "featured3.jpeg",
                title: "The Old Lighthouse",
                price: "44.000.000",
                avatarSource: "avatar3.jpeg",
                avatarTitle: "Ronald Richards",
                avatarSubtitle: "Santa Ana, Illinois",
                tag: "Best Deals",
                type: "house"
            },
            {
                imgSource: "featured4.jpeg",
                title: "Cosmo's House",
                price: "22.000.000",
                avatarSource: "avatar4.jpeg",
                avatarTitle: "Jenny Wilson",
                avatarSubtitle: "Preston Rd. Inglewood, Maine 98380",
                tag: "Popular",
                type: "house"
            },
            {
                imgSource: "featured5.jpg",
                title: "Villa in White",
                price: "35.000.000",
                avatarSource: "avatar1.jpeg",
                avatarTitle: "Dianne Russell",
                avatarSubtitle: "Manchester, Kentucky",
                tag: "Popular",
                type: "villa"
            },
            {
                imgSource: "featured6.jpg",
                title: "Villa in the Woods",
                price: "20.000.000",
                avatarSource: "avatar7.jpeg",
                avatarTitle: "Robert Fox",
                avatarSubtitle: "Dr. San Jose, South Dakota",
                tag: "New House",
                type: "villa"
            },
            {
                imgSource: "featured7.jpg",
                title: "Villa in the City",
                price: "44.000.000",
                avatarSource: "avatar6.jpeg",
                avatarTitle: "Ronald Richards",
                avatarSubtitle: "Santa Ana, Illinois",
                tag: "Best Deals",
                type: "villa"
            },
            {
                imgSource: "featured8.jpg",
                title: "Apartment in the City",
                price: "35.000.000",
                avatarSource: "avatar1.jpeg",
                avatarTitle: "Dianne Russell",
                avatarSubtitle: "Manchester, Kentucky",
                tag: "Popular",
                type: "apartment"
            },
            {
                imgSource: "featured9.jpg",
                title: "Apartment in the Woods",
                price: "20.000.000",
                avatarSource: "avatar7.jpeg",
                avatarTitle: "Robert Fox",
                avatarSubtitle: "Dr. San Jose, South Dakota",
                tag: "New House",
                type: "apartment"
            },
            {
                imgSource: "featured10.jpg",
                title: "Apartment in the City",
                price: "44.000.000",
                avatarSource: "avatar6.jpeg",
                avatarTitle: "Ronald Richards",
                avatarSubtitle: "Santa Ana, Illinois",
                tag: "Best Deals",
                type: "apartment"
            },
            {
                imgSource: "featured11.jpg",
                title: "Apartment in the City",
                price: "35.000.000",
                avatarSource: "avatar1.jpeg",
                avatarTitle: "Dianne Russell",
                avatarSubtitle: "Manchester, Kentucky",
                tag: "Popular",
                type: "apartment"
            },
        ],
    }),
    created() {
        this.filteredList = this.featured;
    },
    setup() {
        const swiperInstance = ref();

        const onSwiper = (swiper) => {
            console.log(swiper);
            swiperInstance.value = swiper;
        };
        const onSlideChange = () => {
            console.log('slide change');
        };


        const swiperNextSlide = () => {
            swiperInstance.value.slideNext();
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev();
        };

        const swiper = useSwiper();
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y, Autoplay, Controller],
            swiper,
            swiperNextSlide,
            swiperPrevSlide
        };
    },
    methods: {
        filterHouses() {
            this.filteredList = this.featured.filter((house) => house.type === "house");
            this.selected = 0;
        },
        filerVillas() {
            this.filteredList = this.featured.filter((house) => house.type === "villa");
            this.selected = 1;
        },
        filterApartments() {
            this.filteredList = this.featured.filter((house) => house.type === "apartment");
            this.selected = 2;
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1B1C57;
}
</style>