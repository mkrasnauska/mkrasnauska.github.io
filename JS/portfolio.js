// functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// function displays the first image in the slideshow when the page loads 
var slideIndex = 1;
showSlides(slideIndex);

// function changes the slide when left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function changes slides when dots are clicked 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // class name "mySlides" elements stored in variable array
    var dots = document.getElementsByClassName("dot"); // class name "dot" elements stored in variable array
    if (n > slides.length) {slideIndex = 1}; // if the number in function greater than length of array "slides", slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //if n less than 1, the slideIndex set to the length of array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // "slides" array items dispplay set to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", ""); // each item in array "dots" removed "active" that removes active styling
    }
    slides[slideIndex - 1].style.display = "block"; // displays image in slideshow
    dots[slideIndex - 1].className += "active"; //adds active styling to the dot accociated with the image 
}   

// close the contact form when the user clicks off of it
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
    }
}, false )