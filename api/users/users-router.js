const router = require("express").Router();
const userModel = require("./users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../auth/secrets");
const {authToken} = require("../middleware/middleware");
router.post("/login",async(req,res,next)=>{
    try{
        const {username,password} = req.body;
        if(username&&password){
            const user = await userModel.getByUsername(username);
            if(!user){
                return res.status(401).json({message:"user not found"});
            }
            const passwordValid = await bcrypt.compare(password,user.password);
            if(!passwordValid){
                return res.status(401).json({message:"invalid credentials"})
            }
            const options = {
                expiresIn:"1d"
            }
            const resObj = {
                message:"log in successful",
                token:jwt.sign({
                    subject:user.id,
                    username:user.username,
                },JWT_SECRET,options)
            };
            res.status(200).json(resObj);
        }
        else{
            res.status(401).json({message:"username and email needed"});
        }
    }
    catch(err){
        next(err);
    }
    
});

router.post("/register",async(req,res,next)=>{
    try{
        const {username,password} = req.body;
        console.log("body: ",req.body);
        if(!username || !password){
            res.status(400).json({message:"username and password needed"});
            return;
        }
        console.log("getbyusername starts");
        const user = await userModel.getByUsername(username);
        console.log("getbyusername ends");
        if(user){
            res.status(400).json({message:"user already exists"});
            return;
        }
        console.log("inserting")
        const newUser = await userModel.insert({username,password});
        console.log("insert successful")
        res.status(201).json(newUser);
    }
    catch(err){
        next(err);
    }
    
});

router.get("/",authToken,async(req,res,next)=>{
    try{
        const users = await userModel.get();
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }

});


module.exports = router;