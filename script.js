// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}
// ==========================
// TYPING EFFECT
// ==========================

const text = "Hi, I'm Yogesh Dahal | IT & CAD Student | Web Developer";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,100);

    }

}

if(document.getElementById("typing")){

    typingEffect();

}
// ==========================
// THEME TOGGLE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            themeBtn.innerHTML="☀️";

        }else{

            themeBtn.innerHTML="🌙";

        }

    });

}
// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop;

        if(window.scrollY>=sectionTop-100){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ==========================
// CLOSE MOBILE MENU
// ==========================

document.querySelectorAll("nav ul li a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navMenu){

            navMenu.classList.remove("active");

        }

    });

});


// ==========================
// FADE IN ANIMATION
// ==========================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade-in").forEach(section=>{

    observer.observe(section);

});
// ==========================
// SCROLL TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
// ==========================
// NAVBAR SHADOW
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
// ==========================
// ACHIEVEMENT COUNTER
// ==========================

const counters = document.querySelectorAll(".stat-box h1");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.innerText);

            let count = 0;

            const updateCounter = () => {

                if (count < target) {

                    count++;

                    counter.innerText = count;

                    setTimeout(updateCounter, 30);

                } else {

                    if (target === 100) {

                        counter.innerText = "100%";

                    }

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
// ==========================
// WELCOME MESSAGE
// ==========================

window.addEventListener("load", () => {

    console.log("Welcome to Yogesh Dahal's Portfolio!");

});
