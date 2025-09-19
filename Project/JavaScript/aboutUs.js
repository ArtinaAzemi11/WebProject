// Minimal JS: counter animation + small helpers
document.addEventListener('DOMContentLoaded', () => {
  // Update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // COUNTERS
  const counters = document.querySelectorAll('.counter');
  const speed = 1600; // ms for animation

  const animateCounter = (el, target) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(speed / target));
    const timer = setInterval(() => {
      start += Math.ceil(target / (speed / stepTime));
      if (start >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = start;
      }
    }, stepTime);
  };

  // Use IntersectionObserver to animate when visible
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target || 0, 10);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, {threshold: 0.5});

    counters.forEach(c => obs.observe(c));
  } else {
    // fallback
    counters.forEach(c => animateCounter(c, parseInt(c.dataset.target || 0, 10)));
  }
});
