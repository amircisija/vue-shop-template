<template>
  <section>
    <h1></h1>
    <h2>
      {{ product }}
    </h2>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        product: {}
      }
    },
    async fetch() {
      //this.product = await this.$axios.$get('https://fakestoreapi.com/products/1');
      this.product = await this.$axios.$get(`https://fakestoreapi.com/products/${this.$route.params.product}`)
    },
    created() {
      console.log(this.$route.params.product); // path is /users
    }


  }

</script>
