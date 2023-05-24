const baseUrl = `http://127.0.0.1:8000/`;
const registerUrl = baseUrl + 'api/auth/register';

const btn = document.getElementsByClassName("btn")[0];
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userMail");
const userPassInput = document.getElementById("userPass");
const userRepeatedPassInput = document.getElementById("repeatedPass");
const passwordError = document.getElementById("userPasswordError");
const repeatPasswordError = document.getElementById("userRepeatedPasswordError");
const emailError = document.getElementById("mailError");
const userInputError = document.getElementById("userError");
	
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");


console.log(btn	)
// On click On Submit

async function signUp(){
		let values = {
		email : userEmailInput.value,
		username : userNameInput.value,
		password : userPassInput.value,
		first_name : userFirstName.value,
		last_name : userLastName.value

	};
let result = await fetch(registerUrl,{
		method:"POST",
		body:JSON.stringify(values),
		headers:{
			"Content-Type": "application/json",
			"Accept":"application/json"
		}
	})
		await result.json();
		if(result.status === 201){
			window.location.href = `login.html`
		}

	}


btn.addEventListener('click',(e)=>{
e.preventDefault();
function formSubmitted(){
	if(userPassInput.value != userRepeatedPassInput.value){
		repeatPasswordError.innerText = `Password Is Invalid`;
		return
	}else if(userPassInput.value === userRepeatedPassInput.value){
		repeatPasswordError.innerText = ``
	};
	if(userPassInput.value.length < 8 ){
		passwordError.innerText = `Password Atleast Contain Eight Character `;
		return
	}else if(userPassInput.value.length >= 8){
		passwordError.innerText = ``
	};
	if (! userEmailInput.value.includes("@gmail.com")||userEmailInput.value.length <=10) {
		emailError.innerText = `Looks like you forget Something`;
		return
	}else if (userEmailInput.value.includes("@gmail")) {
		emailError.innerText = ``
	};
	if(userNameInput.value.length < 5){
		userInputError.innerText = ` Name Length Atleast Contain Five Character `;
		return
	}else if(userNameInput.value.length >= 5){
		userInputError.innerText = ``
	};
	if (firstName.value == ""||lastName.value ==  "") {
		fNameError.innerText = `Not valid `;
		lNameError.innerText = `Not valid `;
		return
	}
 signUp()


}

formSubmitted()

})                               