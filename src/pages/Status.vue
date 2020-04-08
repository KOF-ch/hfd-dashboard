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

          <!--TODO: this may not be intended to be userd more than once...-->
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="dataset" :props="props">
                {{ props.row.set_id }}
              </q-td>
              <q-td key="last_update" :props="props">
                {{ props.row.time }}
              </q-td>
              <q-td key="public" :props="props">
                {{ props.row.public }}
              </q-td>

              <q-td key="key_catalog" :props="props">
                <router-link
                  :to="{path: 'keys', query: { dataset: props.row.set_id }}"
                >
                  TODO: Make this a nice component
                  {{ props.row.set_id }}
                </router-link>
              </q-td>

              <q-td key="full_dataset" :props="props">
                <a :href="`https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/data/${props.row.file}`">
                  Make me pretty!
                </a>
              </q-td>

              <q-td key="metadata" :props="props">
                <a :href="`https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/data/${props.row.file.replace('.csv', '.json')}`">
                  Make me pretty too!
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
