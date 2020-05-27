
(function() {
  
    const filterBtn = document.querySelectorAll(".filter-btn");
  
    filterBtn.forEach(function(btn) {
      btn.addEventListener("click", function(event) {
       event.preventDefault();

       const value = event.target.dataset.filter;
        const items = document.querySelectorAll(".store-item");
        
        items.forEach(function(item) {
          if (value === "all") {
            item.style.display = "block";
          } else {
            if (item.classList.contains(value)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        });
      });
    });
  })();
 

  mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  



  
