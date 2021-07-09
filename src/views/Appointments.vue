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
              width="90%"
            ></v-date-picker>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-card
          class="pa-4"
          width="100%"
          tile
        >
          <v-list>
            <v-list-item-group
              v-model="appointment"
            >
              <h4 v-if='date'>Available Appointments on {{date}}</h4>
              <h4 v-else>Select a Date...</h4>
              <v-list-item v-for="appt in todayAppts" key="appt.id">{{appt.time}}</v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="4">

      </v-col>
    </v-row>
</template>

<script>
import { mapState } from'vuex'

export default{
  data: () => ({
    date: '',
    appointment: ''
  }),
  created(){
    console.log(`getting`)
    this.$store.dispatch('getAppointments')
  },
  computed: {
    ...mapState({
      appointments: state => state.appointments,
    }),
    todayAppts(){
      return this.appointments.filter(appt=>appt.date===this.date&&appt.name===null)
    }
  },
}
</script>

//color="#CC5500"