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



/////Object Books
const book1 = {
    bookName : "Harry Potter and the Philosopher's Stone",
    author  : "J.K Rowling",
    price : 12
  };
  const book2 = {
    bookName : "Harry Potter and the Prisoner of Azkaban",
    author  : "J.K Rowling",
    price : 12
  };
  const book3 = {
    bookName : "Game of Thrones",
    author  : "George R. Martin",
    price : 24
  };
  const book4 = {
    bookName : "The Winds of Winter",
    author  : "George R. Martin",
    price : 24
  };


  var dollar = "$";


  

  $("#author1").html(book1.author);
  $("#bookName1").html(book1.bookName);
  $("#bookPrice1").html(book1.price + dollar);

$("#author2").html(book2.author);
  $("#bookName2").html(book2.bookName);
  $("#bookPrice2").html(book2.price + dollar);

  $("#author3").html(book3.author);
  $("#bookName3").html(book3.bookName);
  $("#bookPrice3").html(book3.price + dollar);

  $("#author4").html(book4.author);
  $("#bookName4").html(book4.bookName);
  $("#bookPrice4").html(book4.price + dollar);




  ///// Check Stock for product
  function checkStock(a) {
    if(a>10) {
        alert("There is only 10 books in stock");
    }
  }


//// 

$("#select").on('change', function(){
    switch($(this).find('option:selected').text()) {
        case "Hardcover":
            $("#bookDes").html("Hardocover Description");
          break;
        case "Audiobook":
            $("#bookDes").html("Audiobook Description");
          break;
        default:
            $("#bookDes").html("PDF Description");
      } 
});


/*Shop Now button*/
$("#shbutton").click(function() {
    window.location.href = "shop.html";
});
