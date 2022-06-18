<template>
  <v-form
    ref="createUserForm"
    v-model="valid"
    lazy-validation
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1>New Testimony</h1>
        </v-col>
        <v-col cols="12" md="2">
          <v-avatar
            color="grey lighten-1"
            size="100"
          >
            <v-img
              v-if="user.avatar"
              :src="user.avatar"
            />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="10">
          <v-text-field
            v-model="user.avatar"
            :rules="rules.avatar"
            outlined
            label="Enlace de Avatar"
            clearable
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="user.name"
            :rules="rules.names"
            outlined
            label="Nombre"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="user.last_name"
            :rules="rules.last_name"
            outlined
            label="Apellido"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="user.profession"
            :rules="rules.profession"
            outlined
            label="Profesión"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="user.company_logo"
            :rules="rules.company_logo"
            outlined
            label="Logo de Compania"
            required
          />
        </v-col>
        <v-col cols="12" md="12">
          <v-textarea
            v-model="user.testimony"
            :rules="rules.testimony"
            outlined
            auto-grow
            label="Testimonio"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="user.github"
            :rules="rules.github"
            outlined
            label="Enlace de Github"
            clearable
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="user.twitter"
            :rules="rules.twitter"
            outlined
            label="Enlace de Twitter"
            clearable
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="user.linkedin"
            :rules="rules.linkedin"
            outlined
            label="Enlace de Linkedin"
            clearable
            required
          />
        </v-col>
        <v-col cols="12" md="12" class="d-flex flex-row">
          <v-btn
            text
            x-large
          >
            Cancelar
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            x-large
            :loading="loading"
            @click="validate"
          >
            Agregar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserCreate',

  data: () => ({
    valid: false,
    loading: false,
    user: {
      name: '',
      last_name: '',
      avatar: 'https://static-talently.s3.amazonaws.com/francisco_farfan_18754b3fed.jpg',
      profession: '',
      testimony: '',
      github: 'https://github.com/Talently-Oficial',
      twitter: 'https://twitter.com/TalentlyTech',
      linkedin: 'https://www.linkedin.com/school/talentlytech',
      company_logo: 'https://static-talently.s3.amazonaws.com/rappi_8fbc74f632.png'
    },
    rules: {
      names: [
        v => !!v || 'Nombre es requerido'
      ],
      last_name: [
        v => !!v || 'Apellido es requerido'
      ],
      avatar: [
        v => !!v || 'Avatar es requerido'
      ],
      profession: [
        v => !!v || 'Profesión es requerida'
      ],
      testimony: [
        v => !!v || 'Testimonio es requerido'
      ],
      github: [
        v => !!v || 'Github es requerido'
      ],
      twitter: [
        v => !!v || 'Twitter es requerido'
      ],
      linkedin: [
        v => !!v || 'Linkedin es requerido'
      ],
      company_logo: [
        v => !!v || 'Logo es requerido'
      ]
    }
  }),

  methods: {
    ...mapActions({
      createUser: 'users/createUser'
    }),
    validate () {
      if (this.$refs.createUserForm.validate()) {
        this.submit()
      }
    },
    async submit () {
      this.loading = true
      try {
        await this.createUser(this.user)

        this.$store.commit('updateAlert', {
          type: 'success',
          content: 'Usuario agregado',
          state: true
        })

        this.$router.go(-1)
      } catch (error) {
        this.$store.commit('updateAlert', {
          type: 'error',
          content: error,
          state: true
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
