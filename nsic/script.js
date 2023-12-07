
function loadRandomBackground(){
    var img_id = Math.floor(Math.random() * 4) + 1;
    document.getElementById("img-background").style.backgroundImage = "url('images/image" + img_id + ".png')";
}

const aboutLink = document.querySelector('.nav-link[href="#about"]');
const homeLink = document.querySelector('.nav-link[href="#home"]');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    toggleAboutSection();
});

homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    toggleHome();
});

function toggleAboutSection() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'block';
}

function toggleHome() {
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
}