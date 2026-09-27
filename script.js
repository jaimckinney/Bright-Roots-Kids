const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const toast = document.querySelector('#toast');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.play').forEach((button) => {
  button.addEventListener('click', () => {
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

document.querySelector('#shuffle').addEventListener('click', () => {
  const cards = [...document.querySelectorAll('.video-card')];
  const pick = cards[Math.floor(Math.random() * cards.length)];
  pick.scrollIntoView({ behavior: 'smooth', block: 'center' });
  pick.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.035)' }, { transform: 'scale(1)' }],
    { duration: 650, easing: 'ease-out' }
  );
});

document.querySelector('#year').textContent = new Date().getFullYear();
