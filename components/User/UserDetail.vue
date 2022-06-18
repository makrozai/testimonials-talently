<template>
  <v-card class="text-center relative">
    <v-app-bar
      absolute
      flat
      color="transparent"
    >
      <v-spacer />
      <v-btn
        icon
        @click="removeUser"
      >
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-avatar size="150" class="mt-6 mb-4">
      <img :src="user.avatar" alt="John">
    </v-avatar>
    <v-card-title class="justify-center mb-1">
      {{ user.name }} {{ user.last_name }}
    </v-card-title>
    <v-card-subtitle>
      {{ user.profession }}
    </v-card-subtitle>

    <v-card-text>
      {{ user.testimony }}
    </v-card-text>

    <img :src="user.company_logo" height="30">

    <v-card-actions class="justify-center py-6">
      <v-btn
        color="secondary"
        x-large
        :href="user.github"
        target="_blank"
      >
        <v-icon left>
          mdi-github
        </v-icon>
        GitHub
      </v-btn>
      <v-btn
        color="primary"
        x-large
        :href="user.twitter"
        target="_blank"
      >
        <v-icon left>
          mdi-twitter
        </v-icon>
        Twitter
      </v-btn>
      <v-btn
        color="indigo darken-2"
        x-large
        :href="user.linkedin"
        target="_blank"
      >
        <v-icon left>
          mdi-linkedin
        </v-icon>
        Linkedin
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data: () => ({
  }),

  methods: {
    ...mapActions({
      deleteUser: 'users/deleteUser'
    }),
    async removeUser () {
      try {
        await this.deleteUser(this.user.id)

        this.$store.commit('updateAlert', {
          type: 'success',
          content: 'Usuario eliminado',
          state: true
        })
      } catch (error) {
        this.$store.commit('updateAlert', {
          type: 'error',
          content: error,
          state: true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
