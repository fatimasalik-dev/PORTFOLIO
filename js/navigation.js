/* ==========================================================
                    ACTIVE NAVIGATION SYSTEM
========================================================== */

document.addEventListener("DOMContentLoaded", () => {


    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );


    const currentPage =
        window.location.pathname.split("/").pop();


    const sections =
        document.querySelectorAll("section[id]");



    /* ======================================================
                UPDATE ACTIVE NAVIGATION
    ====================================================== */

    function updateActiveNavigation() {


        let currentSection = "";


        sections.forEach((section) => {


            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop - 150
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });



        /* Remove active state from ALL links */

        navLinks.forEach((link) => {

            link.classList.remove("active");

        });



        /* ==================================================
                SAME-PAGE SECTION NAVIGATION
        ================================================== */

        if (currentSection) {


            const sectionLink =
                document.querySelector(
                    `.nav-links a[href="#${currentSection}"]`
                );


            if (sectionLink) {

                sectionLink.classList.add("active");

            }

        }



        /* ==================================================
                PAGE NAVIGATION
        ================================================== */

        if (!currentSection) {


            navLinks.forEach((link) => {


                const linkPage =
                    link.getAttribute("href");


                if (
                    linkPage === currentPage
                ) {

                    link.classList.add("active");

                }

            });

        }

    }



    /* ======================================================
                        EVENT LISTENER
    ====================================================== */

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


});