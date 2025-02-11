import mongoose from 'mongoose'

function connectoDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connected to db');
    })
}

export default connectoDb