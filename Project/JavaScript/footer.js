// footer/footer.js
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('button').forEach(btn => {
  if(btn.textContent.trim().toLowerCase().includes('dërgo')){
    btn.addEventListener('click', (e) => {
      e.target.textContent = 'Dërguar!';
      setTimeout(() => e.target.textContent = 'Dërgo', 2000);
    });
  }
});
