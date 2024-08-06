// First we import controller second we used router

const express=require('express');
const router=express.Router();

const dummy = require('../controllers/dummycontroller');
const comment = require('../controllers/commentController');
const {CreatePost,geteAllpost}=require('../controllers/postController')
const {likePost,unLikePost}=require('../controllers/likeController')



router.get("/dummy",dummy);
router.post("/comments/create",comment);
router.post("/posts/create",CreatePost);
router.get("/posts",geteAllpost);
router.post("/likes",likePost);
router.post('/likes/unlike',unLikePost);

module.exports=router;
