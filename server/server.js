
const _ = require('lodash');
var express=require('express');
var bodyParser= require('body-parser');
const {ObjectID}= require('mongodb');
var {mongoose}= require("./db/mongoose");

var {Todo}= require("./models/Todo");
var {User}= require("./models/User");

var app= express();
app.use(bodyParser.json());
app.post("/todos",(req,res)=>{
    var todo= new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })

})

app.get("/todos",(req,res)=>{
    Todo.find().then((docs)=>{
        res.send({docs});
    },(e)=>{
        res.status(400).send(e);
    })
})
app.get("/todos/:id",(req,res)=>{
    var id= req.params.id;
    if(!ObjectID.isValid(id)){
       return  res.status(400).send();
    }
    Todo.findById(id).then((todo)=>{
        if(todo){
            
           return  res.status(200).send(todo);
        }else res.status(404).send();
        
    }).catch((e)=>{
        res.status(400).send(e);
    });
});
app.post("/users", (req, res) => {
    
    var body= _.pick(req.body,['email', 'password']);
    var user= new User(body);
    user.save().then(()=>{
        return user.generateAuthToken();
        
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });

})

  

app.listen(3000,()=>{
    console.log('started on port 3000');
})