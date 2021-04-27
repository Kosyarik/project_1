
function validateForm() {
	const checkName = document.querySelector('.form-check-name').value;
	if (checkName === "") {
		window.showAlertForm('put the filds', false);
		return false;
	}

	const checkNum = document.querySelector('.form-check-num').value;
	if (isNaN(checkNum)) {
		window.showAlertForm('put good numer', false);
		return false;
	} else {

	}
}

