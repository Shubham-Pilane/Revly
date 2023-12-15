const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    usertype: { 
        type: String,
        enum: ['Student', 'Tutor'],
        require: true 
    },
    userlanguage: [ 
        {
            type: String,
            required:true
        }
    ],
    subjectexpertise: [
        { 
            type: String 
        }
    ], 
    class: { type: String }

});

const User= mongoose.model("user",userSchema);

module.exports={User};

//sample data

// {
//     "name":"Shubham",
//     "email":"shubham@123",
//     "password":"123",
//     "usertype":"Tutor",
//     "userlanguage":["hindi","english"],
//     "subjectexpertise":["math","science"],
//     "class":"9th"
  
//   }