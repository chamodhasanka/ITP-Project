const router = require("express").Router();
let Supplier = require("../models/Supplier");

router.route("/addsup").post((req,res)=>{

    const supplierID = req.body.supplierID;
    const suppliername = req.body.suppliername;
    const address = req.body.address;
    const itemcode = req.body.itemcode;

    const newSupplier = new Supplier({

        supplierID,
        suppliername,
        address,
        itemcode
    })

    newSupplier.save().then(()=>{

        res.json("Supplier Added")

    }).catch((err)=>{

        console.log(err);
    })

})

router.route("/allsup").get((req,res)=>{

    Supplier.find().then((supplier)=>{

        res.json(supplier)

    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/updatesup/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {supplierID,suppliername,address,itemcode} = req.body;

    const updateSupplier = {
        supplierID,
        suppliername,
        address,
        itemcode

    }
    const update = await Supplier.findByIdAndUpdate(userId, updateSupplier).then(()=>{
        res.status(200).send({status: "user updated" })  
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})
router.route("/deletesup/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Supplier.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delelte", error: err.message});
    })
})
router.route("/getsup/:id").get(async(req,res)=>{
    let userId = req.params.id;
   const user =  await Supplier.findById(userId).then((supplier)=>{
        res.status(200).send({status:"USer fetched", supplier});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with user", error : err.message});
    })
})

module.exports = router;