import React,{useState,useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Addsupplier.css';
 
import swal from 'sweetalert';

export default function AllSupplier(){

    const [suppliers, setSuppliers] = useState([]);

    const deleteSupplier=(id) =>{
        axios.delete(`http://localhost:8080/supplier/deletesup/${id}`).then(()=>{
            swal({
                title: "Are you sure?",
                text: "The Item Will be Deleted from Supplier List",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("The file has been deleted!", 
                    "success",
                  );  setTimeout(function(){
                    window.location.reload();
                   },1000);
                } else {
                  swal("File Is Not Deleted");
                }
              });
        // ;
        })
      }



    useEffect(() => {
        //fetching all supplier data from the database
        function getSuppliers(){
        axios.get("http://localhost:8080/supplier/allsup").then((res) => {
            setSuppliers(res.data);
            }
        ).catch((err) => {
            alert(err.message);
        })
    }
    getSuppliers();
    }, [])

    return (
        <>
        <Header/><div class="head">
        <br></br>
          <br></br>
          
   <h3> Supplier Management</h3>
    
   </div>
   
   <div class="buttonn">
       <button type="button" class="btn btn-secondary btn-sm">GenerateReport</button>
   </div>
    
       <div class="lft">
<div class="card" >
<br></br>
          <br></br>
          <br></br>
          <br></br>
           
   <table class="table table-bordered">
        <table class="table table-hover" >
         
                   <thead>
                
                       <tr>
              
                           <th >Supplier ID</th>
                           <th>Supplier Name</th>
                           <th>Address</th>
                           <th>Item code</th>
                           <th>Delete</th>
                           <th>Edit</th>

                       </tr>
                   </thead>
                   <tbody>
                       {
                           suppliers.map(function (f) {
                               return <tr>
                                   

                                   <td >{f.supplierID}</td>
                                   <td >{f.suppliername} </td>
                                   <td >{f.address} </td>
                                   <td >{f.itemcode} </td>
                                    

                                   <td > <IconButton aria-label="delete"  onClick={() =>deleteSupplier  (f._id)}>
                                       
               
         <DeleteIcon fontSize="small" />
       </IconButton></td>

       <td > <IconButton aria-label="delete"  >
                                       
               
                                       <EditIcon fontSize="small" />
                                     </IconButton></td>

                               </tr>

                           })
                       }
                   </tbody>
                   </table>
               </table>
</div>
</div>

       </>
   
   )








}