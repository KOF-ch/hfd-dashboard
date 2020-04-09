<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>


        <q-toolbar-title>
          High Frequency Economic Monitoring <q-badge color="secondary">alpha</q-badge>
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
        id="drawer"
        :mini="mini"
    >
      <q-scroll-area class="fit">
          <q-list v-for="(menuItem) in menuList" :key="menuItem.label">

            <q-item :to="menuItem.to" clickable exact>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </q-list>

          <q-separator/>

          <q-list v-for="(menuItem) in extList" :key="menuItem.label">
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

        <div class="drawerhandle absolute">
          <q-btn
            dense
            round
            unelevated
            color="grey"
            :icon="mini ? 'chevron_right' : 'chevron_left'"
            @click="mini = !mini"
          />
        </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style inline>
  .drawerhandle {
    top: 50%;
    right: -17px;
    opacity: 0.2;
    transition: 0.25s;
  }

  #drawer:hover .drawerhandle {
    opacity: 1;
  }
</style>

<script>
const menuList = [
  {
    icon: 'mdi-radar',
    label: 'Dataset Status',
    to: '/'
  },
  {
    icon: 'mdi-chart-timeline-variant',
    label: 'Time Series Catalog',
    to: '/keys'
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    to: '/help'
  },
]

const extList = [
  {
    icon: 'archive',
    label: 'High Frequency Data Repository',
    href: 'https://github.com/KOF-ch/economic-monitoring'
  },
  {
    icon: 'code',
    label: 'Dashboard Source Code',
    href: 'https://github.com/KOF-ch/hfd-dashboard'
  },
  {
    icon: 'mdi-twitter',
    label: 'KOF Twitter ',
    href: 'https://twitter.com/KOFETH'
  },
  {
    icon: 'public',
    label: 'Gesellschafts- monitoring COVID19',
    href: 'https://www.web.statistik.zh.ch/covid19_indikatoren_uebersicht/#/50/Alle'
  }
]

export default {
  data () {
    return {
      mini: true,
      drawer: true,
      menuList,
      extList
    }
  }
}
</script>
