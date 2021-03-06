const mongoose=require('mongoose');
const schema= mongoose.schema;



const contactSchema = new schema ({

    name: { type : String, required : true},
    email : { type : String, required : true},
    phone : { type : String},


});

module.exorts=Contact=mongoose.model("contact",contactSchema)