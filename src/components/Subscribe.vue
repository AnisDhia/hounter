<template>
    <section class="bg-yellow">
        <v-row class="h-100" align="center" align-content="center">

            <v-img src="@/assets/img/subscribe.png" height="316" />
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
}
</style>