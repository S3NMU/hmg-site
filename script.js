// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

// Highlight active link
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a.navlink').forEach(a => {
  const href = a.getAttribute('href');
  if ((here === 'index.html' && href === './') || href === here) {
    a.classList.add('active');
  }
});

// Basic client-side form feedback (demo only)
document.querySelectorAll('form[data-enhance]')?.forEach(f => {
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = f.querySelector('button[type=submit]');
    const original = btn?.textContent;
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    setTimeout(() => {
      alert('Thanks! Your form was submitted (demo only).');
      if (btn) { btn.disabled = false; btn.textContent = original; }
      f.reset();
    }, 700);
  });
});
