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
              <v-list-item v-for="appt in todayAppts" :key="appt.id" :value="appt.time">{{appt.time}}</v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          v-if="date"
          class="pa-4"
          width="100%"
          tile
        >
          <h4 v-if='appointment && !booked'>Book {{date}} at {{appointment}}</h4>
          <h4 v-else-if="!appointment || !booked">Select a Time...</h4>
          <v-form v-if='appointment && !booked'>
            <v-text-field
            label="Name"
            v-model="name"
            required
          ></v-text-field>
          <v-text-field
            label="Phone Number"
            v-model="phone"
            required
          ></v-text-field>
          <v-btn
            type="submit"
            :disabled="valid"
            @click="book"
          >
            BOOK
          </v-btn>
          </v-form>

          <h4 v-if="booked">You are all set! See you on {{ date }} at {{ appointment }}!</h4>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from'vuex'

export default{
  data: () => ({
    date: '',
    appointment: null,
    name: '',
    phone: '',
    booked: false
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
  methods: {
    book(evt){
      evt.preventDefault()
      console.log(this.appointment)
      this.$store.dispatch('bookAppt', {date: this.date, time: this.appointment, name: this.name, phone: this.phone})
      this.name=''
      this.phone=''
      this.booked = true
    }
  }
}
</script>

//color="#CC5500"