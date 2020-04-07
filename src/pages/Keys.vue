<template>
  <q-page>


 <div class="row">
      <div class="col">
        <div class="eline">
          <IEcharts :option="elinechart" :resizable="true"/>
        </div>
      </div>
 </div>   
  
  <div class="row">
    <div class="col">
      <q-table
        class="keys-table"
        title="Time Series by Dataset"
        row-key="ts_key"
        selection="single"
        :selected.sync="selected"
        dense
        :data="data"
        :columns="columns"
        :pagination.sync="pagination"
        @row-click="updateChart" 
        />
    </div>
  </div>

 <!--
TODO: row-click should be selection 

  --> 

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
        this.data = rows
      });
  },
  data() {
      return {
        selected: [],
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
        },
        {
          name: 'dataset',
          field: 'dataset',
          label: 'Dataset',
          sortable: true
        }
      ],
      data: [],
      elinechart: {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
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
       series: [{
          data: [["2019-11-01",820],["2019-12-01",820],["2020-01-01",820],["2020-02-01", 1320]],
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
      updateChart: function(e, r) {
        fetch(`https://datenservice.kof.ethz.ch/api/v1/public/ts?keys=${r.ts_key}&df=Y-m-d`)
        .then((r) => r.json())
        .then((easteregg) => easteregg[r.ts_key].map((row) => [row.date, row.value]))
        .then((xy) => { console.log(xy); return xy;})
        .then((z) => this.elinechart.series = [{ data: z, type: 'line' }])
      }
    }
  

  
}



</script>

