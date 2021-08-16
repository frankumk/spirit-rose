<template>
  <div>
    <v-container>
      <v-row>
        <ItemCard name="Rose Bead Necklace" price="$35" />
        <ItemCard name="Rose Pendant" price="$25" />
        <ItemCard name="Herbal Tea" price="$15" />
      </v-row>
    </v-container>

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
