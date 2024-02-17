function readMorePresentacion() {
    var dots = document.getElementById("dotsReadMorePresentacion");
    var moreText = document.getElementById("moreTextPresentacion");
    var btnText = document.getElementById("btnReadMorePresentacion");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
