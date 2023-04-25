//function that shows the slider, with left and right arrows, where a user can scroll through vehicles.
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("slide");
   if (n > slides.length - 2) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length - 2;
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = slideIndex - 1; i < slideIndex + 2; i++) {
      slides[i].style.display = "flex";
   }
}

function displaySelectedData() {
   // Retrieve selected values from the form
   const carType = document.getElementById('select1').value;
   const pickupLocation = document.getElementById('select2').value;
   const dropoffLocation = document.getElementById('select3').value;
   const pickupDate = document.getElementById('date1').value;
   const dropoffDate = document.getElementById('date2').value;
   const carImg = "images/front-car.png"
   const calendar = "images/calendar (1).png"
   const pin = "images/pin (1).png"

   // Construct the selected data message from user input form, to display in modal.
   const selectedDataMsg = `<br>  <img src="${carImg}" style="width: 30px; margin-right:10px">  <span class="boldh3" font-weight:700" >${carType}</span> <br>  <br> <img src="${pin}" style="width: 30px; margin-right:10px";"> <span class="orangetext boldh3"> for </span> <span class="boldh3"> ${pickupLocation} </span> <span class="orangetext boldh3"> pickup </span> <br> <br> <img src="${calendar}" style="width: 30px; margin-right:10px"> <span class="orangetext boldh3"> on </span> <span class="boldh3"> ${pickupDate} </span>
   <br> <br> <span class="orangetext boldh3"> and </span> <br> <br> <img src="${pin}" style="width: 30px;margin-right:10px"> <span class="boldh3"> ${dropoffLocation} </span> <span class="boldh3 orangetext"> dropoff </span> <br><br> <img src="${calendar}" style="width: 30px;margin-right:10px"> <span class="orangetext boldh3">on </span> <span class="boldh3"> ${dropoffDate}</span>`;

 
   const selectedDataElement = document.getElementById('selected-data');
   selectedDataElement.innerHTML = selectedDataMsg;
}


const dropdownHeaders = document.querySelectorAll('.dropdown-header');
const dropdownContents = document.querySelectorAll('.dropdown-content');


dropdownHeaders[0].classList.add('active');
dropdownContents[0].classList.add('active');


dropdownHeaders.forEach(header => {
   header.addEventListener('click', () => {
      
      dropdownHeaders.forEach(h => h.classList.remove('active'));
      dropdownContents.forEach(c => c.classList.remove('active'));

      
      header.classList.add('active');
      header.nextElementSibling.classList.add('active');

     
      dropdownHeaders.forEach(h => {
         if (h.classList.contains('active')) {
            h.innerText = `${h.innerText}`;
         } else {
            h.innerText = `${h.innerText}`;
         }
      });
   });
});

// Get the button element
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
};

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
   document.body.scrollTop = 0; 
   document.documentElement.scrollTop = 0; 

 function submitForm() {
                                 var firstName = document.getElementById("first_name").value;
                                 var surname = document.getElementById("surname").value;
                                 var email = document.getElementById("email").value;
                                 var age = document.getElementById("age").value;
                                 var phone = document.getElementById("phone").value;

                                 if (firstName && surname && email && age && phone) {
                                    document.getElementById("message").style.display = "block";
                                   
var submitButton = document.getElementById('submitbutton');

submitButton.style.display = 'none';

                                    return false; 
                                 } else {
                                    alert("Please fill in all required fields.");
                                    return false; 
                                 }
                              }

//Smooth scroll function for all 'a' tags with a href.
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});






