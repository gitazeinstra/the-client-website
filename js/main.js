window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.scrollY;

    if (scrollTop > 60) { // You can adjust this value to determine when the navbar becomes sticky
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
});

