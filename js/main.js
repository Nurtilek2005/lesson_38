$(function () {
  let hamburger = document.querySelector(".hamburger");
  let navList = document.querySelector(".top-nav__list");
  let backDrop = document.querySelector(".back-drop");

  hamburger.addEventListener("click", function() {
    hamburger.classList.add("is-active");
    navList.classList.add("is-active");
    backDrop.classList.add("is-active");
    document.body.style.overflow = "hidden";
  });

  backDrop.addEventListener("click", function() {
    hamburger.classList.remove("is-active");
    navList.classList.remove("is-active");
    backDrop.classList.remove("is-active");
    document.body.removeAttribute("style");
  });


  let bgItem = $('<div>').addClass('bg-item');
  $('.news').append(bgItem);

  $('.news__item').on('mouseover', function () {
    let bgOffset = $(this).offset().top - $(".news").offset().top;
    
    bgItem.css({
      top: bgOffset + "px",
      height: $(this).outerHeight()
    });
  })

  $(".news__item").on('mouseout', function () {
    bgItem.height(0);
  })

  $('.work__popup').lightGallery({
    selector: 'this'
  });


  let audio = document.getElementById('audio');

  $('.logo__img').on('click', function () {
    
    if (audio.paused) {
      $(this).attr('src', 'img/shape_active.png');
      audio.play();
    } else {
      $(this).attr('src', 'img/shape.png');
      audio.pause()
    }
    
  })

})