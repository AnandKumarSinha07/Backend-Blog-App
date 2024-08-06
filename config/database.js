const mongooes=require("mongoose")
    
require('dotenv').config()

const connectDb=()=>{
    mongooes.connect(process.env.DATABASE_URL,{

    }).then(()=>{
        console.log("Database got conncected succesfully")
    }).catch((error)=>{
        console.log("Error in the database url")
        console.log(error)
        process.exit(1)
    })
}

module.exports=connectDb;

