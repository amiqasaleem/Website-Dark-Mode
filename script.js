const toggleBtn = document.querySelector('#theme-toggle-button #toggle');

toggleBtn.addEventListener('click',()=> {
    console.log("it is clicked");
    
});

toggleBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
});
