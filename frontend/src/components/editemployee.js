import React, { useState,useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios";
import swal from 'sweetalert';



export default function EditForm() {
    const { id } = useParams();

    const[name, setname] = useState("");
    const[employeeID, SetemployeeID] = useState("");
    const[email, setemail] = useState("");
    const[monum, setmonum] = useState("");
    const[salary, Setsalary] = useState("");
    const[address, setaddress] = useState("");
   

    useEffect(() => {
      async function getData(){
            const result = await axios.get(`http://localhost:3000/employee/getemp/${id}`)

            let BillData = result.data.employee
            if ( BillData) {
                setname( BillData.name);
                SetemployeeID( BillData.employeeID);
                setemail( BillData.email);
                setmonum( BillData.monum);
                Setsalary( BillData.salary);
                setaddress( BillData.address);
            } else {
                
            }
        }
        getData()
    }, [])

    
    function sendData(e) {
        e.preventDefault();

        const newEmployee = {
            name,
            employeeID,
            email,
            monum,
            salary,
            address
        }
        axios.put(`http://localhost:3000/employee/update/${id}`, newEmployee).then(() => {
            alert("Employee Updated")
            swal({
                title: "Success!",
                text: "Employee Updated Successfully",
                icon: "success",
                button: "Ok",
              });
            window.location = "/allemp"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }

return (

    <div className = "container">
    <br></br>
    <br></br>
    <br></br>
      <h1><center> Employee Registration</center></h1>
    <br></br>
    <br></br>
      <form onSubmit={sendData}>
<div class="mb-3">
<label for="name" class="form-label"> Name </label>
<input required type="string" class="form-control" id="name"value={name} onChange ={(e)=>{
 
  setname(e.target.value);
}} ></input>

</div>
<div class="mb-3">
<label for="employeeID" class="form-label">Employee ID</label>
<input required type="string" class="form-control" id="employeeiD"value={employeeID} onChange ={(e)=>{

 SetemployeeID(e.target.value);
}}></input>
</div>

<div class="mb-3">
<label for="email" class="form-label">Email </label>
<input required type="string" class="form-control" id="email" value={email} onChange ={(e)=>{

setemail(e.target.value);
}}></input>
</div>

<div class="mb-3">
<label for="monum" class="form-label">Mobile Number</label>
<input required type="string" class="form-control" id="monum" value={monum} onChange ={(e)=>{

setmonum(e.target.value);
}}></input>
</div>

<div class="mb-3">
<label for="salary" class="form-label">Salary </label>
<input required type="string" class="form-control" id="salary" value={salary} onChange ={(e)=>{

                    Setsalary(e.target.value);
}}></input>
</div>

<div class="mb-3">
<label for="address" class="form-label">Address </label>
<input required type="string" class="form-control" id="address" value={address} onChange ={(e)=>{

setaddress(e.target.value);
}}></input>
</div>

<div className='button'>
             <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
             </div>
</form>

  </div>
)
}