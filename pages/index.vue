<template>
  <div class="main__wrapper">
    <HeroSection />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: {}
    }
  },
  methods: {
    async getProducts() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          this.products = response.data;
        } catch(error) {
          console.log(error);
        }
    }
  },
  created() {
    this.getProducts();
  }
}
</script>
