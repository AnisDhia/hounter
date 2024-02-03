<template>
    <section id="featured">
        <v-container>
            <v-toolbar>
                <v-toolbar-title class="text-h5 font-weight-bold">
                    Featured Houses
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text color="primary">
                    View All
                </v-btn>
            </v-toolbar>
            <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
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
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import HouseCard from './HouseCard.vue';

export default {
    name: 'FeaturedSection',
    components: {
        Swiper,
        SwiperSlide,
        HouseCard,
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
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
}
</script>