

let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3","mySlides4"]
let dotId = ["dot1", "dot2", "dot3","dot4"]
showSlides(2, 0);
showSlides(3, 1);
showSlides(3, 2);
showSlides(3, 3);

// Thumbnail image controls
function currentSlide(x, y) {
    showSlides((slideIndex[y] = x), y);
}
////////////////////////////////////
function plusSlides(n, n2) {
    showSlides(slideIndex[n2] += n, n2);
}
////////////////////////////////////
function showSlides(n, n2) {
    // console.log(n,n2)
    let i;
    let slides = document.getElementsByClassName(slideId[n2]);
    // console.log(slides)
    let dots = document.getElementsByClassName(dotId[n2]);
    // console.log(dots)
    if (n > slides.length) { slideIndex[n2] = 1 }
    if (n < 1) { slideIndex[n2] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[n2] - 1].style.display = "block";


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    dots[slideIndex[n2] - 1].className += " active";
    // console.log(n,n2)
}

const slideAll = (n, n2) => {
    console.log("n " + n, "n2 " + n2)
    plusSlides(n, n2 + 1);
    plusSlides(n, n2 + 2);
}

function removeClassOnSmallScreen() {
    const element = document.getElementById('rightNav'); // Replace 'yourElementId' with the ID of the element containing the class
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        // Remove the class if the screen width is less than 600px
        element.remove(); // Replace 'yourClassName' with the name of the class you want to remove
    }
}

// Call the function initially to check the screen width on page load
removeClassOnSmallScreen();