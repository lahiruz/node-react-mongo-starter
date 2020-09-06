
const mongoose =  require("mongoose");
const config =  require("../config");
const { MONGO_URI } = config;

const connectDB = async () =>{
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("DB Connecetd");
}

module.exports = connectDB;
