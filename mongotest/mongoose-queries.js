const {ObjectID}= require('mongodb');
var {mongoose}= require("./../server/db/mongoose");
var {Todo}= require("./../server/models/Todo");
//var {User}= require("./../models/User");

var id = "5a8d6c6a3e9d6547502ff39b";

if(!ObjectID.isValid(id)){
    console.log('Not a valid Id');
}
Todo.find({
    _id: id
}).then((todo)=>{
    console.log('todos',todo);
})

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('todos',todo);
})

Todo.findById(id).then((todo)=>{
    if(!todo){
        console.log('no id found');
    }
    console.log('todo by id',todo);
}).catch((e)=>{
    console.log(e)
})