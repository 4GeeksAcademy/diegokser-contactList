import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid">
		<div className="card mb-3 contact-card">
			<div className="row g-0">
				<div className="col-12 col-sm-3 contact-img">
				<img src={rigoImage} className="img-fluid rounded-circle " alt="Imagen contacto"/>
				</div>
				<div className="col-12 col-sm-9">
					<div className="card-body">
						<h5 className="card-title contact-text mt-3">Nombre</h5>
						<p className="card-text contact-text"><i className="fas fa-map-marker-alt me-3"></i>Direccion</p>
						<p className="card-text contact-text"><small className="text-body-secondary "><i className="fas fa-phone me-3"></i>Tlf</small></p>
						<p className="card-text contact-text"><small className="text-body-secondary "><i className="fas fa-envelope me-3"></i>Email</small></p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
