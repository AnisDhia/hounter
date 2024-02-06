<template>
    <section id="articles">
        <v-row justify="center" class="mb-10">
            <v-col class="text-center" cols="12" md="4">
                <v-row justify="center" class="mb-2">
                    <div style="width: 32px; height: 1px; background: #F59E0B;">
                    </div>
                </v-row>
                <div style="text-align: center; color: #F59E0B; font-size: 14px; font-family: Lexend; font-weight: 500;">
                    See Tips And Tricks From Our Partnership
                </div>
                <h1 style="text-align: center; color: #1B1C57; font-size: 32px; font-weight: 600;">
                    Find Out More About Selling And Buying Homes
                </h1>
                <!-- <v-row justify="center" class="mt-4"> -->
                <v-btn flat rounded color="#10B981" height="48" class="text-none mt-4">
                    More Artikel
                </v-btn>
                <!-- </v-row> -->
            </v-col>
        </v-row>
        <v-row class="pl-md-16">
            <v-col class="pl-md-16">
                <v-container v-for="article in articles" :key="article.title" cols="12" md="6" lg="4">
                    <ArticleCard :thumbNail="article.thumbNail" :authorImg="article.authorImg" :author="article.author"
                        :title="article.title" :date="article.date" :readTime="article.readTime" />
                </v-container>
            </v-col>
            <v-col cols="6 d-none d-lg-flex">
                <v-container>
                    <v-card flat class="rounded-xl" width="560" href="#articles">
                        <v-img src="@/assets/img/article.jpeg" height="280" class="rounded-xl mb-6" cover />
                        <div class="d-flex" style="align-items: center;">
                            <v-avatar class="mr-4">
                                <v-img src="@/assets/img/avatar9.jpeg" alt="avatar"></v-img>
                            </v-avatar>
                            <p style="color: #0E1735;">
                                Cameron Williamson
                            </p>
                        </div>
                        <v-card-title class="pl-0">
                            <h3 style="color: #1B1C57; font-weight: 600; font-size: 20px;">
                                12 Things To Know Before Buying A House
                            </h3>
                        </v-card-title>
                        <v-card-text class="pl-0" style="color: #888B97; font-weight: 400; font-size: 14">
                            Want to buy a house but are unsure about what we should know, here I will try to explain what we
                            should know and check when we want to buy a house
                        </v-card-text>
                        <v-card-actions>
                            <v-row justify="start" align="center">
                                <Clock class="mr-3 ml-1" />
                                <p style="color: #888B97; font-weight: 300; font-size: 14px;">
                                    8 min read | 25 Apr 2021
                                </p>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import Clock from '../icons/clock.vue'

export default {
    name: 'TipsAndTricksSection',
    components: {
        ArticleCard,
        Clock
    },
    data: () => ({
        articles: [
            {
                thumbNail: 'article1.jpeg',
                authorImg: 'avatar1.jpeg',
                author: 'Dianne Russel',
                title: 'The Things We Need To Check When We want To Buy A House',
                date: '25 Apr 2021',
                readTime: '4 min read'
            },
            {
                thumbNail: 'article2.jpeg',
                authorImg: 'avatar7.jpeg',
                author: 'Courtney Henry',
                title: '7 Ways To Distinguish The Quality Of The House We Want To Buy',
                date: '24 Apr 2021',
                readTime: '6 min read'
            },
            {
                thumbNail: 'article3.jpeg',
                authorImg: 'avatar8.jpeg',
                author: 'Darlene Robertson',
                title: 'The best way to know the quality of the house we want to buy',
                date: '23 Apr 2021',
                readTime: '2 min read'
            }
        ]
    }),
}
</script>