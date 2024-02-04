<template>
    <v-navigation-drawer v-model="drawer" app temporary class="elevation-0">
        <v-container>
            <v-img src="@/assets/logo.svg" max-height="40" contain />
            <v-divider class="my-4" />
            <v-list dense>
                <v-list-item v-for="(item, i) in items" :key="i" link :to="item.link">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-container>
    </v-navigation-drawer>


    <v-app-bar app :color="color" :flat="flat" class="px-4" :class="{ expand: flat, 'margin-top': flat }">
        <v-toolbar-title>
            <v-img src="@/assets/logo.svg" max-height="40" contain />
        </v-toolbar-title>
        <v-spacer />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
        <v-row v-else justify="center" align="center">
            <v-btn border variant="tonal" size="small" density="default" rounded="xl" class="mr-4 text-none white-border"
                color="#fff">About Us</v-btn>
            <v-btn border variant="tonal" size="small" density="default" rounded="xl" class="mr-4 text-none white-border"
                color="#fff">Article</v-btn>
            <v-btn border variant="tonal" size="small" density="default" rounded="xl" class="text-none white-border"
                color="#fff" append-icon="mdi-chevron-down">Property</v-btn>
            <!--TODO: PROPERTY Menu Button <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind:=props border variant="tonal" size="small" density="default" rounded="xl"
                        class="text-none white-border" color="#fff" append-icon="mdi-chevron-down">Property</v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" :value="index" variant="tonal">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
            <v-btn size="large" variant="flat" rounded="xl" class="ml-12 text-none sign-up" color="#D1FAE5"
                style="color: #047857;">Sign Up!</v-btn>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        drawer: null,
        isXs: false,
        items: [
            { title: 'About Us', icon: 'mdi-information', link: '#' },
            { title: 'Article', icon: 'mdi-newspaper', link: '#' },
            { title: 'Property', icon: 'mdi-building', link: '#' },]
    }),
    props: {
        color: String,
        flat: Boolean,
    },
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 850;
        },
    },

    watch: {
        isXs(value) {
            if (!value) {
                if (this.drawer) {
                    this.drawer = false;
                }
            }
        },
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
}
</script>

<style scoped>
.white-border {
    border-color: #fff !important;
    /* color: #fff !important; */

}

.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}

.margin-top {
    margin-top: 10px;
}

.sign-up {
    font-weight: 400;
}
</style>