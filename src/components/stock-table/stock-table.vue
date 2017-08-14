<template>
<md-table>
  <md-table-header>
    <md-table-row>
      <md-table-head class="header">Ticker</md-table-head>
      <md-table-head class="header">Price</md-table-head>
      <md-table-head class="header">Time</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(row, index) in tableData"  :key="index">
    <md-table-cell>{{index}}</md-table-cell>
      <md-table-cell v-if="!row.oldValue" style="background-color:#fff" >{{row.newValue}}</md-table-cell>
      <md-table-cell v-if="row.oldValue && row.newValue>=row.oldValue[row.oldValue.length-1]" style="background-color:#4CAF50">{{row.newValue}}</md-table-cell>
      <md-table-cell v-if="row.oldValue && row.newValue<row.oldValue[row.oldValue.length-1]" style="background-color:#F44336">{{row.newValue}}</md-table-cell>
      <md-table-cell>{{row.lastUpdated}}</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>
</template>

<script src='./stock-table.js'></script>

<style>
.md-table .md-table-head.header{
  text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    color: #000000;
}
.md-table .md-table-cell.md-has-action .md-table-cell-container{
  justify-content:space-around;
  
}
.md-table-cell-container{
font-weight:500;
}
</style>


