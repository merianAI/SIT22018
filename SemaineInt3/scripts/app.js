var left = document.querySelector('.left');
var right = document.querySelector('.right');
var imgs = document.querySelectorAll('.container');

var index = 1;

function changeSlides(n) {
  slide(index += n);
}

function slide(n) {
  if (n > imgs.length) {
    index = 1;
  }
  if (n < 1) {
    index = imgs.length;
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('is-active');
  }
  imgs[index - 1].classList.add('is-active');
}

left.addEventListener("click", function() {
  changeSlides(-1);
});


right.addEventListener("click", function() {
  changeSlides(1);
});

window.addEventListener('keydown', function(event) {
  if (event.which == 37) {
    changeSlides(-1);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.which == 39) {
    changeSlides(1);
  }
});
