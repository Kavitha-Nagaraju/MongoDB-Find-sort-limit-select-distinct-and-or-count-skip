const mongoose = require("mongoose");
const express = require("express");
const cors  = require("cors");

let app = express();
app.use(cors());

app.get("/countriesList",async(req,res)=>{
   let countriesListArr = await Employee.find().distinct("country");
   return res.json(countriesListArr);
});
app.get("/departmentsList",async(req,res)=>{
    let departmentsListArr = await Employee.find().distinct("department");
    return res.json(departmentsListArr);
 });
 app.get("gendersList",async(req,res)=>{
    let gendersListArr = await Employee.find().distinct("gender");
    return res.json(gendersListArr);
 });

app.get("/employees", async(req,res)=>{
  let employeesArr = await Employee.find().or([{country:"Russia"},{gender:"Female"},{age:{$gte:20,$gte:60}}]);
//   .sort("-country").distinct("country").select("firstName lastName department _id")
//   .skip(50).limit(100).countDocuments().and([{country:"India"},{age:{$gte:10,$gte:50}}]).
  res.json(employeesArr);
});





app.listen(4867,()=>{
  console.log("Listen to the port number 4867");
});


let employeeSchema = new mongoose.Schema({
    Id:String,
    firstName:String,
    lastName:String,
    email:String,
    gender:String,
    age:Number,
    department:String,
    profilePic:String,
    salary:Number,
    country:String,
});

let Employee = new mongoose.model("employee",employeeSchema,"employees");

let connectToMDB =async()=>{


   try {
    mongoose.connect("mongodb+srv://nagarajukavibhavi:nagarajukavibhavi@cluster0.okjzs.mongodb.net/tata?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect to MDB");
    let employeesArr = await Employee.find();
    console.log(employeesArr)
    
   } catch (error) {
     console.log("Unable to connect MDB");
     console.log(error);
   }

};

  
connectToMDB();

