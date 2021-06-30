<template>
  <div>
    <!-- <v-layout row wrap>
    <v-card width="25%" class="mx-auto mt-8 text-center" raised v-for="item in inventory" :key="item.id">
      <v-card-title class="justify-center">{{ item.item }}</v-card-title>
      <v-card-subtitle>$ {{ item.price }}</v-card-subtitle>
      <v-card-text>{{item.description}}</v-card-text>
      <v-btn href="https://www.google.com">Add to Cart</v-btn>
      
    </v-card>
    </v-layout>
    <div class="about">

    </div> -->

    <v-container fluid>
      <v-row>
        <ItemCard
          v-for="item in inventory"
          :key="item.id"
          :name="item.item"
          :price="item.price"
          :description="item.description"
        />
      </v-row>
    </v-container>

  </div>
</template>
<script>
import { mapState } from'vuex'
import ItemCard from '../components/ItemCard.vue'

export default {
  created(){
    console.log(`getting`)
    this.$store.dispatch('getInventory')
  },
  computed: {
    ...mapState({
      inventory: state => state.inventory
    })
  },
  components: {
      ItemCard
  }
}
</script>

<style>

</style>
