const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../auth/secrets");
const authToken=async(req,res,next)=>{
    try{
        const {token} = JSON.parse(req.headers.authorization);
        if(token){
            jwt.verify(token, JWT_SECRET, (err,decoded)=>{
                if(err){
                    res.status(401).json({message:"token invalid"});
                }
                else{
                    next();
                }
            })
        }
        else{
            res.status(401).json({message:"token needed"});
        }
    }
    catch(err){
        console.log({err});
        next(err);
    }   
};

const validateUser=async(req,res,next)=>{
};

module.exports = {
    authToken,
    validateUser
}