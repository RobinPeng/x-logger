const Transport = require('../transport')

const ConsoleFormatter = require('../formatter/console')

class ConsoleTransport extends Transport {
    constructor(options) {
        options = options || {}
        if (!options.formatter) {
            options.formatter = new ConsoleFormatter()
        }
        super(options)
    }

    log(data, callback) {
        console.log(this.formatter.format(data))
        if (callback) {
            callback()
        }
    }
}

module.exports = ConsoleTransport
