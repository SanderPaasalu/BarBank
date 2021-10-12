const mongoose = require('mongoose')

// Describe users collection
module.exports= mongoose.model('account', new mongoose.Schema({
        name: {type:String, required:true, minlength:2, maxlength:50},
        balance:{type:Number, required:true, minlength:1},
        currency:{type:String, required:true},
        account_number:{type:String, unique:true, required:true, maxlength:100},
        userId:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"user"}
    }, {
        toJSON:{
            transform: function (doc, ret){
                delete ret._id
                delete ret.__v
            }
        }
    }

));