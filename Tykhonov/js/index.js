function validateName() {
	var name = document.getElementById("name_input").value;

	if(name.length == 0) {
		document.getElementById("name_error").innerHTML = "Name is required"
		return false;
	}

	if (!name.match(/^[A-Za-z]*$/)) {
		document.getElementById("name_error").innerHTML = "Name should contain only letters"
		return false;
	}

	return true;
}

function validateEmail () {
	var email = document.getElementById("email_input").value;

	if(email.length == 0) {
		document.getElementById("email_error").innerHTML = "Email is required";
		return false;
	}

	if(!email.includes("@")) {
		document.getElementById("email_error").innerHTML = "Phone number is required";
		return false;
	}

	return true;
}

function validatePhone() {
	var phone = document.getElementById("phone_input").value;

	if(phone.length == 0) {
		document.getElementById("phone_error").innerHTML = "Phone number is required";
		return false;
	}

	if(!phone.match(/^[0-9]{10}$/)) {
		document.getElementById("phone_error").innerHTML = "Phone numer should contain only digits";
		return false;
	}

	if(phone.length != 10) {
		document.getElementById("phone_error").innerHTML = "Phone number is invalid";
		return false;
	}

	return true;
}

function validateMessage() {
	var message = document.getElementById("message_input").value;

	if (message.length == 0) {
		document.getElementById("message_error").innerHTML = "Message cannot be empty";
		return false;
	}

	return true;
}

function validateForm() {
	document.getElementById("name_error").innerHTML = "";
	document.getElementById("email_error").innerHTML = "";
	document.getElementById("phone_error").innerHTML = "";
	document.getElementById("message_error").innerHTML = "";

	var nameValid = validateName();
	var emailValid = validateEmail();
	var phoneValid = validatePhone();
	var messageValid = validateMessage()

	if (!nameValid || !emailValid || !phoneValid || !messageValid) {
		return false;
	} else {

	}
}

function showElement(id) {
	document.getElementById(id).style.display = "block";
}

function hideElement(id) {
	document.getElementById(id).style.display = "none";
}

function checkMessage() {
  var message = document.getElementById("message_input").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    document.getElementById("message_error").innerHTML = left + " more characters required";
  } else {
  	document.getElementById("message_error").innerHTML = "";
  }
}

window.onload=function() {
	var messageField = document.getElementById("message_input")

	messageField.addEventListener("keyup", function() {
		checkMessage();
	});

	messageField.addEventListener("focus", function() {
		messageField.style.color = "blue";    
	});

	messageField.addEventListener("blur", function() {
		messageField.style.color = "white";    
	});

	document.getElementById("send_button").addEventListener("click", function() {
		validateForm();
	});


	document.getElementById("light_mode_button").addEventListener("click", function() {
		this.style.display = "none";
		document.getElementById("dark_mode_button").style.display = "block";
		document.body.style.background = "url('img/background_light.jpg') center no-repeat";
		document.body.style.color = "#000";
	});

	document.getElementById("dark_mode_button").addEventListener("click", function() {
		this.style.display = "none";
		document.getElementById("light_mode_button").style.display = "block";
		document.body.style.background = "url('img/background_dark.png') center no-repeat";
		document.body.style.color = "#fff";
	});
}

