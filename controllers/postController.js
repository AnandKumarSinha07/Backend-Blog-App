const Post=require('../model/postModel')


exports.CreatePost=async (req,res)=>{
   try {
    const {title,body}=req.body;

    const newPost=new Post({
        title,body
    });

    const savedPost=await newPost.save()
    res.json({
        dbpost:savedPost,    
    });

   } catch (error) {
        console.log("Error inside the postcontroller",error)
        res.status(500).json({
            error:"Error while craetin post",
        })
   }
}


exports.geteAllpost=async (req,res)=>{
    try {
        const post=await Post.find().populate("comments").populate("likes").exec();
        res.status(200).json({
            post,
        })
    } catch (error) {
        console.log("Error inside the postcontroller",error)
        res.status(500).json({
            error:"Error while craetin post",
        })
    }
}