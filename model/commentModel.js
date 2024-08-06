const mongoose=require('mongoose')

const CommentSchema=new mongoose.Schema(
    {
       post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"// reference to the post model
       },

       user:{
        type:String,
        required:true
       },

       body:{
        type:String,
        required:true, 
       }

    }

)
// CommentSchema ko comment nam se export kr rha hu
module.exports=mongoose.model("Comment",CommentSchema)