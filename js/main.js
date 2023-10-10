AOS.init({
    duration: 1200,
})

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollBtn = document.querySelector('.scroll-up')
    const scrollTop = window.scrollY;

    if (scrollTop > 60) { // You can adjust this value to determine when the navbar becomes sticky
        navbar.classList.add('solid');
        scrollBtn.style.display = "block";
    } else {
        navbar.classList.remove('solid');
        scrollBtn.style.display = "none";
    }
});

