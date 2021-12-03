<template>
  <div class="main__wrapper">
    <HeroSection />
  </div>
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
  methods: {

  },
  created() {
    this.$store.dispatch('loadProducts')
  }
}
</script>
