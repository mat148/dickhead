<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main class="d-flex justify-center align-center">
      <v-card
        class="card pa-3"
        elevation="2"
        max-width="374"
      >
        <v-card-title class="px-0">Lorem Ipsum</v-card-title>
        <v-card-subtitle class="pb-3 px-0">Lorem ipsum</v-card-subtitle>

        <v-form @submit.prevent="submit">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="[rules.required]"
            class="mb-3"
          ></v-text-field>

          <v-text-field
            type="tel"
            label="Number"
            v-model="number"
            :rules="[rules.required, rules.phoneNumber]"
            class="mb-3"
          ></v-text-field>

          <div class="d-flex justify-end">
            <v-btn type="submit">Submit</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        name: '',
        number: 0,
        drawer: false,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        rules: {
          required: value => !!value || 'Required.',
          phoneNumber: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    }
  });
</script>

<style>
  .card {
    width: 100%;
  }
</style>