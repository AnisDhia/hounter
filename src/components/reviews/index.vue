<template>
    <section class="px-0" :style="{ 'height': smAndDown ? 'auto' : '100vh' }">
        <v-row justify="center" class="my-10">
            <v-col class="text-center" cols="12" md="4">
                <v-row justify="center" class="mb-2">
                    <div style="width: 32px; height: 1px; background: #F59E0B;">
                    </div>
                </v-row>
                <div
                    style="text-align: center; color: #F59E0B; font-size: 14px; font-family: Lexend; font-weight: 500;">
                    See Our Reviews
                </div>
                <h1 style="text-align: center; color: #1B1C57; font-size: 32px; font-weight: 600;">
                    See What Our User Say About Us
                </h1>
            </v-col>
        </v-row>
        <swiper :modules="modules" :slides-per-view="smAndDown ? 1 : 2" :space-between="50" autoplay loop="true"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(review, index) in reviews" :key="index">
                <ReviewCard :img-file="review.imgFile" :author-img="review.authorImg" :author="review.author"
                    :author-role="review.authorRole" :title="review.title" :review="review.review"
                    :rating="review.rating" />
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import ReviewCard from './ReviewCard.vue';

import { useDisplay } from 'vuetify';
//import { Vue3Marquee } from 'vue3-marquee';

export default {
    name: 'ReviewsSection',
    components: {
        Swiper,
        SwiperSlide,
        ReviewCard,
        //Vue3Marquee
    },
    data: () => ({
        reviews: [
            {
                imgFile: "review1.jpeg",
                authorImg: "avatar1.jpeg",
                author: "Dianne Russell",
                authorRole: "Manager Director",
                title: "Best! I Got The House I Wanted Through Hounter",
                review: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
                rating: 4.6
            },
            {
                imgFile: "review2.jpeg",
                authorImg: "avatar5.jpeg",
                author: "Esther Howard",
                authorRole: "Head of Marketing",
                title: "Through the Hounter, I can get a house for my self",
                review: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
                rating: 4.8
            },
            {
                imgFile: "review3.jpeg",
                authorImg: "avatar6.jpeg",
                author: "Courtney Henry",
                authorRole: "CEO Andarafish",
                title: "My house sold out fast!",
                review: "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
                rating: 4.3
            },
        ],
        swiperOptions: {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
    }),
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        const { smAndDown } = useDisplay();

        return {
            smAndDown,
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y, Pagination, Autoplay],
        };
    }
}
</script>