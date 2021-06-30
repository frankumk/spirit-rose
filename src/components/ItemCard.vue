<template>
  <v-col md="3" sm="6">
      <v-card
        height="100%"
        hover
        tile
        raised
        target="_blank"
        class="mx-auto mt-8 text-center"
      >
        <!-- <v-img :src="img" :alt="name" height="200px" position="left">
        </v-img> -->
        <v-card-title>
          {{name}}
        </v-card-title>
        <v-card-subtitle>
          {{description}}
        </v-card-subtitle>
        <v-card-subtitle>
          {{price}}
        </v-card-subtitle>
        <v-btn href="https://www.google.com">Add to Cart</v-btn>
      </v-card>
  </v-col>
</template>
<script>
  export default{
    name:  'ItemCard',
    props: [
      'name',
      'description',
      'price'
    ]

  }

</script>