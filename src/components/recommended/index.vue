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
                <v-btn height="48px" size="large" variant="tonal" rounded="xl" class="text-none mx-3 px-6" color="#10B981">
                    <template v-slot:prepend>
                        <House />
                    </template>
                    House
                </v-btn>
                <v-btn height="48px" size="large" variant="outlined" rounded="xl" class="text-none mx-3 px-6"
                    color="#888B97">
                    <template v-slot:prepend>
                        <Villa />
                    </template>
                    Villa
                </v-btn>
                <v-btn height="48px" size="large" variant="outlined" rounded="xl" class="text-none mx-3 px-6"
                    color="#888B97">
                    <template v-slot:prepend>
                        <Apartment />
                    </template>
                    Apartment
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-chevron-left" flat class="mr-4" color="#E0E3EB"></v-btn>
                <v-btn icon="mdi-chevron-right" flat color="#10B981"></v-btn>
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
            <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation loop="true" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide v-for="(house, index) in featuredHouses" :key="index">
                    <HouseCard :img-source="house.imgSource" :title="house.title" :price="house.price"
                        :avatar-title="house.avatarTitle" :avatar-subtitle="house.avatarSubtitle"
                        :avatar-source="house.avatarSource" :tag="house.tag" />
                </swiper-slide>
            </swiper>
        </v-container>
    </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

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
        featuredHouses: [
            {
                imgSource: "featured.jpeg",
                title: "Roselands House",
                price: "35.000.000",
                avatarSource: "avatar1.jpeg",
                avatarTitle: "Dianne Russell",
                avatarSubtitle: "Manchester, Kentucky",
                tag: "Popular"
            },
            {
                imgSource: "featured2.jpeg",
                title: "Woodlandside",
                price: "20.000.000",
                avatarSource: "avatar2.jpeg",
                avatarTitle: "Robert Fox",
                avatarSubtitle: "Dr. San Jose, South Dakota",
                tag: "New House"
            },
            {
                imgSource: "featured3.jpeg",
                title: "The Old Lighthouse",
                price: "44.000.000",
                avatarSource: "avatar3.jpeg",
                avatarTitle: "Ronald Richards",
                avatarSubtitle: "Santa Ana, Illinois",
                tag: "Best Deals"
            },
            {
                imgSource: "featured4.jpeg",
                title: "Cosmo's House",
                price: "22.000.000",
                avatarSource: "avatar4.jpeg",
                avatarTitle: "Jenny Wilson",
                avatarSubtitle: "Preston Rd. Inglewood, Maine 98380",
                tag: "Popular"
            },
        ]
    }),
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y],
        };
    },
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