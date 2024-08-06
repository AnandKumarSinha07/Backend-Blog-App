const express=require('express')

const app=express();

require("dotenv").config();

const PORT=process.env.PORT || 8000;

//middleware for parsing json request from body
app.use(express.json());

// require the route file
const blog=require("./routes/blog")

//mount
app.use("/api/v1",blog)

//database connection
const connectWithDb=require("./config/database")
connectWithDb();

// start the server
app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
})

// default route
app.get("/",(req,res)=>{
    res.send("<h1>This is a blog App backend</h1>")
})


