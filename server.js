pathDir = require("path");
global.appRoot = pathDir.resolve(__dirname);
require('./www/mainserver');

//listeng server
server.listen(process.env.PORT, 
function ()
 {
  console.log('server listening on  IP: ' + app.get('ipaddr') + ' and port (HTTP) ' + app.get('port')); 
}
); 