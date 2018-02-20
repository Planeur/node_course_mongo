 const {MongoClient,ObjectID} = require('mongodb');
 const assert = require('assert');
 const dbName = "todoDb";
 MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
     if(err){
         return console.log("unable to connevt to mongodb server");
     }
     console.log("connected to mongodb server");
     const db = client.db(dbName);
    /* db.collection('Users').insertOne({
         Name: 'Soukaina',
         Age:'28',
         Location:'Tetouan'
     },( err , result )=>{
        if(err){
            return console.log("unable to insert Todo",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
     })*/
     //const findDocuments = function(db, callback) {
        // Get the documents collection
        
        // Find some documents
        db.collection('Todo').find({
            _id: new ObjectID('5a8b652d1aa6ae1fd038e672')
        }).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(JSON.stringify(docs,undefined,2));
          
        });
    
     client.close();
 });