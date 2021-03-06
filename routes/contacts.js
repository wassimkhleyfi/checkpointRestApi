const express=require("express");
const router=express.Router();
const Contact=require("../models/Contact");


// test router
router.get("/",(req,res)=> {
res.send("Hello");
});

// Post contacts
// get all contacts
// get one contact by id
// delete one contact by id
// update a contact bu id


// @POST method
// @desc post a contact 
// @path : http://localhost:5000/api/contact/
// Params  Body

router.post("/", async (req,res)=> {
    try {
        const newContact = new Contact (req.body);
       const response =  await newContact.save();
       res.send (response);
}  catch (error) {
    res.status(400).send({message : "can not save it"});
}
});

// // @GET method
// // @desc GET ALL contact
// // @path: http://localhost:5000/api/contact/
router.get("/", async (req,res)=> {
    try {
        const result= await Contact.find();
        res.send({ response : result, message : "getting contacts successfuly"});
    } catch (error) {
        res.status(400).json({message : "can not get contacts"});
    }
    });
    
    
//     // @GET method
//     // @desc GET one contact by id
//     // @path: http://localhost:5000/api/contact/:id
//     // @Params id
    router.get("/:id", async (req,res)=> {
        try {
            const result= await Contact.findOne({_id: req.params.id});
            res.send({ response : result, message : "getting contact successfuly"});
        } catch (error) {
            res.status(400).send({message : "there is no contact with this id"});
        }
        });
    
//     // @DELETE method
//     // @desc delete one contact by id
//     // @path: http://localhost:5000/api/contact/:id
//     // @Params id
    router.delete("/:id", async (req,res)=> {
        try {
            const result= await Contact.deleteOne({_id: req.params.id});
            res.send({ response : result, message : "deleted"});
        } catch (error) {
            res.status(400).send({message : "not deleted"});
        }
        });
    
//         // @put method
//     // @desc update one contact by id
//     // @path: http://localhost:5000/api/contact/:id
//     // @Params id body
    router.put("/:id", async (req,res)=> {
        try {
            const result= await Contact.updateOne({_id: req.params.id}, {$set: {...req.body}});
            res.send({ response : result, message : "updated"});
        } catch (error) {
            res.status(400).send({message : "not updated"});
        }
        });




module.exports= router;