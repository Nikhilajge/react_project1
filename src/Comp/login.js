import React from "react"
import { Link } from "react-router-dom";

export default function Login(){

    return(

        <>
     	<div className="container p-5">
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card card-sh">
					<div className="card-header">
						<p className="text-center fs-3 ">Login Page</p>
					
					</div>
					<div className="card-body">
						<form action="/" >
						
						
						
						<div className="md-3 ">
						<label>Email</label>
						<input type="Email" className="form-control" name="email"/>
						</div>
						
						
						<div className="md-3">
						<label>Password</label>
						<input type="Passwor" className="form-control" name="password"/>
						</div>
						
						
						<br/>
						<button type="submit" className="btn btn-dark col-md-12">Login</button>
						<div className="text-center ">Dont have account <Link to="/register" className="text-decoration-none">Create account</Link>
						</div>
						
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>


                 
  


        </>
    );
}