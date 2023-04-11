function validateEmail(email) {
  const reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  if (reg.test(email)) {
    return true;
  }
  return false;
}
function validateMobile(mobile) {
  console.log("validateMobile", mobile);
  if (isNaN(mobile) || mobile.length !== 10) {
    return false;
  }
  return true;
}

function validateForm(myForm) {
  event.preventDefault();
  const firstName = myForm["firstName"].value;
  const lastName = myForm["lastName"].value;
  const email = myForm["email"].value;
  const mobile = myForm["mobile"].value;
  const message = myForm["message"].value;

  if (firstName === "" || lastName === "" || email === "" || mobile === "") {
    alert("Please fill all required fields");
  } else if (!validateEmail(email)) {
    alert("Email is not valid");
  } else if (!validateMobile(mobile)) {
    alert("Phone number is not valid");
  }
}
