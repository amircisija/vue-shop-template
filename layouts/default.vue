<template>
  <v-app app>
    <AppNavigation />
    <v-main>
        <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>
<style lang="scss">
  .ac__container {
    width: 1300px;
    max-width: 100%;
  }
  h2 {
    font-size: 3em;
  }
  .page__section {
    padding: 50px 0;
  }
</style>
