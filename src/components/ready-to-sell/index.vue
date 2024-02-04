<template>
    <section>
        <v-row class="h-100" justify="center" align="center">
            <v-col class="d-flex justify-center w-50" cols="12" md="6">
                <v-container style=" width: auto;">
                    <div class="mb-4" style="width: 134px; height: 18px; position: relative">
                        <div
                            style="left: 0px; top: 0px; position: absolute; color: #F59E0B; font-size: 14px; font-weight: 500;">
                            Ready to Sell!</div>
                        <div
                            style="width: 32px; height: 1px; left: -42px; top: 8px; position: absolute; background: #F59E0B">
                        </div>
                    </div>
                    <h1>Let's Tour And See Our House!</h1>
                    <p class="subtitle-1 hero-subtitle my-6 font-weight-light">Houses recommended by our partners that have
                        been <br /> curated to become the home of your dreams</p>
                    <h3>House Detail</h3>
                    <v-row>
                        <v-col>
                            <div class="my-6">
                                <Bed class="mr-4" />
                                <span>3 Bedrooms</span>
                            </div>
                            <div class="my-6">
                                <Car class="mr-4" />
                                <span>3 Carport</span>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="my-6">
                                <Bath class="mr-4" />
                                <span>3 Bedrooms</span>
                            </div>
                            <div class="my-6">
                                <Floors class="mr-4" />
                                <span>3 Carport</span>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="w-auto mt-14 px-4">
                        <v-row justify="center" align="center">
                            <v-avatar class="ml-1" size="large">
                                <v-img src="@/assets/img/avatar1.jpeg" alt="avatar"></v-img>
                            </v-avatar>
                            <v-col>
                                <p style="color: #0E1735;">
                                    Dianne Russell
                                </p>
                                <p style="color: #888B97; font-weight: 300; font-size: 14px;">
                                    Manager Director
                                </p>
                            </v-col>
                            <v-btn height="48px" size="large" variant="flat" rounded="xl" class="text-none" color="#10B981"
                                style="color: white;">
                                <template v-slot:prepend>
                                    <Phone class="mx-3" />
                                </template>
                                Contact Now
                            </v-btn>
                        </v-row>
                    </v-row>
                </v-container>
            </v-col>
            <v-col class="d-flex justify-center bg-blue" cols="12" md="6">
                <div class="box"></div>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import Bath from '@/components/icons/bath.vue';
import Bed from '@/components/icons/bed.vue';
import Floors from '@/components/icons/floors.vue';
import Car from '@/components/icons/car.vue';
import Phone from '@/components/icons/phone.vue';

export default {
    name: 'ReadyToSellSection',
    components: {
        Bath,
        Bed,
        Floors,
        Car,
        Phone
    }
}
</script>

<style scoped>
.box {
    width: 300px;
    height: 300px;
    background-color: #F3F4F6;
    border-radius: 10px;
}

h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1B1C57;
}

p {
    font-size: 16px;
    color: #626687;
}

h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #545581;
}

span {
    font-size: 16px;
    color: #626687;
}
</style>
