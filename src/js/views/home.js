import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

    const [contacts, setContacts] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/diegokser")
		.then(response =>response.json())
		.then(response => {
			console.log(response)
			setContacts(response)
		})}, [])
	
	const deleteContact = (contact_id) => {
		fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, {
			method: "DELETE",
		})
			.then(response => {
				if (response.status === 204) {
				  toast.success("Contact deleted successfully!");
					navigate("/");;
				} else {
				  toast.error("Failed to delete contact");
				}
			})
			.catch(error => {
				toast.error("An unexpected error occurred while deleting contact");
			});
		  };

	
	return (
	<div className="container-fluid contact-all">
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
		<div className="card mb-3 contact-card">
				{contacts.map((contact, index)=>
				<div className="row g-0" key={index}>
					<div className="col-12 col-md-3 contact-img">
						<img src={rigoImage} className="rounded-circle " alt="Imagen contacto"/>
					</div>
					<div className="col-12 col-md-8 contact-text-container">
						<div className="card-body">
							<div className="row">
								<h5 className="col-10 card-title contact-text mt-3" id="contact-tittle">{contact.full_name}</h5>
								<Link to={`/editContact/${contact.id}`} className="col-1 far fa-edit button-delete"></Link>
								<button className="col-1 fas fa-trash button-delete" onClick={() => {deleteContact(contact.id)}} ></button>
							</div>
							<p className="card-text contact-text"><i className="fas fa-map-marker-alt me-3"></i>{contact.address}</p>
							<p className="card-text contact-text"><i className="fas fa-phone me-3"></i>{contact.phone}</p>
							<p className="card-text contact-text"><i className="fas fa-envelope me-3"></i>{contact.email}</p>
						</div>
					</div>
				</div>
				)}
		</div>
	</div>
)};
