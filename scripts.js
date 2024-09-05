document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('close-btn');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');

    function isMobile() {
        return window.innerWidth < 768; // Adjust this value based on your breakpoints
    }

    hamburger.addEventListener('click', function(event) {
        if (isMobile()) {
            event.stopPropagation(); // Prevent click event from propagating to document
            navLeft.classList.add('active');
            navRight.classList.add('active');
            hamburger.style.display = 'none';
            closeBtn.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', function(event) {
        if (isMobile()) {
            event.stopPropagation(); // Prevent click event from propagating to document
            navLeft.classList.remove('active');
            navRight.classList.remove('active');
            hamburger.style.display = 'flex';
            closeBtn.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (isMobile() && !navLeft.contains(event.target) && !navRight.contains(event.target)) {
            navLeft.classList.remove('active');
            navRight.classList.remove('active');
            hamburger.style.display = 'flex';
            closeBtn.style.display = 'none';
        }
    });

    // Prevent clicks on navLeft and navRight from propagating to document
    navLeft.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    navRight.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Optional: Adjust visibility on window resize
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            navLeft.classList.remove('active');
            navRight.classList.remove('active');
            hamburger.style.display = 'none';
            closeBtn.style.display = 'none';
        } else {
            hamburger.style.display = 'flex';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.nav-right a, .nav-left a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navbarLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});
