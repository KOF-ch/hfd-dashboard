<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

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

            <q-item :to="menuItem.to" clickable :active="menuItem.label === 'Outbox'" v-ripple>
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
    label: 'Dataset Status',
    to: '/',
    separator: true
  },
  {
    label: 'Single Time Series',
    to: '/keys',
    separator: false
  },
  {
    icon: 'archive',
    label: 'High Frequency Data Repository',
    separator: true
  },
  {
    icon: 'code',
    label: 'Dashboard Source Code',
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
    label: 'Help',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>