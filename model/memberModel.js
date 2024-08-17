import mongoose from "mongoose";


const memberSchema = new mongoose.Schema({
    membername:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:Date,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    gender:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    workEmail:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    teams:{
        type:[],
        required:true
    }

}, {timestamps:true})


export default mongoose.model("Member", memberSchema);