const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const app = express();

// const mongojs = require('mongojs');
// const db = mongojs('ecommerce', ['products']);
// module.exports = {
//   db: db,
//   mongojs: mongojs
// }

const port = 4000;

app.use(json());
app.use(cors());

const mainCtrl = require('./mainCtrl');

// app.get('/api/products/:id', mainCtrl.getById);
// app.get('/api/products', mainCtrl.getProducts);
// app.post('/api/products', mainCtrl.postProducts);
// app.put('/api/products/:id', mainCtrl.putById);
// app.delete('/api/products/:id', mainCtrl.deleteP);

app.listen( port, () => console.log(`Listening on ${ port }`));
