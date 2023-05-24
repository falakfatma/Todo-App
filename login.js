const baseUrl = `http://127.0.0.1:8000/`;
const loginUrl = baseUrl + 'api/auth/login';

const btn = document.getElementsByClassName("btn")[0];
// const userInputName = document.getElementById("userMail");
const userPassInput = document.getElementById("userPass");
const passwordError = document.getElementById("userPasswordError");
// const emailError = document.getElementById("mailError");
	const userInputError = document.getElementById("userError");
	const userInputName = document.getElementById("userName");
// On click On Submit

async function signIn(){
		let data = {
		username : userInputName.value,
		password : userPassInput.value
	};
let result = await fetch(loginUrl,{
		method:"POST",
		body:JSON.stringify(data),
		headers:{
			"Content-Type": "application/json",
			"Accept":"application/json"
		}
	} )
		console.log(result)

		result = await result.json();
		console.log(result)
		localStorage.setItem("User Name",result.username);
		localStorage.setItem("User Email",result.email);
		localStorage.setItem("User first_name",result.first_name);
		localStorage.setItem("User last_name",result.last_name);
		localStorage.setItem("User token",result.token);
		localStorage.setItem("User date_joined",result.date_joined);
		localStorage.setItem("User id",result.id);

		// if(result.status === 201){
			// window.location.href = `todo.html`
		// }

	}


btn.addEventListener('click',(e)=>{
e.preventDefault();
function formLogin(){
	if(userPassInput.value.length < 8 ){
		passwordError.innerText = `Password Atleast Contain Eight Character `;
		return
	}else if(userPassInput.value.length >= 8){
		passwordError.innerText = ``
	};
	if (userInputName.value.length <=5) {
		userError.innerText = `Length must contain five character`;
		return
	}else if (userInputName.value.includes("@gmail")) {
		userError.innerText = ``
	};
 signIn()


}

formLogin()

})                               