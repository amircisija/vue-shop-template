<template>
  <section class="single__product">
    <v-container class="ac__container">
      <v-row>
        <v-col>
          <h4>Home / {{ product.category }} / {{ product.title }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-img :src="product.image" class="img-fluid"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12">
              <v-card class="single__product--detail-wrapper">
                <v-card-text>
                  <h1 class="single__product--title">{{ product.title }}</h1>
                  <p class="single__product--description">{{ product.description }}</p>

                  <h3 class="single__product--price-tag">{{ product.price }} €</h3>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-row>

                <v-col cols="3">
                  <v-btn @click="decreaseQuantity()">-</v-btn>
                </v-col>
                <v-col cols="3">
                  <v-text-field v-model="product.inventory" label="Regular"></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn @click="increaseQuantity()">+</v-btn>
                </v-col>
              </v-row>



            </v-col>
            <v-col cols="12">
              <v-btn depressed color="error" @click="addToCart(product)">
                Add to Cart
              </v-btn>
            </v-col>
            <v-col>
              <ShoppingCart />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-container>


  </section>
</template>
<script>
  export default {
    data() {
      return {
        product: {
          inventory: 1
        }
      }
    },
    async fetch() {
      this.product = await this.$axios.$get(`https://fakestoreapi.com/products/${this.$route.params.product}`)
    },
    methods: {
      increaseQuantity() {
        this.product.inventory++
      },
      decreaseQuantity() {
        this.product.inventory--
      },
      addToCart(product) {
        console.log(product);
        this.$store.dispatch('addToCart', {
          product,
          inventory: this.product.inventory
        });

      }
    },
    created() {
      console.log(this.$route.params.product); // path is /users
    }


  }

</script>
<style lang="scss">
  .single__product {
    padding-top: 100px;
  }

  .single__product--title {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(240, 240, 240);
  }

  .single__product--detail-wrapper {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
  }

</style>
