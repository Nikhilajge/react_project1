

import React from "react";


export default function Register(){

    return(<>
    
    
    
<div className="container p-5">
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card card-sh">
					<div className="card-header">
						<p className="text-center fs-3 ">Register Page</p>
					
						
					</div>
					<div className="card-body">
						<form action="/">
						<div className="md-3">
						<label>Full Name</label>
						<input type="name" className="form-control" name="fullname"/>
						</div>
						
						
						<div className="md-3">
						<label>Email</label>
						<input type="Email" className="form-control" name="email"/>
						</div>
						
						
						<div className="md-3">
						<label>Password</label>
						<input type="Passwor" className="form-control" name="password"/>
						</div>
						
						
						<br/>
						<button type="submit" className="btn btn-dark col-md-12">Register</button>
						
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    
    </>)
}