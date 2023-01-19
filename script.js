const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



const subject = document.getElementById('subjectForm');
const email = document.getElementById('emailForm');
const name = document.getElementById('nameForm');
function checkEmpty(){
    
    if(name.value == ""){
        alert("Please enter Name");
        event.preventDefault();
    } else {
        if(email.value == ""){
            alert("Please enter Email");
            event.preventDefault();
        } else {
            if(subject.value == ""){
                alert("Please write a Subject");
                event.preventDefault();
            }
        }
    }
}

$("#shbutton").click(function() {
    window.location.href = "shop.html";
});
