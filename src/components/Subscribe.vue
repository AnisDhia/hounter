<template>
    <section class="" style=" padding-top: 6%;" :style="{ 'height': smAndDown ? 'auto' : '75vh'} ">
        <v-row align="center" justify="center" class="fill-height" :class="{ 'background': !smAndDown }">
            <v-col cols="10" md="4" class="text-center">
                <h1 style="color: #0E1735; font-weight: 600; text-align: center; line-height: 1.5;" class="mb-4">
                    Subscribe For More Info And Update From Hounter</h1>
                <v-text-field label="Your email here" :variant="smAndDown ? 'outlined' : 'solo'" flat rounded
                    prepend-inner-icon="mdi-email">
                    <template v-slot:append-inner>
                        <v-btn size="large" variant="flat" rounded="xl" class="text-none d-md-flex d-none" color="#10B981"
                            style="color: white;">Subscribe Now</v-btn>
                    </template>
                    <template v-slot:prepend-inner>
                        <Location />
                        <!-- <v-icon icon="fa:fas fa-lock" color="#F59E0B">mdi-map-marker</v-icon> -->
                    </template>
                </v-text-field>
                <v-btn size="large" variant="flat" rounded="xl" class="text-none d-md-none" color="#10B981"
                    style="color: white;">Subscribe Now</v-btn>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'TestSection',
    setup() {
        const { smAndDown } = useDisplay();
        return { smAndDown };
    }
}
</script>

<style scoped>
.card {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}

.hero {
    border-bottom-left-radius: 15%;
    /* width: 50vw; */
    object-fit: contain;
    /* height: 50%; */
}

.problem-col {
    padding: 0;
    margin: 0;
    height: 100vh;
}

.card-left {
    position: absolute;
    bottom: 0;
    /* left: 0; */
    right: 0;
}

.background {
    max-height: 316px;
    background-image: url(@/assets/img/subscribe.png);
    background-size: contain;
    background-position: center;
}
</style>