const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 'hour': 'numeric', 'minute': 'numeric', 'second': 'numeric' }
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: {},
      tableArray: []
    }
  },
  methods: {
    handleDataChange (data) {
      let parsedData = JSON.parse(data)
      let newTableObj = this.convertArrayToObj(parsedData)
      this.tableData = this.generateTableData(newTableObj)
    },
    convertArrayToObj (array) {
      let tableEntries = {}
      array.forEach(function (item) {
        Object.assign(tableEntries, {
          [ item[0] ]: item[1]
        })
      })
      return tableEntries
    },
    generateTableData (newTableObj) {
      let tableData = Object.assign({}, this.tableData)
      for (let key in newTableObj) {
        if (tableData[key]) {
          if (this.tableData[key].oldValue) {
            tableData[key] = {
              oldValue: [...this.tableData[key].oldValue, this.tableData[key].newValue],
              newValue: this.roundOffPrice(newTableObj[key]),
              lastUpdated: new Date().toLocaleString(undefined, options)
            }
          } else {
            tableData[key] = {
              oldValue: [this.tableData[key].newValue],
              newValue: this.roundOffPrice(newTableObj[key]),
              lastUpdated: new Date().toLocaleString(undefined, options)
            }
          }
        } else {
          tableData[key] = {
            newValue: this.roundOffPrice(newTableObj[key]),
            lastUpdated: new Date().toLocaleString(undefined, options)
          }
        }
      }
      return tableData
    },
    roundOffPrice: price => Math.round(price * 100) / 100
  },
  created () {
    var self = this
    let socket = new WebSocket('ws://stocks.mnet.website')

   // Show a connected message when the WebSocket is opened.
    socket.onopen = function (event) {
      console.log('Connected to: ' + event.currentTarget.URL)
    }
    socket.onmessage = function (event) {
      self.handleDataChange(event.data)
    }
  }
}
