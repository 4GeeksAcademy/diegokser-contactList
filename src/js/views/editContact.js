import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/register.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const EditContact = () => {
	const params = useParams();
    const navigate = useNavigate();
	const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
		agenda_slug: "diegokser",
    });

	const editContact = (e)=>{
		e.preventDefault();
		fetch (`https://playground.4geeks.com/apis/fake/contact/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }})
            .then(response => {
				if (response.status === 204) {
				  toast.success("Contact edited successfully");
                  setTimeout(function(){
                    navigate("/")
                }, 2000);
				} else {
				  toast.error("Failed to edit contact");
				}
			})
			.catch(error => {
				toast.error("An unexpected error occurred while editing contact");
			});
		  };

	return (
        <div className="container">
            <div className="card mb3 add-card">
                <h1>Edit your contact</h1>
                <form onSubmit={e => editContact(e)}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" value={formData.full_name} onChange={(data) => setFormData({...formData, full_name: data.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" >Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={formData.email} onChange={(data) => setFormData({...formData, email: data.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label" >Phone</label>
                        <input type="number" className="form-control" id="phone" value={formData.phone} onChange={(data) => setFormData({...formData, phone: data.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label" >Address</label>
                        <input type="text" className="form-control" id="address" value={formData.address} onChange={(data) => setFormData({...formData, address: data.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-submit">Save</button>
                    <Link to="/">Get back to contacts</Link>
                </form>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

