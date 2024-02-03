<template>
    <v-card flat class="" max-width="344">
        <v-img :src="require('@/assets/img/' + imgSource)" height="400px" cover class="rounded-xl">
            <v-chip class="ma-4" style="position: absolute; bottom: 0;" :color="chipBackground(tag)" variant="flat">
                <v-icon left :color="chipColor(tag)">{{ tagIcon(tag) }}</v-icon>
                <span :style="{ color: chipColor(tag) }">{{ tag }}</span>
            </v-chip>
        </v-img>

        <v-card-title style="color: #0E1735; font-size: 24px" class="pl-0 mt-2">
            {{ title }}
        </v-card-title>

        <v-card-subtitle style="color: #3C4563; font-size: 20px;" class="pl-0">
            $ {{ price }}
        </v-card-subtitle>

        <v-card-actions class="mt-4">
            <v-row justify="center" align="center">
                <v-avatar>
                    <v-img :src="require('../assets/img/' + avatarSource)" alt="avatar"></v-img>
                </v-avatar>
                <v-col>
                    <p style="color: #0E1735;">
                        {{ avatarTitle }}
                    </p>
                    <p style="color: #888B97; font-weight: 300;">
                        {{ avatarSubtitle }}
                    </p>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "HouseCard",
    props: {
        imgSource: String,
        title: String,
        price: String,
        tag: String,
        avatarSource: String,
        avatarTitle: String,
        avatarSubtitle: String,
    },
    data: () => ({

    }),
    methods: {
        chipColor(tag) {
            if (tag === "Popular") {
                return "#EF4444";
            } else if (tag === "New House") {
                return "#1D4ED8";
            } else if (tag === "Best Deals") {
                return "#047857";
            }
        },
        chipBackground(tag) {
            if (tag === "Popular") {
                return "#FEE2E2";
            } else if (tag === "New House") {
                return "#DBEAFE";
            } else if (tag === "Best Deals") {
                return "#D1FAE5";
            }
        },
        tagIcon(tag) {
            if (tag === "Popular") {
                return "mdi-fire";
            } else if (tag === "New House") {
                return "mdi-home";
            } else if (tag === "Best Deals") {
                return "mdi-tag";
            }
        }
    }
}
</script>

<style scoped>
* {
    font-family: "Lexend", sans-serif;
}
</style>