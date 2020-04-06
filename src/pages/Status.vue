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
import neatCSV from 'neat-csv';

export default {
  name: 'PageIndex',
  mounted () {
    fetch(this.catalog_url)
      .then((res) => res.text())
      .then(neatCSV)
      .then((rows) => {
        this.data = rows
      });
  },
  data () {
    return {
      catalog_url: 'https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/status.csv',
      columns: [
        {
          name: 'dataset',
          field: 'set_id',
          label: 'Dataset'
        },
        {
          name: 'last_update',
          field: 'time',
          label: 'Last Update'
        },
        {
          name: 'public',
          field: 'public',
          label: 'is_public'
        },
        {
          name: 'key_catalog',
          field: (row) => `https://kofdata.netlify.com/#/keycatalog?set=${row.set_id}`,
          label: 'Variable Identifier Catalog'
        },
        {
          name: 'full_dataset',
          field: (row) => `https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/data/${row.set_id}.csv`,
          label: 'Full Dataset'
        }
      ],
      data: []
    }
  }
}
</script>
