const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: {
				name:"",
				email:"",
				phone:"",
				address:""
			}
		},
		actions: {
			addContact: async (name, email, phone, address) => {
				setStore({
					contact: {
						name:name,
						email: email,
						phone: phone,
						address: address
					}
				});
				// ME hace falta la web de la API
				
				// const store = getStore()
				// const newContact = {
				// 	name : name,
				// 	email : email,
				// 	phone : phone,
				// 	address : address,
				// }
				// try {
				// 	const response = await fetch(
				// 		"URL",{
				// 			method: "POST",
				// 			headers: {
				// 				"Content-Type": "application/json",
				// 			},
				// 			body: JSON.stringify(newContact),
				// 		}
				// 	)
				// 	const result = await response.json();
				// 	if (response.status == 200){
				// 		console.log(result)
				// 	}
				// }catch (error) {
				// 	console.log(error);
				//   }
			}
		}
	}
}

export default getState;
