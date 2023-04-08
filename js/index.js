// display And Hide Pages
var SignButton = document.getElementById("sign-btn");
var backForForget = document.getElementById("back-button");
var returnBtn = document.getElementById("return-btn");
var forgetButton = document.getElementById("forget-btn");
var forgetPage = document.getElementById("forget-page");
var signUp = document.getElementById("sign-Page");
var loginPage = document.getElementById("log-in");

function displayAndHide(d1, d2, d3) {
  loginPage.style.display = d1;
  signUp.style.display = d2;
  forgetPage.style.display = d3;
}
forgetButton.onclick = (e) => {
  e.preventDefault();
  displayAndHide("none", "none", "block");
};
SignButton.onclick = (e) => {
  e.preventDefault();
  displayAndHide("none", "block", "none");
};
backForForget.onclick = (e) => {
  e.preventDefault();
  displayAndHide("block", "none", "none");
};
returnBtn.onclick = function (e) {
  e.preventDefault();
  window.location.reload();
  displayAndHide("block", "none", "none");
};

// Create popUp
var signUpButton = document.getElementById("sign-up");
signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Create Elements
  var login = document.getElementById("log-in");
  var overlay = document.createElement("div");
  var PopupBox = document.createElement("div");
  var close = document.createElement("span");
  var h3 = document.createElement("h3");
  // Create innerContent
  close.className = "close-button btn text-white";
  close.textContent = "Close";
  h3.textContent = "Not Avilable Now";
  // Create Classes
  overlay.className = "overlay position-absolute";
  PopupBox.className = "pop-up position-absolute text-center";
  // Append
  PopupBox.appendChild(h3);
  login.appendChild(overlay);
  login.appendChild(PopupBox);
  PopupBox.appendChild(close);
  // close button
  close.onclick = function () {
    PopupBox.remove();
    overlay.remove();
  };
});

// Validate email and password value
var userName = document.getElementById("email-login");
var password = document.getElementById("password");
var pNotvalid = document.querySelector(".not-valid");
var pEmpty = document.querySelector(".empty");
var pNotExist = document.querySelector(".not-exist");
var PsswordLess6 = document.querySelector(".Pss-less6");
var pPsswordEmpty = document.querySelector(".Pss-empty");
var allEmpty = document.querySelector(".all-empty");
var loginBtn = document.getElementById("log-btn");
var shouldsignP = document.querySelector(".should-sign");
//email validate
var regex = /^([a-zA-Z0-9\._]+)@([a-z-A-Z0-9])+.(.[a-z]+)?$/gi;

//password validate
password.onblur = function () {
  if (password.value.length < 6 && password.value.length > 0) {
    PsswordLess6.classList.remove("d-none");
  }
  if (password.value === "") {
    pPsswordEmpty.classList.remove("d-none");
  }
};
const userD = localStorage.getItem("user");
let userValues = userD ? Object.values(JSON.parse(userD)) : [];
const userEmail = userValues[2];
const userPassword = userValues[3];
const productsPage = document.getElementById("products-page");
loginBtn.onclick = (e) => {
  e.preventDefault();
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();

  if (userNameValue === "" && passwordValue === "") {
    allEmpty.classList.remove("d-none");
  } else if (userNameValue === "") {
    pEmpty.classList.remove("d-none");
  } else if (!userNameValue.match(regex)) {
    pNotvalid.classList.remove("d-none");
  } else if (passwordValue === "") {
    pPsswordEmpty.classList.remove("d-none");
  } else if (passwordValue.length < 6) {
    PsswordLess6.classList.remove("d-none");
  } else if (userNameValue === userEmail && passwordValue === userPassword) {
    loginPage.style.display = "none";
    signUp.style.display =  "none";
    forgetPage.style.display =  "none";
    productsPage.style.display =  "block";
  } else if (userValues.length === 0) {
    // check if user data is available
    shouldsignP.classList.remove("d-none");
  } else {
    incorrectP.classList.remove("d-none");
  }
};

//remove warning text
userName.onfocus = function () {
  pNotvalid.classList.add("d-none");
  pEmpty.classList.add("d-none");
  allEmpty.classList.add("d-none");
  shouldsignP.classList.add("d-none");
};
password.onfocus = function () {
  pPsswordEmpty.classList.add("d-none");
  PsswordLess6.classList.add("d-none");
  allEmpty.classList.add("d-none");
  shouldsignP.classList.add("d-none");
};
//  handling login
var loginForm = document.getElementById("log-in");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
//Listen for register form submission
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var emailSign = document.getElementById("email-sign");
var newPass = document.getElementById("new-pass");
var reeEnter = document.getElementById("ree-enter");
var signUpnowBtn = document.getElementById("signUp-now");
var emptyName = document.querySelector(".empty-name");
var eNotvalid = document.querySelector(".e-not-valid");

signUpnowBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //check frist&&last name
  if (firstName.value === "" || lastName.value === "") {
    emptyName.classList.remove("d-none");
  } else if (firstName.value != "" && lastName.value != "") {
    emptyName.classList.add("d-none");
  }
  firstName.onfocus = function () {
    return emptyName.classList.add("d-none");
  };
  lastName.onfocus = function () {
    return emptyName.classList.add("d-none");
  };

  if (
    emailSign.value !== "" &&
    emailSign.value !== emailSign.value.match(regex)
  ) {
    eNotvalid.classList.remove("d-none");
  }
  if (emailSign.value.match(regex)) {
    eNotvalid.classList.add("d-none");
  } else if (emailSign.value === "") {
    pEmpty.classList.remove("d-none");
  }
  emailSign.onfocus = function () {
    return eNotvalid.classList.add("d-none");
  };
  //check bassword length
  var passNotMatch = document.querySelector(".pass-check");
  var passLess = document.querySelector(".Pss-less");
  if (newPass.value !== reeEnter.value) {
    passNotMatch.classList.remove("d-none");
  }
  if (newPass.value.length < 6 && reeEnter.value.length < 6) {
    passLess.classList.remove("d-none");
  }
  newPass.onfocus = function () {
    passNotMatch.classList.add("d-none");
    passLess.classList.add("d-none");
  };
  reeEnter.onfocus = function () {
    passNotMatch.classList.add("d-none");
    passLess.classList.add("d-none");
  };
  var savedSuc = document.querySelector(".Saved-succesfuly");
  //validate for all and submit to localstorage
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    emailSign.value.match(regex) &&
    newPass.value === reeEnter.value &&
    newPass.value.length >= 6 &&
    reeEnter.value.length >= 6
  ) {
    savedSuc.classList.remove("d-none");
    var userData_1 = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailSign.value,
      password: newPass.value,
    };
    window.localStorage.setItem("user", JSON.stringify(userData_1));
  }
});
//hide and show password
var eyes = document.querySelectorAll(".eyes");
var showEyes = document.querySelectorAll(".unlock-eye");
var firstSp = newPass.parentElement.lastElementChild;
var lastSp = reeEnter.parentElement.lastElementChild;
var state1 = false;
var state2 = false;
firstSp.onclick = function () {
  if (state1) {
    newPass.setAttribute("type", "password");
    state1 = false;
    firstSp.firstElementChild.classList.remove("d-none");
    firstSp.lastElementChild.classList.add("d-none");
  } else {
    newPass.setAttribute("type", "text");
    state1 = true;
    firstSp.firstElementChild.classList.add("d-none");
    firstSp.lastElementChild.classList.remove("d-none");
  }
};
lastSp.onclick = function () {
  if (state2) {
    reeEnter.setAttribute("type", "password");
    state2 = false;
    lastSp.firstElementChild.classList.remove("d-none");
    lastSp.lastElementChild.classList.add("d-none");
  } else {
    reeEnter.setAttribute("type", "text");
    state2 = true;
    lastSp.firstElementChild.classList.add("d-none");
    lastSp.lastElementChild.classList.remove("d-none");
  }
};
