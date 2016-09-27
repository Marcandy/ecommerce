// const mongojs = require('mongojs');
// const db = mongojs('ecommerce', ['products']);
//
// const  { db }  = require('./server');
// const  { mongojs }  = require('./server');

module.exports = {

   // getProducts(req, res) {
   //    console.log('working');
   //    // return res.send("I am a random string in Get api/products");
   //    var query = req.query;
   //    db.products.find(query, function(err, response) {
   //       if(err) {
   //          res.status(500).json(err);
   //       } else {
   //          res.json(response);
   //       }
   //    });
   // },
   //
   // getById(req, res) {
   //
   //    var idObj = {
   //       _id: mongojs.ObjectId(req.params.id)
   //    };
   //    db.products.findOne(idObj, function(error, response){
   //       if(error) {
   //          res.status(500).json(error);
   //       } else {
   //          res.json(response);
   //       }
   //    });
   //    // return res.send(' I will Get you a present at api/products. It is a ' + req.params.id);
   // },
   //
   // postProducts(req, res) {
   //
   //    db.products.save(req.body, function(error, response){
   //       if(error) {
   //          return res.status(500).json(error);
   //       } else {
   //          return res.json(response);
   //       }
   //    });
   //    // return res.send('Jellyfish live in POST api/products');
   // },
   //
   // putById(req, res) {
   //
   //    if(!req.params.id) {
   //       return res.status(400).send('id query needed');
   //    }
   //
   //    var query = {
   //       _id: mongojs.ObjectId(req.params.id)
   //    };
   //    db.products.update(query, req.body, function(error, response) {
   //       if(error) {
   //          return res.status(500).json(error);
   //       } else {
   //          return res.json(response);
   //       }
   //    });
   //    // res.send('Once I was a walrus but then I was Put in api/products with' + req.params.id);
   // },
   //
   // deleteP(req, res) {
   //    // res.send('I have deleted nothing, especially not' + req.params.id);
   //    if(!req.params.id) {
   //       return res.status(400).send('id query needed');
   //    }
   //
   //    var query = {
   //       _id: mongo.ObjectId(req.params.id)
   //    };
   //
   //    db.products.remove(query, function(error, response) {
   //       if(error) {
   //          return res.status(500).json(error);
   //       } else {
   //          return res.json(response);
   //       }
   //    });
   // }



}
