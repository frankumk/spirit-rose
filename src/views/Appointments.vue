<template>
<!-- <v-container>
  <v-calendar></v-calendar>
</v-container> -->

<!-- <v-row class="text-center">
      <v-col col="12">
        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="events"
            color="#CC5500"
            type="month"
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="4">
        <v-sheet>
          <v-row>
            <v-date-picker
              v-model="date"
              color="#013220"
              elevation="15"
              width="100%"
            ></v-date-picker>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <h2 v-if='date'>Available Appointments on {{date}}</h2>
        <h2 v-else>Select Day</h2>
      </v-col>
    </v-row>
</template>

<script>
export default{
  data: () => ({
    date: ''
  })
}
</script>

//color="#CC5500"