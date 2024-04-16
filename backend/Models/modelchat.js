const mongoose = require('mongoose')
const chatmodels = mongoose.Schema({
    chatName:{type : String,trim : true},
    isGroupChat : {type:Boolean,default:false},
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin:{
        Type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

},
{
    timestamps:true,
}

);

const Chat = mongoose.model("Chat",chatmodels);

module.exports = Chat