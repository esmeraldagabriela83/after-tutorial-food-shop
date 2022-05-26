console.log("contact page with form");

//JavaScript Client-side Form Validation
//https://www.youtube.com/watch?v=rsd4FNGTRBw

const form = document.getElementById('form');
const username = document.getElementById('username');

const email = document.getElementById('email');

const password = document.getElementById('password');

const password2 = document.getElementById('password2');

const comment = document.getElementById('comment');

const phoneUser = document.getElementById('userPhone');

form.addEventListener('submit', event => {
	event.preventDefault();

	checkInputs();

});

function checkInputs() {
	//get the values from the inputs
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	console.log("usernameValue is : " , usernameValue);
	const emailValue = email.value.trim();
	console.log("emailValue is : " , emailValue);
	const passwordValue = password.value.trim();
		console.log("passwordValue is : " , passwordValue);
	const password2Value = password2.value.trim();
		console.log("passwor2dValue is : " , password2Value);

		const commentValue = comment.value.trim();
			console.log("your comment value is : " , commentValue);

			const phoneUserValue = phoneUser.value.trim();
				console.log("your phone number value is : " , phoneUserValue);

//show error //add error class
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		//add sucess class
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

	//show error //add error class
		if(commentValue === '') {
			setErrorFor(comment, 'Comment cannot be blank');
		} else {
			//add sucess class
			setSuccessFor(comment);
		}

		if(phoneUserValue === '') {
			setErrorFor(phoneUser, 'Phone number cannot be blank');
		} else {
			//add sucess class
			setSuccessFor(phoneUser);
		}

	//user data to display on contact page after clicking on submit btn

	function addUserInfo() {
	  return `
	  The name of user is : ${usernameValue}.
		The email of user is : ${emailValue}.
		The first password of user is : ${passwordValue}.
		The second password of user is : ${password2Value}.
		The comment of user is : ${commentValue}.
		The phone number of user is : ${phoneUserValue}.
	  `;
	};
	//apel functie
	addUserInfo();
	console.log("display user info in console : ", addUserInfo());

	function displayUserData() {
	  const userDataDiv = document.querySelector('.user-data');
	  userDataDiv.innerText = addUserInfo();
		 userDataDiv.addClassName = "container-form";
// userDataDiv.style.margin = "2.5em 1.5em";
 // userDataDiv.style.padding = "40px 60px";
  userDataDiv.style.textAlign = "center";
	userDataDiv.style.color = "#785807";
	userDataDiv.style.fontWeight = "bold";
			userDataDiv.style.borderRadius = "10px";
		userDataDiv.style.boxShadow = "1px 1px 1.5px 1.5px gray";

	  return userDataDiv;
	}
	//apel functie
	displayUserData();

	//user data to display on contact page after clicking on submit btn
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	//add error class
	formControl.className = 'form-control error';
	//add error message inside small
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	//add sucess class
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
