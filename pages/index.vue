<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h1>Testimonials</h1>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn
          color="primary"
          x-large
          to="/crear-usuario"
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
          Add new
        </v-btn>
      </v-col>
      <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        md="4"
      >
        <user-card
          :curent-user="user"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '@/components/User/UserCard.vue'

export default {
  name: 'HomePage',

  components: {
    UserCard
  },

  data: () => ({
    dialog: false
  }),

  computed: {
    ...mapGetters({
      users: 'users/users'
    })
  },

  methods: {
    showCreateUserModal () {
      alert('hi')
    }
  }
}
</script>
