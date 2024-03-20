import React from "react";
import { useState } from "react";




export default function Add() {

    const [count,setcont]=useState(1);

const add=(e)=>{

    e.preventDefault();
   setcont(count+1)
   

        
    console.log(count);


}

const remove=(e)=>{

    e.preventDefault();
   if(count===1){


   } 
   else{
    setcont(count-1);
    console.log(count);
   }
    
}
  return (
    <>
      <div className="container pt-4 bg-light">
       
        <form>
        <h2 className=" text-center">CONSIGMENT NOTE</h2>


            <div className="container p-4 mt-4 mb-4 d-flex justify-content-between">

           <div>
            <label className="mx-2"  >C. N. NO.</label>
                    <input type="text" className=" border " name="cnno" />
                    </div>

                    <div>
                    <label className="mx-2 " >Date</label>
                    <input type="date" className=" border " name="date" />
                    </div> 
              
      
          </div>

    
        
        
            
            
            

          <div className="container   ">
            <div className="container">
              <div className="row">
                <div className="col ">
                  <h3 className="text-center">Sender</h3>

                  <div className="md-3 text-left ">
                    <label>Sender Name</label>
                    <input type="text" className="form-control" name="email" />
                  </div>

                  <div className="md-3 my-3" >
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                    />
                  </div>
                </div>

                <div className="col"></div>
                <div className="col">
                  <h3 className="text-center">Reciver</h3>

                  <div className="md-3 text-left  ">
                    <label>Reciver Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="sendername"
                    />
                  </div>

                  <div className="md-3 my-2">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="recivername"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
              <div className="md-3 mt-4">
                    <label>Vehicle No:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="vehicleno"
                    />
                  </div>
                  </div>
            </div>
          




          <table className="table mt-3 ">
            
  <thead >
    <tr>
      <th scope="col-1 ">No of Package</th>
      <th scope="co-2">Method of Packing
      <br></br></th>
      <th scope="col-3">Nature of goods said to container</th>
      <th scope="col-4">Actual weight</th>
      <th scope="col-4">Value of goods Qt.</th>
      <th scope="col-5">Private Marks</th>
    </tr>
  </thead>
  <tbody>
  

  {[...Array(count)].map(( ) => (


  
    <tr>
     
      <td> <input type="text" name="noofpackage" className="form-control"  ></input></td>
      <td><input type="text" name="methodofpacking" className="form-control"></input></td>
      <td><input type="text" name="natureofgoods" className="form-control"></input></td>
      <td><input type="text" name="actualweight" className="form-control"></input></td>
      <td><input type="text" name="valuesofgoods" className="form-control"></input></td>
      <td><input type="text" name="privatemarks" className="form-control"></input></td>
    </tr>

  ))

}



    <tr>
      
    </tr>
  
  </tbody>
</table>

<div className=" my-4">
<a href="/add"className="btn  btn-dark   mx-3 " role="button" aria-pressed="true" onClick={add} >Add</a>
<a href="/remove" className="btn btn-dark  active" role="button" aria-pressed="true" onClick={remove} >Remove</a>


          </div>

</div>


          <div className=" my-4 d-flex justify-content-center ">
            <button type="submit" className="btn btn-dark w-50 mx-12  btn-lg ">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
