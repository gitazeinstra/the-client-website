AOS.init({
    duration: 1200,
})

const navbar = document.querySelector('.navbar');
const scrollBtn = document.querySelector('.scroll-up')

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 60) { // You can adjust this value to determine when the navbar becomes sticky
        navbar.classList.add('solid');
        scrollBtn.style.display = "block";
    } else {
        navbar.classList.remove('solid');
        scrollBtn.style.display = "none";
    }
});

