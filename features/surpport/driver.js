let wd = require('wd')

 function createDriver() {
    return driver = wd.promiseChainRemote({
        host: '127.0.0.0',
        port: 4723
    })
   
}
exports.driver = createDriver()
