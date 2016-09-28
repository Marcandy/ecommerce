const express = require('express');
const {json} = require('body-parser');
const mongoose = require('mongoose');
// const cors = require('cors');
const app = express();
const port = 4000;
const mongoUri = 'mongodb://localhost:27017/DBproducts';


// const mongojs = require('mongojs');
// const db = mongojs('ecommerce', ['products']);
// module.exports = {
//   db: db,
//   mongojs: mongojs
// }



app.use(json());
// app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', () => console.log(`Connected to MongoDB at ${ mongoUri}`));


const mainCtrl = require('./products');

// app.get('/api/products/:id', mainCtrl.getById);
// app.get('/api/products', mainCtrl.getProducts);
// app.post('/api/products', mainCtrl.postProducts);
// app.put('/api/products/:id', mainCtrl.putById);
// app.delete('/api/products/:id', mainCtrl.deleteP);

app.listen( port, () => console.log(`Listening on ${ port }`));
