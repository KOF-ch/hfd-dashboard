<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Economic Monitoring High Frequency Datasets
        </q-toolbar-title>
        <div>by KOF | ETH Zurich</div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Dataset Status Overview" />
        <q-route-tab to="/keys" label="Key Catalog" />
      </q-tabs>
    </q-header>

    

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      essentialLinks: [
        {
          title: 'Economic Monitoring',
          caption: 'High Frequency Data Repository',
          icon: 'archive',
          link: 'https://github.com/KOF-ch/economic-monitoring'
        },
        {
          title: 'KOF Twitter',
          caption: '@KOFETH',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/KOFETH'
        },
        {
          title: 'Gesellschaftsmonitoring COVID19',
          caption: 'Great Overview by StatistikZH',
          icon: 'public',
          link: 'https://statistikzh.github.io/covid19monitoring/'
        },
        {
          title: 'Dashboard Source Code',
          caption: 'github.com/KOF-ch/hfd-dashboard',
          icon: 'code',
          link: 'https://github.com/KOF-ch/hfd-dashboard'
        },
      ]
    }
  }
}
</script>