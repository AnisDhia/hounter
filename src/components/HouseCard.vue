<template>
    <v-card flat class="mx-auto" max-width="344">
        <v-img src="@/assets/img/featured.jpeg" height="400px" cover class="rounded-xl"></v-img>

        <v-card-title>
            {{ title }}
        </v-card-title>

        <!-- <v-card-subtitle>
            {{ price }}
            <v-chip color="orange" label>{{ tag }}</v-chip>
        </v-card-subtitle> -->

        <v-card-actions>
            <v-avatar>
                <v-img :src="avatarSource" alt="avatar"></v-img>
            </v-avatar>
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
            // tag: "Popular" | "New" | "Trending" | "Best Deals",
            avatarSource: String,
            avatarTitle: String,
            avatarSubtitle: String,
        },
        data: () => ({
            
        }),
    }
</script>