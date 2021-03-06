const mongoose= require("mongoose")


const dbConnect= async ()=> {
    try {

       let result=await mongoose.connect(process.env.DB_URI,{ useUnifiedTopology: true 
       , useNewUrlParser: true });
       console.log('Data base is connected')
    } catch (error) {
     console.log(`can not connect to DB ${error}`)   
    }

    
} 

module.exports=dbConnect;