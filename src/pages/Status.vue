<template>
  <q-page>

      <div class="q-pa-md">
        <q-table
          title="Dataset Status Overview"
          :data="data"
          :columns="columns"
          :pagination.sync="pagination"
          row-key="set_id"
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
      pagination:{
          rowsPerPage: 10
      },
      columns: [
        {
          name: 'dataset',
          headerClasses: 'bg-primary text-white',
          classes: 'bg-grey-2 ellipsis',
          sortable: true,
          required: true,
          field: 'file',
          label: 'Dataset'
        },
        {
          name: 'last_update',
          sortable: true,
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
          field: (row) => row.file,
          label: 'Time Series Catalog'
        },
        {
          name: 'full_dataset',
          field: (row) => row.set_id,
          label: 'Full Dataset'
        }
      ],
      data: []
    }
  }
}
</script>
