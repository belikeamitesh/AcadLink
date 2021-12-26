const http = require('http');
const app = require('./server');
const DB = require('./utils/DB');

const server = http.createServer(app);

DB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log('Server');
      // Implement socket.io
    });
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(0);
  });
