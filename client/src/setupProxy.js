const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:3001/' }));

  const cors = require('cors');

  //app.use(cors());
  
  app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
  }));
};
