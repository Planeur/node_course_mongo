const mongoose= require ("mongoose");
const validator = require('validator');
const jwt= require('jsonwebtoken');
const _ = require('lodash');
var userSchema = mongoose.Schema({
    
    email:{
        type: String,
        required:true,
        minLength:1,
        trim:true,
        unique : true,
        validate:{
            validator: validator.isEmail ,
            message:'{value} is not a valid email'
        }
    },
    password:{
        type: String,
        require: true,
        minLength: 6
    },
    tokens:[{
        access:{
            type: String,
            require: true
        },
        token:{
            type: String,
            require: true
        }
    }]
    

})

userSchema.methods.toJSON= function(){
    var user= this;
    var userObject =  user.toObject();
   return  _.pick(userObject,['_id','email']);
}

userSchema.methods.generateAuthToken = function(){
    var user= this;
    var access = 'auth';
    var token = jwt.sign({_d: user._id.toHexString(),access},'abc123').toString();
    user.tokens.push({access, token});
    return user.save().then(()=>{
        return token ;
    })
}
var User= mongoose.model('Users',userSchema);

module.exports={User};