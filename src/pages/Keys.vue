<template>
  <q-page class="flex flex-topleft">


  <div class="q-pa-md">

    <div class="row">
      <div class="col">
        <q-table
      class="keys-table"
      title="Keys by Dataset"
      :data="data"
      :columns="columns"
      :pagination.sync="pagination"
      row-key="name"
    />
      </div>
      <div class="col">
        <q-section class="eline">
          <IEcharts :option="elinechart" :resizable="true"/>
          </q-section>
      </div>
    </div>

  </div>




    


  </q-page>
</template>

<script>
import neatCSV from 'neat-csv';
import IEcharts from 'vue-echarts-v3/src/full.js';

export default {
name: 'somefuckup',
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
        pagination:{
          rowsPerPage: 10
        },
        catalog_url: 'https://raw.githubusercontent.com/KOF-ch/economic-monitoring/master/key_catalog.csv',
        columns: [
        {
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
    }, {
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
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
},
      }
    },
    components: {
      IEcharts
    },

  

  
}



</script>

