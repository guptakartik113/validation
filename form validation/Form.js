// function validateForm() {
//   var name = document.myform.name.value;
//   var phone = document.myform.phone.value;
//   var country = document.myform.country.value;

//   if (name == null || name == "") {
//     alert("Name can't be blank");
//     return false;
//   }
// }
function validateForm() {
  //name validation
  let x = document.forms["myform"]["name"].value;

  if (x == "") {
    document.getElementById("name_id").innerHTML = " *name can't be empty";
    return false;
  } else if (x.length <= 3) {
    document.getElementById("name_id").innerHTML =
      " *enter more than 3 charater";
    return false;
  }

  // dropdown validation
  let y = document.forms["myform"]["country"].value;
  if (y == "") {
    document.getElementById("country_id").innerHTML = " *Select a option";
    return false;
  }
  // Phone number validation
  let z = document.forms["myform"]["phone"].value;
  let number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (z.match(number)) {
    return true;
  } else {
    document.getElementById("phone_id").innerHTML = " *only 10 digits";
    return false;
  }
  //name validation
  let letters = /^[A-Za-z]+$/;
  if (x.match(letters)) {
    return true;
  } else {
    document.getElementById("name_id").innerHTML = " *alphabet characters only";
    return false;
  }
}
