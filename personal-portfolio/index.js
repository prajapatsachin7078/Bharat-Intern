 // Smooth scrolling effect for navigation links
        const navLinks = document.querySelectorAll('.navbar a');

        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const navbarLinks = document.querySelectorAll(".navbar a");
            const sections = document.querySelectorAll("section");
    
            function setActiveLink() {
                const scrollY = window.scrollY;
    
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.clientHeight;
                    const target = section.getAttribute("id");
    
                    if (scrollY >= sectionTop && scrollY <= sectionBottom) {
                        navbarLinks.forEach((link) => {
                            link.classList.remove("active");
                        });
    
                        // Find the corresponding navbar link by data-target
                        const correspondingLink = document.querySelector(
                            `.navbar a[data-target="${target}"]`
                        );
    
                        if (correspondingLink) {
                            correspondingLink.classList.add("active");
                        }
                    }
                });
            }
    
            // Add scroll event listener
            window.addEventListener("scroll", setActiveLink);
        });

        function toggleNavMenu() {
            var navbar = document.getElementById("navbar");
            if (navbar.style.display === "flex") {
                navbar.style.display = "none";
            } else {
                navbar.style.display = "flex";
            }
        }
        
