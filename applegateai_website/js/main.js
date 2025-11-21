/* main.js - shared site scripts (animated text + mobile nav) */
document.addEventListener('DOMContentLoaded', () => {
  /* Animated headline text */
  const animatedTextElement = document.getElementById('animated-text');
  if (animatedTextElement) {
    const phrases = ["Results.", "Growth.", "Efficiency.", "Innovation.", "Intelligence."];
    let idx = 0;
    const animDur = 400;
    const delay = 2000;

    function animateSpin(){
      animatedTextElement.classList.add('spin-out');
      setTimeout(() => {
        idx = (idx + 1) % phrases.length;
        animatedTextElement.textContent = phrases[idx];
        animatedTextElement.classList.remove('spin-out');
        animatedTextElement.classList.add('spin-in');
        setTimeout(() => {
          animatedTextElement.classList.remove('spin-in');
          setTimeout(animateSpin, delay);
        }, animDur);
      }, animDur);
    }

    animatedTextElement.classList.add('spin-in');
    setTimeout(() => {
      animatedTextElement.classList.remove('spin-in');
      setTimeout(animateSpin, delay);
    }, animDur);
  }

  /* Mobile nav toggle */
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.style.display === 'block';
      nav.style.display = isOpen ? '' : 'block';
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close nav when clicking a link (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= 760) { nav.style.display = ''; toggle.setAttribute('aria-expanded','false'); }
    }));
  }
});
