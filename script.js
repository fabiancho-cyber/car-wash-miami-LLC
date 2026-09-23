/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =====================================================
   HEADER ON SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   REVIEWS SLIDER
===================================================== */

const reviews = document.querySelectorAll(".review");

const prevReview = document.getElementById("prevReview");

const nextReview = document.getElementById("nextReview");

let currentReview = 0;


function showReview(index) {

    reviews.forEach(review => {

        review.classList.remove("active");

    });

    reviews[index].classList.add("active");

}


nextReview.addEventListener("click", () => {

    currentReview++;

    if (currentReview >= reviews.length) {

        currentReview = 0;

    }

    showReview(currentReview);

});


prevReview.addEventListener("click", () => {

    currentReview--;

    if (currentReview < 0) {

        currentReview = reviews.length - 1;

    }

    showReview(currentReview);

});


/* Automatic review change */

setInterval(() => {

    currentReview++;

    if (currentReview >= reviews.length) {

        currentReview = 0;

    }

    showReview(currentReview);

}, 6000);


/* =====================================================
   BOOKING FORM
===================================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const vehicle =
        document.getElementById("vehicle").value.trim();

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const message =
        document.getElementById("message").value.trim();


    const whatsappNumber = "17867959334";


    const whatsappMessage =

`Hello Mobile Car Wash Miami!

I would like to request a booking.

Name: ${name}
Phone: ${phone}
Vehicle: ${vehicle}
Service: ${service}
Preferred Date: ${date}

Additional Information:
${message || "None"}

Thank you!`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});


/* =====================================================
   DATE
===================================================== */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");


dateInput.min = `${year}-${month}-${day}`;


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});