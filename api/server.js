const express = require("express");
// const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./users/users-router");
const server = express();
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.get("/",(req,res)=>{
    res.status(200).json({message:"server is responding"});
});
server.use("/api/users",usersRouter);

server.use((err,req,res,next)=>{
    res.status(500).json({message:err});
});

module.exports=server;