<template>
  <q-page class="q-pa-md">
    
    <div class="row">
    <div class="col-6">
    <div class="text-h4">Help</div>

    <div class="text-h5 q-pt-md">About this Site</div>
    The main purpose of this website is to provide a status overview of a all high 
    frequency datasets that are publicly available through the KOF database and 
    Datenservice REST API as well as through the static file economic-monitoring 
    Github repository. 

    All datasets consist of time series data that are available at a frequency that
    is uncommonly high for macroeconomic research (daily, weekly or multiple time a month).

    
    <div class="text-h5 q-pt-md">Data Access</div>
    In principle data are available in machine friendly formats through this dashboard. All data are available as long format .csv
    and data description are available in the .json format. This idea of providing to files to guarantee
    a light weight, but powerful infrastructure that suits humans and machines alike is based on the swissdata project.
    A more thorough discussion of this data format along with production applications can be found on 
    the <a target="_blank" href="https://github.com/swissdata/demo">demo repository</a>.

    <div class="text-h6 q-pt-md">R Language for Statistical Computing</div>
    Users of the R Language for Statistical computing can simply use the <a target="_blank" href="https://cran.r-project.org/package=kofdata">{kofdata}</a>
    R package to read time series directly into R using the keys listed on this dashboard website. 
    Once you have installed the R package, reading a time series is as simple as: 

<div class="q-pt-md">
    <code>
      library(kofdata)</br>
      get_time_series("ch.zrh_airport.arrival.total")
    </code>
 </div>   

    <div class="text-h6 q-pt-md">KOF Datenservice REST API</div>
    Yet, machine friendly access to the data on this dashboard site is not limited to the 
    R language. The KOF Datenservice API is a language agnostic interface that allows to 
    dynamically obtain time series in multiple formats such as .json, .html or as .csv 
    and .xlsx spreadsheets. To download the latest update of the same airport
    arrival time series used in the example above as a MS Excel spreadsheet follow the below route.
    A more comprehensive discussion of KOF Datenservice API endpoints 
can be found on <a href="datenservice.kof.ethz.ch">datenservice.kof.ethz.ch</a>


<div class="q-pt-md">
    <code>
https://datenservice.kof.ethz.ch/api/v1/public/ts?keys=ch.zrh_airport.arrival.total&mime=xlsx
    </code>
 </div>   


<div class="text-h6 q-pt-md">Swissdata Format</div>

swissdata is an attempt to improve machine readability of publicly available data.
The project was born based on our need to make macroeconomic time series more accessible,
but it seems extendable to other datasets as well. All datasets on this website are available
in swissdata format. For a thorough description and motivation, visit
https://github.com/swissdata/demo



    
    <div class="text-h5 q-pt-md">Thanks</div>
    We thank all original data providers who made their data accesible and publicly available.
    In particular we want to thank our friends at StatistikZH for their contribution, not only in the form
    of providing relevant data in machine readable fashion 
    (<a target="_blank" href="https://statistikzh.github.io/covid19monitoring/">Gesellschaftsmonitoring</a>),
    but also for the fruitful exchange and their pionieering work for the Swiss opendata community. 

    
    <div class="text-h5 q-pt-md">Feedback</div>
    In case you have feedback, want information to be removed or have suggestions for new time series that
    could provide a timely indicator to monitor the Swiss economy, please contact 
    the <a target="_blank" href="https://kof.ethz.ch/daten.html">KOF Datenservice</a>.
    </div>
    </div>






  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>


