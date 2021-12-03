<template>
    <section class="hero__section fill-height">
        <v-container class="fill-height ac__container">
            <v-row align="center">
                <v-col cols="12" sm="6" class="my-auto">
                    <h1>New Spring Clothing</h1>
                    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus soluta dolorum facilis a.</p>
                </v-col>
            </v-row>
        </v-container>

    </section>
</template>
<style lang="scss">
.hero__section {
    background: #fafafa;
    background: url('assets/img/img-1.jpg')50% 50% no-repeat;
    background-size: cover;
    height: 80vh;
    h1 {
      font-size: 4em;
      font-weight: 800;
      color: #fff;
    }
    .lead {
      font-size: 2em;
      color: #fff;
    }
}
</style>
