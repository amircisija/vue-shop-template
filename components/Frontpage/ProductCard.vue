<template>
  <v-card
    class="mx-auto my-12"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>Cafe Badilico</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>Tonight's availability</v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem magnam, ad totam dolores quibusdam, omnis soluta voluptates obcaecati sequi nihil nesciunt vitae molestias consequatur nostrum quae enim, at optio.
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
