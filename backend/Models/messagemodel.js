const mongoose =  require("mongoose")

const message_model = mongoose.Schema({
    sender :{ type: mongoose.Schema.Types.ObjectId, ref:"Users"},
    content:{type:String,trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId, ref : "Chat"},
},
{
    timestamps:true,
}
);

const Message = mongoose.model('Message',message_model)

module.exports = Message