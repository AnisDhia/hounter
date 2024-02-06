<template>
    <div style="position: relative;">
        <v-img :src="require('@/assets/img/' + imgFile)" class="rounded" aspect-ratio="16/9" cover
            :style="{ width: smAndDown ? auto : '740px', height: smAndDown ? '50vh' : '400px' }"
            style="opacity: 0.70; background: linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%); border-radius: 8px;">

        </v-img>
        <v-row justify="center" align="center" style="position: relative; top: -120px;">
            <v-card flat class="rounded-xl pa-4 w-75" style=" box-shadow: 0px 9px 32px rgba(89.37, 91.53, 218.88, 0.05);">
                <v-card-title style="color: #0E1735; font-weight: 600;">
                    {{ title }}
                </v-card-title>
                <v-card-text style="color: #888B97; font-weight: 300;">
                    {{ review }}
                </v-card-text>
                <v-card-actions class="pl-4">
                    <v-row justify="center" align="center">
                        <v-avatar class="ml-1">
                            <v-img :src="require('@/assets/img/' + authorImg)" alt="avatar"></v-img>
                        </v-avatar>
                        <v-col cols="8">
                            <p style="color: #0E1735;">
                                {{ author }}
                            </p>
                            <p style="color: #888B97; font-weight: 300; font-size: 14px;">
                                {{ authorRole }}
                            </p>
                        </v-col>
                        <v-spacer />
                        <v-col>
                            <v-row align="center">
                                <v-icon color="#F59E0B">mdi-star</v-icon>
                                <p style="color: #0E1735; font-weight: 500; font-size: 16px;">{{ rating }}</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-row>
    </div>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: "HouseCard",
    props: {
        imgFile: String,
        authorImg: String,
        author: String,
        authorRole: String,
        title: String,
        review: String,
        rating: Number
    },
    data: () => ({

    }),
    setup() {
        const { smAndDown } = useDisplay();
        return {
            smAndDown
        }
    },
    methods: {

    }
}
</script>