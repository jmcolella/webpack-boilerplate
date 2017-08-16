const path = require( 'path' );

const addMiddleware = (app) => {
  const webpack = require( 'webpack' );
  const webpackDevMiddleware = require( 'webpack-dev-middleware' );
  const webpackHotMiddleware = require( 'webpack-hot-middleware' );
  const config = require( '../webpack.config.dev.js' );
  const compiler = webpack( config );
  const middleware = webpackDevMiddleware( compiler, {
    noInfo: true,
    publicPath: config.output.path,
    silent: true,
    stats: 'errors-only',
  });

  app.use( middleware );
  app.use( webpackHotMiddleware( compiler ) );

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;


  app.get( '/', ( req, res ) => {
    fs.readFile( path.join( compiler.outputPath, 'index.html' ), ( err, file ) => {
      if ( err ) {
        res.sendStatus( 404 );
      } else {
        let indexHtml = file.toString();
        res.send( indexHtml );
      }
    });
  });

  return app;
};

module.exports = addMiddleware;
