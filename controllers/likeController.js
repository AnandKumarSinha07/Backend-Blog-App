const Post=require('../model/postModel')
const Like=require('../model/likeModel')

exports.likePost=async (req,res)=>{
    try {
        // fetch the data from the request body
        const {post,user}=req.body;

        // make a object of the new like
        const newLike= new Like({
            post,user
        });
 
        // save the like 
        const savedLike=await newLike.save();

        // update the post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id} },{new:true})
        .populate("likes").exec()
        res.status(200).json({
            post:updatedPost,
        })

        
    } catch (error) {
        console.log("Error inside the like post controller",error)
        res.staus(500).json({
            error:"Error inside the like controller",
            success:false
        })
    }
}


exports.unLikePost=async(req,res)=>{
    try {
        const {post,like}=req.body;
        //find and delete the like collection
        const deltedlike=await Like.findByIdAndDelete({_id:like})

        //update the post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deltedlike._id}},{new:true})

        res.status(200).json({
            post:updatedPost
        })

        
    } catch (error) {
        console.log("Error inside the Unlike  post controller",error)
        res.status(500).json({
            error:"Error inside the unlike controller",
            success:false
        })
    }
}