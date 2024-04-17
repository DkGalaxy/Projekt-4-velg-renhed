// Hamburger-menu 

document.querySelector('.menu-toggle').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  const icon = document.querySelector('.menu-toggle i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Dropdown-menu
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
          if (e.target.classList.contains('dropdown-icon')) {
              e.preventDefault();
              const dropdownMenu = this.nextElementSibling;
              dropdownMenu.classList.toggle('active');
              
              const icon = this.querySelector('.dropdown-icon');
              icon.classList.toggle('fa-chevron-right');
              icon.classList.toggle('fa-chevron-down');
          }
      });
  });
});

// Kontakt formular
function validateForm() {
  var fields = ["name", "email", "message"];
  var errors = {};

  // Validation rules for each field
  var validationRules = {
      "name": "Navn er påkrævet",
      "email": "Email er påkrævet",
      "message": "Besked er påkrævet"
  };

  // Loop through each field
  fields.forEach(function(field) {
      var value = document.getElementById(field).value.trim();

      // Validate each field
      if (value === "") {
          errors[field] = validationRules[field]; // Use specific validation message
      } else if (field === "email" && !validateEmail(value)) {
          errors[field] = "Ugyldig email-format";
      } else {
          errors[field] = ""; // Clear error message if field is not empty or valid
      }

      // Display error messages
      document.getElementById(field + "Error").innerHTML = errors[field];
  });

  // Show confirmation message if there are no errors
  if (Object.values(errors).every(error => error === "")) {
      showConfirmationMessage();
  }

  // Prevent form submission
  return false;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showConfirmationMessage() {
  var confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";
}




// Bliv aktiv
document.addEventListener('DOMContentLoaded', function() {
  const støtFast = document.getElementById('støt-fast');
  const enkelDonation = document.getElementById('enkel-donation');
  const textStøtFast = document.querySelector('.støtfasttext');
  const textEnkelDonation = document.querySelector('.enkeldonationtext');

  støtFast.addEventListener('change', function() {
    if (støtFast.checked) {
      textStøtFast.style.display ='block';
     } else {
      textStøtFast.style.display = 'none';
    }
  });

  enkelDonation.addEventListener('change', function() {
    if (enkelDonation.checked) {
      textEnkelDonation.style.display ='block';
    } else {
      textEnkelDonation.style.display ='none';
    }
    
  });
  
});


  
function handleDonate() {
  let donationIndput = document.querySelector('#donationamount');
  let donationAmount = donationIndput.value;
  console.log("Donation amount:", donationAmount);
  alert('Tillykke med din donation på ' + donationAmount + ' kr. Vi sætter stor pris på det!');
}
  function donate(amount)
   
  {
    console.log('donation from grid',amount);
  alert("tilykke med din donation på " + amount +" kr vi sætter stor pris på det"); 
 }
 
 
 

  

  