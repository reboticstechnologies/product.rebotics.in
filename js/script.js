document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav')?.classList.remove('open')));
function submitForm(e){e.preventDefault();const s=document.getElementById('form-status');s.textContent='Thank you. Your project brief is ready to be reviewed. Connect this form to your preferred email/form service before publishing.';s.style.color='#16b8a6';e.target.reset();}
