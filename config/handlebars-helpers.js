const moment = require('moment')
module.exports = {
  ifCond: function(a, b, options) {
    if (a === b) {
      return options.fn(this)
    }
    return options.inverse(this)
  },
  ifNotCond: function(a, b, options) {
    if (a !== b) {
      return options.fn(this)
    }
    return options.inverse(this)
  },
  moment: function(a) {
    return moment(a).format('YYYY-MM-DD hh:mm')
  }
}
