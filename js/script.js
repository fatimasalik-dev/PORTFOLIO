/* =========================================================
   SINGLE-PAGE PORTFOLIO NAVIGATION
   Handles active navigation section while scrolling
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SELECT NAVIGATION LINKS AND SECTIONS
    ===================================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    const sections = document.querySelectorAll(
        "main section[id]"
    );


    /* =====================================================
       UPDATE ACTIVE NAVIGATION ITEM
    ===================================================== */

    function updateActiveSection() {

        let currentSection = "hero";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        /* Remove active state from all links */

        navLinks.forEach(link => {

            link.classList.remove("active");

        });


        /* Add active state to current section */

        const activeLink =
            document.querySelector(
                `.nav-links a[href="#${currentSection}"]`
            );


        if (activeLink) {

            activeLink.classList.add("active");

        }

    }


    /* =====================================================
       RUN WHEN USER SCROLLS
    ===================================================== */

    window.addEventListener(
        "scroll",
        updateActiveSection
    );


    /* =====================================================
       RUN ON INITIAL PAGE LOAD
    ===================================================== */

    updateActiveSection();




    /* =====================================================
       MOBILE NAVIGATION MENU
    ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-links");


    menuToggle.addEventListener("click", () => {

        const isOpen =
            navMenu.classList.toggle("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });


    /* Close menu after selecting a section */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });

/* ==========================================================
                    DARK MODE TOGGLE
========================================================== */

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");


    const isDarkMode =
        document.body.classList.contains("dark-mode");


    if(isDarkMode){

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

    else{

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

});

});