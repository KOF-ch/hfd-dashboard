<template>
  <q-page class="flex flex-topleft">

      <div class="q-pa-md">
        <q-table
          title="Dataset Overview"
          :data="data"
          :columns="columns"
        row-key="name"
        >
          <q-tr>
            <q-td>
              
            </q-td>
          </q-tr>
        </q-table>
      </div>
    


  </q-page>
</template>

<script>
import bla from 'neat-csv';

export default {
  name: 'PageIndex',
  mounted () {
    fetch(this.catalog_url)
      .then((res) => res.text())
      .then(bla)
      .then((rows) => {
        console.log(rows)
        this.data = rows
      });
  },
  data () {
    return {
      catalog_url: 'https://raw.githubusercontent.com/KOF-ch/hfd-dashboard/master/test.csv',
      columns: [
        {
          name: 'dataset',
          field: 'dataset',
          label: 'Dataset'
        },
        {
          name: 'last_update',
          field: 'last_update',
          label: 'Last Update'
        },
        {
          name: 'public',
          field: 'public',
          label: 'is_public'
        },
        {
          name: 'key_catalog',
          field: 'key_catalog',
          label: 'Variable Identifier Catalog'
        },
        {
          name: 'full_dataset',
          field: 'full_dataset',
          label: 'Full Dataset'
        }
      ],
      data: []
    }
  }
}
</script>
