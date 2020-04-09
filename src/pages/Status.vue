<template>
  <q-page>

      <div class="q-pa-md">
        <q-table
          title="Dataset Status Overview"
          :loading="tableIsLoading"
          :data="data"
          :columns="columns"
          :pagination.sync="pagination"
          row-key="file"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="dataset" :props="props">
                {{ props.row.subset }}
              </q-td>
              <q-td key="last_update" :props="props">
                {{ props.row.time }}
              </q-td>
              <q-td key="public" :props="props">
                 <q-chip outline square icon="done"></q-chip>
                 <!-- {{props.row.public}} make this dynamic again when we have non-public data here -->
              </q-td>

              <q-td key="key_catalog" :props="props">
                <router-link class="file-chips"
                  :to="{path: 'keys', query: { dataset: props.row.set_id }}"
                >
                 <q-chip square icon="storage"></q-chip>

                </router-link>
              </q-td>

              <q-td key="full_dataset" :props="props">
                <a class="file-chips" :href="`https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/data/${props.row.file}`">
                 <q-chip square icon="get_app">.csv</q-chip>
                </a>
              </q-td>

              <q-td key="metadata" :props="props">

                <a class="file-chips" :href="`https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/data/${props.row.file.replace('.csv', '.json')}`">
                 <q-chip square icon="get_app">.json</q-chip>
                </a>
              </q-td>
            </q-tr>
          </template>

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
        this.data = rows;
        this.tableIsLoading = false;
      });
  },
  data () {
    return {
      catalog_url: 'https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/status.csv',
      tableIsLoading: true,
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
          field: 'set_id',
          label: 'Time Series Catalog'
        },
        {
          name: 'full_dataset',
          field: 'file',
          label: 'Full Dataset'
        },
        {
          name: 'metadata',
          field: (row) => row.file.replace('.csv', '.json'),
          label: 'Metadata'
        }
      ],
      data: []
    }
  }
}
</script>
