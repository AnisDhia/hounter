<template>
    <section class="bg-yellow">
        <v-row align="center" align-content="center">
            <v-col cols="6" class="bg-blue py-0 my-0 problem-col" align-self="center">
                <v-card width="200px" height="100px" class="card-left">
                    <v-card-title>
                        Test Section
                    </v-card-title>
                    <v-card-text>
                        testing testing testing
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" class="bg-red py-0 problem-col">
                <v-img src="../assets/img/hero.png" cover class="hero my-0 mx-0 py-0 px-0">
                    <v-card class="card">
                        <v-card-title>
                            <h1>Test</h1>
                            <h2>yooo</h2>
                        </v-card-title>
                    </v-card>
                </v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: 'TestSection',
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
}</style>