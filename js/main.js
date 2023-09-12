document.addEventListener('DOMContentLoaded', () => {
    // icon navbar
    const menuIcon = document.querySelector('#menu-icon');
    const navBar = document.querySelector('.navbar');
  
    menuIcon.onclick = ev => {
      ev.target.classList.toggle('bx-x');
      navBar.classList.toggle('active');
    }
  
    // scroll sections 
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.header nav a')
  
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
          });
          // active sections for animations on scroll 
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-aniimate')
        }
      });
  
      let header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
  
      // remove toggle icon 
      menuIcon.classList.remove('bx-x');
      navBar.classList.remove('active');
  
      let footer = document.querySelector('.footer');
      footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
    };
  });
  

// button learn more 
const button = document.getElementById('btn-more');

button.addEventListener('click', ()=>{
  const paragraph= document.querySelector('.more-information');
  paragraph.classList.toggle('block');
  if (button.textContent === 'Read More') {
    button.textContent = 'Read Less';
  } else {
    button.textContent = 'Read More';
  } 
});


// button dark mode 

const buttonDark = document.querySelector('.dark-mode');
const stylesheet = document.getElementById("stylesheet"); 
const img = document.querySelector('.img-button');
let darkModeEnabled = false; 

buttonDark.addEventListener("click", () => {
    if (darkModeEnabled) {
        stylesheet.href = "css/clear-mode.css"; 
        img.src= 'img/png-transparent-crescent-symbol-moon-computer-icons-symbol-miscellaneous-logo-monochrome.png'
    } else {
        stylesheet.href = "css/dark-mode.css";
        img.src= 'img/png-transparent-icon-sunshine-text-orange-sunlight-thumbnail.png'
    }
    
    darkModeEnabled = !darkModeEnabled;
});

// carga de imagenes 
const project_two = document.getElementById('project2');
project_two.src = 'img/projects/proyecto2.png';

const project_three = document.getElementById('project3');
project_three.src = 'img/projects/proyecto3.png';

const certificate = document.getElementById('certificate4');
certificate.src = 'img/certificates/certificado4.PNG'