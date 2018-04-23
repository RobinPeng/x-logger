const utility = require('utility')
const chalk = require('chalk')

const Formatter = require('../formatter')

class ConsoleFormatter extends Formatter {
    format(info) {
        let colorFun = 'green'
        switch (info.level) {
            case 'EMERGENCY':
            case 'ALERT':
            case 'CRITICAL':
            case 'ERROR':
                colorFun = 'red'
                break
            case 'WARN':
                colorFun = 'yellow'
                break
            case 'DEBUG':
                colorFun = 'blue'
                break
            default:
        }
        return chalk[colorFun](
            `${process.pid}|${process.title} ${utility.logDate()} [${info.level}] ${
                info.message
            }`
        )
    }
}

module.exports = ConsoleFormatter
