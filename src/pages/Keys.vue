<template>
  <q-page>


 <div class="row">
      <div class="col-7">
        <div class="eline">
          <IEcharts
            :option="elinechart"
            :loading="chartIsLoading"/>
        </div>
      </div>
      <div class="col-4">
        <q-select dense clearable square outlined v-model="activeSet" :options="datasets" label="Choose dataset" />
      <q-table
        class="keys-table"
        title="Time Series by Dataset"
        row-key="ts_key"
        :loading="tableIsLoading"
        :selected.sync="selectedRow"
        dense
        :data="filteredKeys"
        :columns="columns"
        :pagination.sync="pagination"
        @row-click="onRowClick" />
      </q-table>
    </div>



 </div>

</q-page>

</template>

<script>
import neatCSV from 'neat-csv';
import IEcharts from 'vue-echarts-v3/src/full.js';

export default {
name: 'keys-by-catalog',
  mounted () {
    fetch(this.catalog_url)
      .then((res) => res.text())
      .then(neatCSV)
      .then((rows) => {
        this.keys = rows;
        this.onRowClick(null, this.filteredKeys[0]);
        this.tableIsLoading = false;
      });

      if(this.$route.query.dataset !== undefined) {
        this.activeSet = this.$route.query.dataset;
      }
  },
  data() {
      return {
        selected: [],
        model: null,
        pagination:{
          rowsPerPage: 10
        },
        catalog_url: 'https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/key_catalog.csv',
        columns: [
        {
          headerClasses: 'bg-primary text-white',
          classes: 'bg-grey-2 ellipsis',
          name: 'ts_key',
          field: 'ts_key',
          label: 'ts_key',
          sortable: true
        }
      ],

      tableIsLoading: true,

      // Data
      keys: [],
      activeSet: null,
      selectedRow: [], // array as multiple are theoretically possible

      // Chart
      chartIsLoading: true,
      elinechart: {
        animation: false,
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          text: 'some graph'
        },
        dataZoom: [{
            type: 'inside',
            start: 40,
            end: 100
          },
          {
            start: 40,
            end: 100,
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
       }],
       xAxis: {
          type: 'time',
       },
       yAxis: {
          type: 'value'
        },
       color: ['#007A92'],
       series: [{
          data: [],
          type: 'line',
          showSymbol: false
       }]
      },
      }
    },
    components: {
      IEcharts
    },
    methods: {
      // Todo: this is a hacky proof of concept approach
      onRowClick: function(e, r) {
        this.selectedRow = [ r ];
        this.setActiveSeries(r.ts_key);
      },
      setActiveSeries: function(key) {
        this.activeSeries = key;
        this.chartIsLoading = true;

        fetch(`https://datenservice.kof.ethz.ch/api/v1/public/ts?keys=${key}&df=Y-m-d`)
        .then((r) => r.json())
        .then((data) => data[key].map((row) => [row.date, parseFloat(row.value.toFixed(2))]))
        .then((series) => {
          this.elinechart.series[0].data = series;
          this.elinechart.title.text = key;
          this.chartIsLoading = false;
        });
      }
    },
    computed: {
      filteredKeys: function() {
        if(this.activeSet !== null) {
          return this.keys.filter((k) => k.dataset === this.activeSet);
        } else {
          return this.keys;
        }
      },
      datasets: function() {
        return this.keys
                .map((x) => x.dataset)
                // Only keep the first occurrence of each item
                .filter((x, index, array) => array.indexOf(x) == index)
                .sort();
      }
    }



}
</script>

