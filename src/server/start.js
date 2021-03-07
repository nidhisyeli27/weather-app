// Call the exported function from server.js
const app = require ('./server')

const host = 'localhost';
const port = 8000;
// Spin up the server
const server = app.listen(port,host, listening);
function listening(){    
    console.log(`running on localhost: ${port}`);
};