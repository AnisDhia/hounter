<template>
    <section>
        <v-row justify="center" class="my-10">
            <div class="Title" style="width: 463px; height: 79px; position: relative">
                <div class="WhatOurUserSayAboutUs"
                    style="left: 0px; top: 39px; position: absolute; text-align: center; color: #1B1C57; font-size: 32px; font-family: Lexend; font-weight: 600; text-transform: capitalize; word-wrap: break-word">
                    What Our User Say About Us</div>
                <div class="Group10" style="width: 107px; height: 27px; left: 178px; top: 0px; position: absolute">
                    <div class="SeeOurReview"
                        style="left: 0px; top: 9px; position: absolute; text-align: center; color: #F59E0B; font-size: 14px; font-family: Lexend; font-weight: 500; text-transform: capitalize; word-wrap: break-word">
                        See Our Review</div>
                    <div class="Rectangle14"
                        style="width: 32px; height: 1px; left: 34px; top: 0px; position: absolute; background: #F59E0B"></div>
                </div>
            </div>
        </v-row>
        <swiper :modules="modules" :slides-per-view="2" :space-between="50" navigation loop="true" @swiper="onSwiper"
            @slideChange="onSlideChange" style="overflow: visible">
            <swiper-slide v-for="(review, index) in reviews" :key="index">
                <ReviewCard :img-file="review.imgFile" :author-img="review.authorImg"
                    :author="review.author" :author-role="review.authorRole" :title="review.title"
                    :review="review.review" :rating="review.rating" />
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y, Pagination } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ReviewCard from './ReviewCard.vue';

export default {
    name: 'ReviewsSection',
    components: {
        Swiper,
        SwiperSlide,
        ReviewCard
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
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y],
        };
    }
}
</script>