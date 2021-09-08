const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    supplierID : {
        type : String,
        required : true
    },

    suppliername : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    itemcode : {
        type : String,
        required : true
    }

})
const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;