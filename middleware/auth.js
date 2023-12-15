const jwt=require("jsonwebtoken");
require("dotenv").config();

const authentication= async (req,res,next)=>{
    
    let token = req.headers.authorization;
    
    if(token){
        try{
                       
            token=token.split(" ")[1];
            
            let decode= jwt.verify(token,process.env.secret_token_key);

            if(decode){
                req.user=decode;
                next();
            }else{
                res.status(400).send({
                    isError:true,
                    message:"Token is not valid"
                });
            }
        }catch(error){
            res.status(500).send({
                isError:true,
                message:error.message});
        }
    }else{
        res.status(400).send({
            isError:true,
            message:"Token required"
        });
    }

}

module.exports={authentication}