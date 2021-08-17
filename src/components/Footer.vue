<template>
  <v-footer color="#CC5500">
    <v-col class="text-center">
      <v-btn
        v-for="icon in icons"
        :key="icon.id"
        class="mx-4"
        icon
        :to="icon.address"
        :href="icon.address"
      >
        <v-icon>{{ icon.icon }}</v-icon>
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      { id: 0, icon: 'mdi-calendar', address: "/appointments" },
      { id: 1, icon: 'mdi-instagram', address: "https://www.instagram.com/spiritrose_womb.lovve/" },
      { id: 2, icon: 'mdi-email', address: "/contact" },
    ]
  }),

}
</script>

<style></style>
