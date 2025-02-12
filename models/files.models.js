import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
path:{
    type:String,
    required :[true,'path is required']
},
originalName:{
    type:String,
    required :[true,'OriginalName is required']
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',

   required :[true,'OriginalName is required']

}


},{timestamps:true})

export const File = mongoose.model('File',fileSchema)