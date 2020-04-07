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

            <q-item :to="menuItem.to" clickable :active="menuItem.label === 'Dataset Status'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

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
    separator: true
  },
  {
    icon: 'archive',
    label: 'High Frequency Data Repository',
    href: 'https://github.com',
    separator: false
  },
  {
    icon: 'mdi-twitter',
    label: 'KOF Twitter ',
    separator: false
  },
  {
    icon: 'public',
    label: 'Gesellschafts- monitoring COVID19',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help & Changelog',
    separator: false
  },
  {
    icon: 'code',
    label: 'Dashboard Source Code',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: true,
      menuList
    }
  }
}
</script>