 const {MongoClient,ObjectID} = require('mongodb');
 const assert = require('assert');
 const dbName = "todoDb";
 MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
     if(err){
         return console.log("unable to connevt to mongodb server");
     }
     console.log("connected to mongodb server");
     const db = client.db(dbName);
    /*db.collection('Todo').deleteMany({text:'eat lunch'},( err , result )=>{
        if(err){
            return console.log("unable to delete Todo",err);
        }
        console.log(result);
    })*/
     
    /*db.collection('Todo').deleteOne({text: 'eat lunch'},( err , result )=>{
        if(err){
            return console.log("unable to delete Todo",err);
        }
        console.log(result);
    })*/
    /*db.collection('Todo').findOneAndDelete({completed: false},( err , result )=>{
        if(err){
            return console.log("unable to delete Todo",err);
        }
        console.log(result);
    })*/
    //"5a8c9d2dfcb8c216dc4bd6f6"
    db.collection('Users').deleteMany({Name:'Soukaina'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a8ca2dcfcb8c216dc4bd709")
    }).then(( result )=>{
        
        console.log(JSON.stringify(result,undefined,2));
    });
     //client.close();
 });