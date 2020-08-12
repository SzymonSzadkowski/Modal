// select buttons and overlay

const modal_btn = document.querySelector(".modal-btn");
const close_btn = document.querySelector(".close-btn");
const modal_overlay = document.querySelector(".modal-overlay");


// set actions to buttons

modal_btn.addEventListener('click', () =>{
    modal_overlay.classList.remove("modal-hide");
});

close_btn.addEventListener('click', () =>{
    modal_overlay.classList.add("modal-hide")
});

// when the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) =>{
    if (event.target == modal_overlay){
        modal_overlay.classList.add("modal-hide");
    }
})