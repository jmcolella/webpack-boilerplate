const Server  = require( './' );
const port = ( process.env.PORT || 8080 );
const app = Server.app();

app.listen( port );
console.log( 'App listening on localhost:' + port);