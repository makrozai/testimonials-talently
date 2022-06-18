<template>
  <v-card class="text-center">
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

    <v-card-actions class="justify-center py-6">
      <v-btn
        color="secondary"
        x-large
        @click="dialog = false"
      >
        <v-icon left>
          mdi-github
        </v-icon>
        GitHub
      </v-btn>
      <v-btn
        color="primary"
        x-large
        @click="dialog = false"
      >
        <v-icon left>
          mdi-twitter
        </v-icon>
        Twitter
      </v-btn>
      <v-btn
        color="indigo darken-2"
        x-large
        @click="dialog = false"
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
export default {
  name: 'UserDetail',

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data: () => ({
  })
}
</script>

<style lang="scss" scoped>

</style>
