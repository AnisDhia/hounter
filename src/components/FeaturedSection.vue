<template>
    <section>
        <v-container>
            <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>
                    <HouseCard img-source="@/assets/img/featured.jpeg" title="Roselands House"
                        avatar-source="../assets/img/avatar1" />
                </swiper-slide>
                <swiper-slide><v-img src="@/assets/img/featured.jpeg" /></swiper-slide>
                <swiper-slide><v-img src="@/assets/img/featured2.jpeg" /></swiper-slide>
                <swiper-slide><v-img src="@/assets/img/featured3.jpeg" /></swiper-slide>
                <swiper-slide><v-img src="@/assets/img/featured4.jpeg" /></swiper-slide>
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