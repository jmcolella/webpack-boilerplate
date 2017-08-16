const path = require( 'path' );
const express = require( 'express' );
const setup = require( './middlewares' );

module.exports = {
  app: () => {
    const app = express()

    return setup(app);
  }
}
