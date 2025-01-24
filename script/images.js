function showImage(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
modal.addEventListener("click", function(event) {
  if (event.target != modalImg) {
    modal.style.display = "none";
  }
});

var projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card) {
    card.addEventListener('click', function() {
        showImage(card.querySelector('.project-icon'));
    });
});
