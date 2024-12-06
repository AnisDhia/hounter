<template>
    <v-card flat class="rounded-xl" href="#articles">
        <div class="d-block d-md-flex">
            <v-img :src="require('@/assets/img/' + thumbNail)" :aspect-ratio="1.3" :width="smAndDown ? '100%' : '35%'"
                class="rounded-xl" cover />
            <div class="ml-md-4 mt-2 mt-md-0">
                <v-card-title>
                    <div class="d-flex" style="align-items: center;">
                        <v-avatar class="mr-3">
                            <v-img :src="require('@/assets/img/' + authorImg)" alt="avatar"></v-img>
                        </v-avatar>
                        <p style="color: #0E1735;">
                            {{ author }}
                        </p>
                    </div>
                </v-card-title>
                <v-card-text style="line-height: 1.5;">
                    <h3>{{ title }}</h3>
                </v-card-text>
                <v-card-actions>
                    <v-row justify="start" align="center" class="ml-4 mx-4">
                        <Clock class="mr-3" />
                        <p style="color: #888B97; font-weight: 300; font-size: 14px;">
                            {{ readTime + ' | ' + date }}
                        </p>
                    </v-row>
                </v-card-actions>
            </div>

        </div>
    </v-card>
</template>

<script>
import Clock from '@/components/icons/clock.vue'

import { useDisplay } from 'vuetify';

export default {
    name: 'ArticleCard',
    components: {
        Clock
    },
    props: {
        thumbNail: String,
        authorImg: String,
        author: String,
        title: String,
        date: String,
        readTime: String,
    },
    setup() {
        const { smAndDown } = useDisplay()
        return { smAndDown }
    }
}
</script>

<style scoped>
h3 {
    color: #1B1C57;
    font-weight: 600;
    font-size: 20px;
}
</style>