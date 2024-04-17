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
  let fields = ["name", "email", "message"];
  let errors = {};

  let validationRules = {
      "name": "Navn er påkrævet",
      "email": "Email er påkrævet",
      "message": "Besked er påkrævet"
  };

  fields.forEach(function(field) {
      let value = document.getElementById(field).value.trim();

      if (value === "") {
          errors[field] = validationRules[field]; 
      } else if (field === "email" && !validateEmail(value)) {
          errors[field] = "Ugyldig email-format";
      } else {
          errors[field] = ""; 
      }

      document.getElementById(field + "Error").innerHTML = errors[field];
  });

  if (Object.values(errors).every(error => error === "")) {
      showConfirmationMessage();
  }

  return false;
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showConfirmationMessage() {
  const confirmationMessage = document.getElementById("confirmationMessage");
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
 
 
 
 let slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let slides = Array.from(document.getElementsByClassName("mySlides")); 
   let dots = Array.from(document.getElementsByClassName("dot")); 
   if (n > slides.length) { slideIndex = 1; }
   if (n < 1) { slideIndex = slides.length; }
   slides.forEach((slide, index) => {
     slide.style.display = "none";
     dots[index].classList.remove("active");
   });
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].classList.add("active");
 }
 
 
 let dots = Array.from(document.getElementsByClassName("dot"));
 dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
     currentSlide(index + 1);
   });
 });
  

  