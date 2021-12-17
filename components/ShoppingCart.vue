<template>
  <article class="shopping_cart">
     <h3>Shopping Cart</h3>
    <ul>
      <li v-for="product in shoppingCart" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </article>
</template>
<script>

export default {
  data() {
    return {
      product: {
      }
    }
  },
  methods: {

  },
  computed: {
    shoppingCart () {
      return this.$store.getters.getShoppingCart
    }
  },
  created() {
    this.$store.getters.getShoppingCart;
  }
}
</script>
