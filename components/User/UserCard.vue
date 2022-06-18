<template>
  <div>
    <v-card
      :disabled="disabled"
      class="mx-auto"
      max-width="344"
      outlined
      @click="showDetailModal"
    >
      <v-list-item three-line>
        <v-list-item-avatar
          size="80"
          color="grey"
        >
          <v-img :src="curentUser.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            {{ curentUser.name }}
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
      getUser: 'users/getUser'
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
