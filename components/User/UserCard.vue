<template>
  <v-dialog
    width="500"
  >
    <template #activator="{ on, attrs }">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        v-bind="attrs"
        v-on="on"
      >
        <v-list-item three-line>
          <v-list-item-avatar
            size="80"
            color="grey"
          >
            <v-img :src="user.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ user.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.profession }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </template>

    <user-detail :user="user" />
  </v-dialog>
</template>

<script>
import UserDetail from '@/components/User/UserDetail.vue'

export default {
  name: 'UserCard',

  components: {
    UserDetail
  },

  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
