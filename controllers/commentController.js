//require Model

const Comment=require("../model/commentModel")
const Post=require('../model/postModel')



// controller logig  
const Createcomment=async(req,res)=>{
       try {
          // fetch data from req body
          const {user,body,post}=req.body;

          //create a new comment object
          const newComment= new Comment({
            post,user,body
          });

          // save the new comment in the database
          const savedComment=await newComment.save() 

          // find the post by ID,add new comment to its comment array

          const updatePost=await Post.findByIdAndUpdate(post, {$push: {comments:savedComment._id} }, {new:true} )
          .populate("comments")
          .exec();

          res.json({
            post:updatePost
          })

       }

       
        catch (error) {
          
          console.log("Error in the comment controller",error)
          res.status(500).json({
            success:false,
            message:"Not able to comment properly",
            error:message.error
          })
       }
}

// exporting the controller
module.exports=Createcomment


