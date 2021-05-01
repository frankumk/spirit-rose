<template>
  <v-container fluid>
    <!-- <div id="introduction">
    <p>
      Welcome to Spirit Rose! In this space we Honor Ourselves 
      as the Radiant Magical Rose that we are, we See Ourselves 
      Worthy of Connection and we Blossom into Being our Spirit, 
      our Essence.     
    </p>

    <p>
      Hi! I am Alicia. My service on Earth is to be a Guide. A 
      Guide back to your Source. I am here to Facilitate and 
      Support our Connection back to Nature, our True Essence. I 
      specialize in Ritual Creation, Yoni Steaming, Herbal Medicine 
      and Womb Healing. 
    </p>

    <p>
      I love to explore Ritual as Self Love, Self Care! If you are 
      curious about connecting back to Ritual in your life, I am humbled 
      to journey alongside you as you create your sacred space, your 
      sacred ritual, your self care, your container of creation. 
    </p>

    <p>
      Yoni is a sanskrit word, literally meaning female genitalia, but 
        it also is used to refer to womb, origin, source. Yoni Steaming is
       an ancient way of Being Water. Blessing and cleansing our Sacred 
       Waters within, we create a sacred space to connect to our womb portal. 
       Using blessed herbs from my garden, infused within the steaming water, 
       we invite plant spirit and her physical constituents to enter our womb. 
       An important way to release tension, which is a common source of dis-ease 
       in our pelvic area. An efficient way to absorb plant medicine. A space for transformation. 
    </p>

    <p>
      Regular Yoni steams hold the potential to heal many imbalances of our 
      sacred womb space including: endometriosis, fibroids, PMS, PMDD, anxiety, 
      depressive feelings, lack of creation energy, low libido, BV, sexual traumas, 
      lack of self confidence. 
    </p>

    <p>
      Post Partum Yoni Steam is imperative to healing physically and spiritually. 
      I would love to come to your home and prepare a sacred steam for you in this 
      intimate time of healing and expansion into motherhood. 
    </p>

    <p>
      What herbs do I use? I use solely herbs grown from my garden or the garden 
      of my beloved earth care takers. They are only organic and most are sung to 
      and connected to spiritually. At Spirit Rose, we mostly work with Rose Medicine 
      from my garden! But, with your herbalist, together we can create a balanced blend
       for what you are seeking. 
    </p>


    <p>
      I am a wildcrafting herbalist, trained in the forest of the Pacific Northwest. 
      I vow to offer my scientifically proven intuitive wisdom of the plants. If you 
      are curious about forming a relationship with a plant ally, yes! I would love to be your guide!
    </p>

    <p>I am a Massage Therapist and Birth Doula, specializing in Womb Healing. This healing looks vastly different for all.</p>

    <h4>Thank You for connecting with me and my offerings! I super look forward to connecting with you!</h4>
  </div>
  <div id="alicia-img">
    <v-img :src="images.alicia"></v-img>
  </div> -->
  <v-row justify="space-around">
    <v-col md="6">
      <p>
        Welcome to Spirit Rose! In this space we Honor Ourselves 
        as the Radiant Magical Rose that we are, we See Ourselves 
        Worthy of Connection and we Blossom into Being our Spirit, 
        our Essence.     
      </p>

      <p>
        Hi! I am Alicia. My service on Earth is to be a Guide. A 
        Guide back to your Source. I am here to Facilitate and 
        Support our Connection back to Nature, our True Essence. I 
        specialize in Ritual Creation, Yoni Steaming, Herbal Medicine 
        and Womb Healing. 
      </p>
      <p>
        I love to explore Ritual as Self Love, Self Care! If you are 
        curious about connecting back to Ritual in your life, I am humbled 
        to journey alongside you as you create your sacred space, your 
        sacred ritual, your self care, your container of creation. 
      </p>
      <v-btn>Book an Appointment</v-btn>
    </v-col>
    <v-col md="3">
      <v-img :src="images.alicia"></v-img>
    </v-col>
  </v-row>
  <v-row justify="space-around">
    <v-col md="3">
      <v-img :src="images.yellow"></v-img>
    </v-col>
    <v-col md="6">
      <p>
        Yoni is a sanskrit word, literally meaning female genitalia, but 
        it also is used to refer to womb, origin, source. Yoni Steaming is
       an ancient way of Being Water. Blessing and cleansing our Sacred 
       Waters within, we create a sacred space to connect to our womb portal. 
       Using blessed herbs from my garden, infused within the steaming water, 
       we invite plant spirit and her physical constituents to enter our womb. 
       An important way to release tension, which is a common source of dis-ease 
       in our pelvic area. An efficient way to absorb plant medicine. A space for transformation. 
    </p>

    <p>
      Regular Yoni steams hold the potential to heal many imbalances of our 
      sacred womb space including: endometriosis, fibroids, PMS, PMDD, anxiety, 
      depressive feelings, lack of creation energy, low libido, BV, sexual traumas, 
      lack of self confidence. 
    </p>

    <p>
      Post Partum Yoni Steam is imperative to healing physically and spiritually. 
      I would love to come to your home and prepare a sacred steam for you in this 
      intimate time of healing and expansion into motherhood. 
    </p>

    </v-col>

  </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      images: {
        alicia: require('@/assets/Alicia.jpg'),
        yellow: require('@/assets/yellow_rose.jpg')
      }
    }
  }

}
</script>

<style scoped>

</style>