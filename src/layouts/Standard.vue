<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>


        <q-toolbar-title>
          High Frequency Economic Monitoring
        </q-toolbar-title>
        <div>by KOF | ETH Zurich</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-1"
    >
    <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item :to="menuItem.to" clickable exact>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          <q-separator v-if="menuItem.separator" />
          </q-list>

          <q-list v-for="(menuItem, index) in extList" :key="index">
            <a class="file-chips" :href="menuItem.href" target="_blank">
            <q-item clickable>

              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            </a>
            </q-list>

        </q-scroll-area>


    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'mdi-radar',
    label: 'Dataset Status',
    to: '/',
    separator: false
  },
  {
    icon: 'mdi-chart-timeline-variant',
    label: 'Time Series Catalog',
    to: '/keys',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    to: '/help',
    separator: true
  },
]

const extList = [
  {
    icon: 'archive',
    label: 'High Frequency Data Repository',
    href: 'https://github.com/KOF-ch/economic-monitoring',
    separator: false
  },
  {
    icon: 'code',
    label: 'Dashboard Source Code',
    href: 'https://github.com/KOF-ch/hfd-dashboard',
    separator: false
  },
  {
    icon: 'mdi-twitter',
    label: 'KOF Twitter ',
    href: 'https://twitter.com/KOFETH',
    separator: false
  },
  {
    icon: 'public',
    label: 'Gesellschafts- monitoring COVID19',
    href: 'https://www.web.statistik.zh.ch/covid19_indikatoren_uebersicht/#/50/Alle',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: true,
      menuList,
      extList
    }
  }
}
</script>
