const {MongoClient,ObjectID} = require('mongodb');
 const assert = require('assert');
 const dbName = "todoDb";
 MongoClient.connect("mongodb://localhost:27017",(err,client)=>{
     if(err){
         return console.log("unable to connevt to mongodb server");
     }
     console.log("connected to mongodb server");
     const db = client.db(dbName);
    
    /*db.collection('Todo').findOneAndUpdate({
        _id: new ObjectID("5a8c979cfcb8c216dc4bd6cc")
    },
    {
        $set:{
            completed: false
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });*/
    db.collection('Users').findOneAndUpdate({
        Name: "lamyae"
    },
    {
        $set:{
            Name: "abdou"
        },
        $inc:{
            Age: -1
        }

    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

    
    
     //client.close();
 });