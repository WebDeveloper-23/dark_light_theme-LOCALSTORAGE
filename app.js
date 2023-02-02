const doc = document.querySelector('body'),
togleBtn = doc.querySelector('.toggle_li #dark');

togleBtn.addEventListener('click', toggleTheme)

function toggleTheme () {
     doc.classList.toggle('dark');
     localStorage.darkMode = doc.classList.contains('dark') ? 1 : 0;
};

if(localStorage.darkMode && Number(localStorage.darkMode)) {
     toggleTheme();
};

