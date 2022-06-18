<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title class="mx-auto" v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <v-alert
      :value="alert.state"
      transition="scroll-x-reverse-transition"
      elevation="2"
      prominent
      :type="alert.type"
      class="alert-fixed"
    >{{ alert.content }}</v-alert>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'TALENTLY',
      alertContent: {
        state: false,
        content: '',
        timeOut: 0,
        type: 'success'
      }
    }
  },

  watch: {
    '$store.state.alert' (val) {
      if (val.state) {
        setTimeout(() => {
          this.$store.commit('updateAlert', {
            state: false,
            content: '',
            type: val.type
          })
        }, val.timeOut)
      }
    }
  },

  computed: {
    ...mapGetters({
      alert: 'alert'
    })
  }
}
</script>
<style lang="scss" scoped>
.alert-fixed {
  position:fixed;
  z-index: 100000;
  width: 20rem;
  top: 1rem;
  right: 1rem;
}
</style>
