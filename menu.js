// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

function myFunction(x) {
  x.classList.toggle("change");
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}




// Added event listener to the scroll 
    window.addEventListener('scroll', 
            moveScrollIndicator); 
  
    // Getting scrollIndicator element by ID 
    const scrollIndicatorElt =  
        document.getElementById('scrollIndicator'); 
  
    // Height of entire web page - height 
    // of viewable portion of browser 
    const maxHeight =  
        window.document.body.scrollHeight  
        - window.innerHeight; 
  
    function moveScrollIndicator(e) { 
  
        // Calculating width of the  
        // scrollIndicator element 
        const percentage =  
            ((window.scrollY) / maxHeight) * 100; 
  
        // Pixels scrolled by the user  
        // to total scrollable Pixels 
        scrollIndicatorElt.style.width 
                 = percentage + '%'; 
    } 




    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
