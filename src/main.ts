import './index.css';

console.log('Panduan Penjual Online 2026 Loaded');

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Logic ---
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // --- Tab Logic ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const clickedBtn = e.currentTarget as HTMLElement;
        const targetId = clickedBtn.getAttribute('data-target');

        // Reset all buttons
        tabBtns.forEach(b => {
          b.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
          b.classList.add('bg-white', 'text-slate-600', 'hover:bg-indigo-100');
        });

        // Activate clicked button
        clickedBtn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-indigo-100');
        clickedBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-md');

        // Hide all contents
        tabContents.forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('block', 'animate-fade-in');
        });

        // Show target content
        if (targetId) {
          const targetContent = document.getElementById(targetId);
          if (targetContent) {
            targetContent.classList.remove('hidden');
            targetContent.classList.add('block', 'animate-fade-in');
          }
        }
      });
    });
  }

  // --- Back to Top Button Logic ---
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
