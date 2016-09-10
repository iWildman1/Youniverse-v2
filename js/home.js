// Handle MouseEnter and MouseLeave for Work Items

$('.work-item').mouseenter(function() {
  $(this).find('.work-item-info').removeClass('item-hidden');
});

$('.work-item').mouseleave(function() {
  $(this).find('.work-item-info').addClass('item-hidden');
});

// Handle Masonry/Packery grid for Social Media (Homepage)

var elem = document.querySelector('.social-media-grid');
var pckry = new Packery(elem, {
  itemSelector: '.social-media-item',
  columnWidth: '.grid-sizer',
  percentageWidth: true
})

// Handle Navigation Toggle

var navigationState = false;

$('.nav-toggle').click(function() {
  if (!navigationState) {
    $('.navigation-main').css('display', 'block');

    setTimeout(function() {
      $('.navigation-main').removeClass('navigation-closed');
    }, 25);

    navigationState = true;
  } else {
    $('.navigation-main').addClass('navigation-closed');
    navigationState = false;
    setTimeout(function() {
      $('.navigation-main').css('display', 'none');
    }, 300);
  }
})

//Handle Navigation Affix

var bodyOffset = 0;
var scrollPos = 0;
var passedMarker = false;
var navFixed = false;

$(window).scroll(function() {
  scrollPos = $(this).scrollTop();
  bodyOffset = $('.main-body').offset().top;

  if (scrollPos > (bodyOffset - 80)) {
    passedMarker = true;
  } else {
    passedMarker = false;
  }

  console.log(passedMarker);

  if (passedMarker && !navFixed) {
    $('.navigation-bar').addClass('navigation-fixed');
    navFixed = true;
  } else if (!passedMarker && navFixed) {
    $('.navigation-bar').removeClass('navigation-fixed');
    navFixed = false;
  }
})
