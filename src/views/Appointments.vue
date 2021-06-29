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
          <v-date-picker
            color="#CC5500"
            elevation="15"
            width="100%"
          ></v-date-picker>
        </v-sheet>
      </v-col>
    </v-row>
</template>