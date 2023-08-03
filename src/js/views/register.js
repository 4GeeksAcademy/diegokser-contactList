import React, { useEffect, useState } from "react";
import "../../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
		agenda_slug: "diegokser",
    });
    const navigate = useNavigate();

    const handleRegister = (event)=>{
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const handleAddContact = (e) => {
        e.preventDefault();
	
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            toast.success("Contact added successfully!");
            setTimeout(function(){
                navigate("/")
            }, 2000);
        })
        .catch(error => {
            console.error("error:", error);
            toast.error("An unexpected error occurred while adding contact");
        });
    };
	
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className="container">
            <div className="card mb3 add-card">
                <form onSubmit={e => handleAddContact(e)}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" name="full_name" onChange={handleRegister}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" >Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={handleRegister}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label" >Phone</label>
                        <input type="number" className="form-control" id="phone" name="phone" onChange={handleRegister}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label" >Address</label>
                        <input type="text" className="form-control" id="address" name="address" onChange={handleRegister}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-submit">Submit</button>
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