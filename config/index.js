var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 8081;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'flashcard-api'
    },
    port: port,
    db: 'mongodb://128.199.91.28:27017/flashcard-db',
  },

  production: {
    root: rootPath,
    app: {
      name: 'flashcard-api'
    },
    port: port,
    db: 'mongodb://128.199.91.28:27017/flashcard-db',
  }
};

module.exports = config[env];
