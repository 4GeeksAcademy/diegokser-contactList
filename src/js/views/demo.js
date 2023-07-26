import React, { useContext, useEffect, useState } from "react";
import "../../styles/demo.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
	const {actions} = useContext(Context)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

	const hadnleAddContact= async (e)=>{
		e.preventDefault();
		actions.addContact(formData.name, formData.email, formData.phone, formData.address)
	}
	
	useEffect(() => {
        console.log(formData);
    }, [formData]);

	return (
		<div className="container">
			<form onSubmit={(e) => hadnleAddContact(e)}>
				<div className="mb-3">
					<label htmlFor="fullName" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="fullName" value={formData.name} onChange={(data) => setFormData({...formData, name: data.target.value})}/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label" >Email address</label>
					<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={formData.email} onChange={(data)=>setFormData({...formData, email: data.target.value})}/>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label" >Phone</label>
					<input type="number" className="form-control" id="phone" value={formData.phone} onChange={(data)=>setFormData({...formData, phone: data.target.value})}/>
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label" >Address</label>
					<input type="text" className="form-control" id="address" value={formData.address} onChange={(data)=>setFormData({...formData, address: data.target.value})}/>
				</div>
				<button type="submit" className="btn btn-primary btn-submit">Submit</button>
				<Link to="/">Get back to contacts</Link>
			</form>
		</div>
	);
};
