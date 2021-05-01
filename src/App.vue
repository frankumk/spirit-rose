<template>
  <v-app>
    <!-- <div id="app">
      <v-toolbar app color="#CC5500">
        <div id="nav">
          <router-link to="/">Home</router-link>        
          <router-link to="/roses">Rose Medicine</router-link>       
          <router-link to="/rituals">Ritual Creation</router-link>       
          <router-link to="/yonisteam">Yoni Steaming</router-link>      
          <router-link to="/herbs">More Herbs</router-link>      
          <router-link to="/wombhealing">Womb Healing</router-link>
        </div>
      </v-toolbar>
    <router-view/> -->
<div id="nav">
  <v-toolbar color="#CC5500" dark>
    <!-- <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon> -->
    <v-tabs v-model="tab"> 
      <v-tab left to="/">Spirit Rose</v-tab>
      <v-spacer></v-spacer>
      <v-tab right grow to="/roses">Rose Medicine</v-tab>
      <v-tab right grow to="/rituals">Ritual Cretion</v-tab>
      <v-tab right grow to="/yonisteam">Yoni Steam</v-tab>
      <v-tab right grow to="/herbs">Herbs</v-tab>
      <v-tab right grow to="/wombhealing">Womb Healing</v-tab>
    </v-tabs>
    
  </v-toolbar>
  </div>
    
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer absolute>
      <v-col
        class="text-center"
      >
      footer
      </v-col>
    </v-footer>
  </div>
  </v-app>
</template>

<script>
export default{
  data: () => ({
    drawer: false,
    tab: null
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
