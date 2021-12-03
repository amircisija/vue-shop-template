<template>
  <section class="page__section">
    <v-container class="ac__container">
      <v-row>
        <v-col>
          <h2>Product list</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3" v-for="(product, index) in products" :key="index">
            <FrontpageProductCard />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.getters.getProducts
    }
  },
  created() {
    this.$store.dispatch('loadProducts')
  }
}
</script>
