// Smooth scroll for internal nav links
const navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if(targetEl){
      window.scrollTo({
        top: targetEl.offsetTop - 60, // header height
        behavior: 'smooth'
      });
    }
    closeMobileNav();
  });
});

// Mobile nav toggle
const navToggleBtn = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
function closeMobileNav(){
  siteNav.classList.remove('nav-open');
  siteNav.classList.add('nav-closed');
  navToggleBtn.setAttribute('aria-expanded','false');
}
navToggleBtn.addEventListener('click',()=>{
  const isOpen = siteNav.classList.toggle('nav-open');
  if(isOpen){
    siteNav.classList.remove('nav-closed');
  }else{
    siteNav.classList.add('nav-closed');
  }
  navToggleBtn.setAttribute('aria-expanded',isOpen?'true':'false');
});

// Scroll spy: highlight current section in nav
const sections = document.querySelectorAll('section[id]');
function onScrollSpy(){
  let scrollPos = window.scrollY + 70; // offset for header
  sections.forEach(sec => {
    const id = sec.getAttribute('id');
    const start = sec.offsetTop;
    const end = start + sec.offsetHeight;
    const link = document.querySelector(`a.nav-link[href="#${id}"]`);
    if(scrollPos >= start && scrollPos < end){
      link?.classList.add('active');
    }else{
      link?.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', onScrollSpy);
onScrollSpy();

// Contact form basic handler
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // mailto fallback (simple)
    const mailtoLink = `mailto:your.email@example.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
    window.location.href = mailtoLink;

    // Optional: show alert
    alert('Thanks! Your email app should open.');
    contactForm.reset();
  });
}

// Optional scroll reveal animation (simple)
const revealEls = document.querySelectorAll('.card, .project-card, .hero-inner');
function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.9;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < triggerBottom){
      el.classList.add('reveal-visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* Add reveal styles in CSS */
/* .reveal-visible {opacity:1;transform:translateY(0);transition:all .6s;} */
/* default state define below */
