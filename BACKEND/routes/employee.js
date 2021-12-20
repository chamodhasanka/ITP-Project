const router = require("express").Router();
let Employee = require("../models/Employee");

router.route("/addemp").post((req,res)=>{

    const name = req.body.name;
    const employeeID = req.body.employeeID;
    const email = req.body.email;
    const monum = req.body.monum;
    const salary = req.body.salary;
    const address = req.body.address;

    const newEmployee = new Employee({

        name,
        employeeID,
        email,
        monum,
        salary,
        address
    })

    newEmployee.save().then(()=>{

        res.json("Employee Added")

    }).catch((err)=>{

        console.log(err);
    })

})

router.route("/allemp").get((req,res)=>{

    Employee.find().then((employee)=>{

        res.json(employee)

    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/updateemp/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name,employeeID,email,monum,salary,address} = req.body;

    const updateEmployee = {
        name,
        employeeID,
        email,
        monum,
        salary,
        address

    }
    const update = await Employee.findByIdAndUpdate(userId, updateEmployee).then(()=>{
        res.status(200).send({status: "Employee updated" })  
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})
router.route("/deleteemp/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delelte", error: err.message});
    })
})
router.route("/getemp/:id").get(async(req,res)=>{
    let userId = req.params.id;
   const user =  await Employee.findById(userId).then((employee)=>{
        res.status(200).send({status:"USer fetched", employee});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with user", error : err.message});
    })
})

module.exports = router;