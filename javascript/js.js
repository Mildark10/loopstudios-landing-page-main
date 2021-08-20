window.addEventListener('scroll', function() {
    const section = document.querySelector('section');
    section.classList.toggle("sticky", window.scrollY > 0);
});

function menuResponsive() {
    const menuResponsive = document.querySelector('.menuResponsive');
    const navigation = document.querySelector('.navegacion');
    menuResponsive.classList.toggle('active');
    navigation.classList.toggle('active');
}