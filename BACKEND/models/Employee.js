const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name : {
        type : String,
        required : true
    },

    employeeID : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    monum : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }

})
const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;