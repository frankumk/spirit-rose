<template>
  <v-row>
    <v-col>
      <v-container>
        <Map />
      </v-container>
    </v-col>
    <v-col>
      <v-container>
        <v-form
          v-model="valid"
        >
          <h1>Contact Me</h1>
          <v-text-field
            label="Name"
            v-model="name"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            required
          ></v-text-field>
          <v-textarea
            label="Comment"
            v-model="comment"
            required
          ></v-textarea>
          <v-btn
            type="submit"
            :disabled="valid"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-form>
      </v-container>
    </v-col>

  </v-row>
  
</template>
<script>
import Map from '../components/Map'

  export default{
    data: () => ({
      valid: false,
      name: '',
      email: '',
      comment: ''
    }),
    methods: {
      submit(evt){
        evt.preventDefault();
        console.log(this.name, this.email)
        //send an email here....emailjs???
        this.name=''
        this.email=''
        this.comment=''
        return this.comment;
      }
    },
    components: {
      Map
    }

  }
</script>
