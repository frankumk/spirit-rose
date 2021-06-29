<template>
  <v-row>
    <v-col>
      <v-container>
      </v-container>
    </v-col>
    <v-col>
      <v-container>
        <form>
          <v-text-field
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
          label="Comment"
          ></v-textarea>
          <v-btn type="submit">Submit</v-btn>
        </form>
      </v-container>
    </v-col>

  </v-row>
  
</template>
<script>

  export default{
    data: () => ({
      name: '',
      email: '',
      comment: ''
    })

  }
</script>
