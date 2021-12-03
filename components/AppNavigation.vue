<template>
  <div>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
        <v-toolbar-items class="d-none d-sm-flex">
            <v-btn text to="/" nuxt> Home </v-btn>
            <v-btn text to="/about" nuxt> About </v-btn>
            <v-btn text to="/contact" nuxt> Contact</v-btn>
        </v-toolbar-items>
      <v-btn class="hidden-sm-and-up" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="rightDrawer" temporary fixed>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="menu in menus" :key="menu.title">
          <v-list-item-action>
            <v-icon light>
              {{ menu.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [{
            title: 'Home',
            icon: 'mdi-view-dashboard'
          },
          {
            title: 'About',
            icon: 'mdi-image'
          }
        ],
        clipped: false,
        fixed: false,
        items: [{
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
        rightDrawer: false,
        title: 'App Name'
      }
    }
  }
</script>
