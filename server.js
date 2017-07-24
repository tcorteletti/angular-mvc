var http = require('http')
    ,app = require('./config/express')

var server_port = process.env.PORTA || 3000
var server_ip_address = process.env.HOSTNAME || '127.0.0.1'

http.createServer(app).listen(server_port, server_ip_address, function() {
    console.log('Servidor ' + this.address().address + ' estutando na porta: ' + this.address().port);
});