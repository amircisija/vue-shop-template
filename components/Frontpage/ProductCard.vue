<template>
  <v-card
    class="mx-auto mb-5 elevation-5"
  >
    <v-img
      height="250"
      :src="product.image"
    ></v-img>
    <v-card-title class="product__title">
      {{ product.title }}</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="product.rating.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ product.rating.rate }} ({{ product.rating.count }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ product.category }}
      </div>

      <div>{{ product.description | truncate(100) }}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>{{ product.price }} €</v-card-title>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        nuxt
        :to="`/products/${product.id}`"
      >
        View Product
      </v-btn>
      <NuxtLink :to="`/products/${product.id}`">View Product</NuxtLink>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  methods: {

  },
/*   props: ['product'], */
  filters: {
        truncate: function(data,num){
            const descriptionString = data.split("").slice(0, num).join("") + '...';
            return descriptionString;
        }
  }
}
</script>
<style lang="scss">
  .product__title {
    min-height: 110px;
    font-size: 16px;
    line-height: 22px;
  }
.product__title.v-card__title {
    align-items: flex-start;
}
</style>
