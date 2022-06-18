<template>
  <div>
    <v-card
      :disabled="disabled"
      outlined
      class="user-card my-2"
    >
      <v-btn
        color="red darken-4"
        elevation="2"
        fab
        right
        top
        absolute
        small
        class="user-card-delete"
        @click="removeUser"
      >
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
      <v-list-item
        three-line
        @click="showDetailModal"
      >
        <v-list-item-avatar
          size="80"
          color="grey"
        >
          <v-img :src="curentUser.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ curentUser.name }} {{ curentUser.last_name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ curentUser.profession }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <user-detail :user="user" />
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserDetail from '@/components/User/UserDetail.vue'

export default {
  name: 'UserCard',

  components: {
    UserDetail
  },

  props: {
    curentUser: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    dialog: false,
    disabled: false
  }),

  computed: {
    ...mapGetters({
      user: 'users/user'
    })
  },

  methods: {
    ...mapActions({
      getUser: 'users/getUser',
      deleteUser: 'users/deleteUser'
    }),
    async showDetailModal () {
      this.disabled = true
      try {
        await this.getUser(this.curentUser.id)
        this.dialog = true
      } catch (error) {
        alert(error)
      } finally {
        this.disabled = false
      }
    },
    async removeUser () {
      try {
        await this.deleteUser(this.curentUser.id)

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
.user-card {
  &-delete {
    opacity: 0;
  }
  &:hover &-delete {
    opacity: 1;
  }
}
</style>
