<template>
  <div id="nav">
    <v-app-bar absolute color="#CC5500" dark height="64px">
      <v-menu bottom right class="hidden-sm-and-up">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
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
          <v-tab
            exact
            v-for="header in headers"
            :key="header.id"
            :to="header.path"
            >{{ header.name }}</v-tab
          >
        </v-tabs>

        <v-spacer></v-spacer>

        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <h1>Hellllooooo Cart</h1>
      <v-list>
        <v-list-item>Pooches</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>

  export default{
    name:  'Navigation',
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
    }),
  }
</script>

