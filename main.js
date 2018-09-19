document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".get-quote-btn").addEventListener("click", handler);
});


function handler() {
    console.log('I am a button');
}

//you cant use onclick directly. So, attach an click event through a js file

