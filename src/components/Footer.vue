<template>
    <v-footer>
        <v-row class="h-100" justify="center" align="center">
            <v-col class="d-flex justify-center w-50" cols="12" md="6">
                <v-container style="width: auto;">
                    <v-img src="@/assets/logo.svg" width="auto" height="50" contain />
                    <p class="my-6 font-weight-light">We provide information about properties such
                        <br /> as houses, villas and apartments to help people <br /> find their dream home
                    </p>
                    <v-row class="my-4">
                        <a class="px-4" href="https://anisdhia.me" target="_blank">
                            <v-img src="@/assets/svg/facebook.svg" height="25" width="auto"></v-img>
                        </a>
                        <a class="px-4" href="https://anisdhia.me" target="_blank">
                            <v-img src="@/assets/svg/x.svg" height="25" width="auto"></v-img>
                        </a>
                        <a class="px-4" href="https://anisdhia.me" target="_blank">
                            <v-img src="@/assets/svg/insta.svg" height="25" width="auto"></v-img>
                        </a>
                    </v-row>
                </v-container>
            </v-col>
            <v-col class="d-flex" cols="12" md="6">
                <v-col>
                    <h3>Property</h3>
                    <p>House</p>
                    <p>Villa</p>
                    <p>Apartment</p>
                </v-col>
                <v-col>
                    <h3>Article</h3>
                    <p>New Article</p>
                    <p>Popular Article</p>
                    <p>Most Read</p>
                    <p>Tips & Tricks</p>
                </v-col>
                <v-col cols="5">
                    <h3>Contact</h3>
                    <p>2464 Royal Ln, Mesa, New Jersy 45463</p>
                    <p>(671) 555-0110</p>
                    <p>info@hounter.com</p>
                </v-col>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterSection',
};
</script>

<style scoped> p {
     font-size: 14px;
     font-weight: 300;
     color: #888B97;
 }

 h3 {
     font-size: 18px;
     font-weight: 600;
     color: #0E1735;
 }

 p {
    margin-top: 14px;
 }
</style>
