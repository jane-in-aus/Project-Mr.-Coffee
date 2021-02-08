document.addEventListener("DOMContentLoaded", () => {
  const firstName = document.querySelector("input[name=first_name]");
  const secondName = document.querySelector("input[name=second_name]");
  const telNumber = document.querySelector("input[name=phone]");
  const mailAdr = document.querySelector("input[name=email]");
  const textArea = document.querySelector("textarea[name=msg_area]");

  const reName = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/;

  const reTel = /^[0-9+()\. \/]{4,15}$/;

  const reMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  //validate information
  const formValidation = function () {
    //first name
    if (firstName.value === "") {
      document.getElementById("error_name").innerHTML =
        " Please enter your name *";
      document.querySelector("input[name=first_name]").style.border =
        "2px solid Red";
      firstName.focus();
      return false;
    }
    if (!reName.test(firstName.value)) {
      document.getElementById("error_name").innerHTML =
        " Error: Input contains invalid characters!";
      document.querySelector("input[name=first_name]").style.border =
        "2px solid Red";
      firstName.focus();
      return false;
    }

    //second name
    if (secondName.value === "") {
      document.getElementById("error_second_name").innerHTML =
        " Please enter your second name *";
      document.querySelector("input[name=second_name]").style.border =
        "2px solid Red";
      secondName.focus();
      return false;
    }
    if (!reName.test(secondName.value)) {
      document.getElementById("error_second_name").innerHTML =
        " Error: Input contains invalid characters!";
      document.querySelector("input[name=second_name]").style.border =
        "2px solid Red";
      secondName.focus();
      return false;
    }
    //phone number
    if (telNumber.value === "") {
      telNumber.focus();
    } else if (!reTel.test(telNumber.value)) {
      document.getElementById("error_phone").innerHTML =
        " Error: Input contains invalid characters!";
      document.querySelector("input[name=phone]").style.border =
        "2px solid Red";
      telNumber.focus();
      return false;
    }
    //mail address
    if (mailAdr.value === "") {
      document.getElementById("error_email").innerHTML =
        " Please provide your mail adress *";
      document.querySelector("input[name=email]").style.border =
        "2px solid Red";
      mailAdr.focus();
      return false;
    }
    if (!reMail.test(mailAdr.value)) {
      document.getElementById("error_email").innerHTML =
        " Error: Input contains invalid characters!";
      document.querySelector("input[name=email]").style.border =
        "2px solid Red";
      mailAdr.focus();
      return false;
    }
    //textarea
    if (textArea.value === "") {
      document.getElementById("error_msg_area").innerHTML =
        " Please write a message *";
      document.querySelector("textarea").style.border = "2px solid Red";
      textArea.focus();
      return false;
    }
    //validation was successful
    return true;
  };

  const callButton = document.querySelector(".popup_button");
  const popup = document.querySelector(".popup");
  const closeButton = document.querySelector(".popup_close");

  //call a popup window
  const popupToggle = function (event) {
    event.preventDefault();

    if (formValidation() === true) {
      console.log(
        `Name is ${firstName.value} ${secondName.value}, phone number is: ${telNumber.value}, email adress is ${mailAdr.value}. Message: ${textArea.value}`
      );
      popup.classList.toggle("popup_opened");
    }
  };

  callButton.addEventListener("click", popupToggle);
  closeButton.addEventListener("click", popupToggle);
  //prevent popup from closing
  callButton.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
