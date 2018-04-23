const utility = require('utility')

const Formatter = require('../formatter')

class CommonFormatter extends Formatter {
    format(info) {
        return `${utility.logDate()} [${info.level}] ${process.pid} ${info.message}`
    }
}

module.exports = CommonFormatter
