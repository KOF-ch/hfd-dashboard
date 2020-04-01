<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          High Frequency Economic Monitoring
        </q-toolbar-title>

        <div>by KOF | ETH Zurich</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Related Sites
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Economic Monitoring',
          caption: 'High Frequency Data Repository',
          icon: 'archive',
          link: 'https://github.com/KOF-ch/economic-monitoring'
        },
        {
          title: 'Github',
          caption: 'github.com/KOF-ch/hfd-dashboard',
          icon: 'code',
          link: 'https://github.com/KOF-ch/hfd-dashboard'
        },
        {
          title: 'Twitter',
          caption: '@KOFETH',
          icon: 'rss_feed',
          link: 'https://twitter.com/KOFETH'
        },
        {
          title: 'Gesellschaftsmonitoring COVID19',
          caption: 'Overview site by StatistikZH',
          icon: 'public',
          link: 'https://statistikzh.github.io/covid19monitoring/'
        }
      ]
    }
  }
}
</script>
