<template>
  <v-app>
<div id="nav">
  <!-- <v-toolbar color="#CC5500" dark>
    <v-tabs v-model="tab"> 
      <v-tab left to="/">Spirit Rose</v-tab>
      <v-spacer></v-spacer>
      <v-tab right grow to="/roses">Rose Medicine</v-tab>
      <v-tab right grow to="/rituals">Ritual Creation</v-tab>
      <v-tab right grow to="/yonisteam">Yoni Steam</v-tab>
      <v-tab right grow to="/herbs">Herbs</v-tab>
      <v-tab right grow to="/wombhealing">Womb Healing</v-tab>
    </v-tabs>

    <v-icon>
      mdi-cart
    </v-icon>
    
  </v-toolbar> -->

    <v-app-bar
      absolute
      color="#CC5500"
      dark
      height="64px"
    >
      <v-menu
        bottom
        right
        class="hidden-sm-and-up"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="header in headers"
            :key="header"
            :to="header.path"
          >
            <v-list-item-title>{{ header.name }}</v-list-item-title>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-title class="text-no-wrap">Spirit Rose</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title class="hidden-xs-only">
          <v-tab exact v-for="header in headers" :key="header.id" :to="header.path">{{ header.name }}</v-tab>
        </v-tabs>

        <v-spacer></v-spacer>


        <v-btn
          icon
          to="/cart"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>

    </v-app-bar>
  </div>


    <v-main>
      <router-view class="mt-16 pt-16"></router-view>
    </v-main>

    <v-footer color="#CC5500">
      <v-col
        class="text-center"
      >
      <v-btn
        v-for="icon in icons"
        :key="icon.id"
        class="mx-4"
        icon
        :to="icon.address"
      >
      <v-icon>{{ icon.icon }}</v-icon>
      </v-btn>
      </v-col>
    </v-footer>
  </div>
  </v-app>
</template>

<script>
export default{
  data: () => ({
    drawer: false,
    tab: null,
    headers: [
      { id: 0, name: "Home", path: "/" },
      { id: 1, name: "Medicine", path: "/herbs" },
      { id: 2, name: "Healing", path: "/wombhealing" },
      { id: 3, name: "Rituals", path: "/rituals" },
      { id: 4, name: "Sale", path: "/roses" }
    ],
    icons: [
      { id: 0, icon: 'mdi-calendar', address: "/appointments" },
      { id: 1, icon: 'mdi-instagram', address: "/instagram" },
      { id: 2, icon: 'mdi-email', address: "/contact" },
      { id: 3, icon: 'mdi-map', address: "/contact" }
    ]
  })
}
</script>
<style>
  #nav{
    font-family: 'Bad Script', cursive;
    font-size: 3rem;
    text-align: center;
    color: white;
  }
  a{
    color: inherit;
  }
  #nav a {
  font-weight: bold;
  margin: 1rem;
}

#nav a.router-link-exact-active {
    color: #2c3e50;
}


</style>
