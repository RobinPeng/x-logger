const { Writable } = require('stream')

const CommonFormatter = require('./formatter/common')

class Transport extends Writable {
    constructor(options) {
        super(options)

        this.formatter = options.formatter || new CommonFormatter()
    }

    _write(chunk, encoding, callback) {
        // Todo 格式化
        if (chunk) {
            return this.log(chunk, callback)
        }
        return callback(null)
    }
}

module.exports = Transport
