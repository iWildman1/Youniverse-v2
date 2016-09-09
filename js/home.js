$('.work-item').mouseenter(function() {
  $(this).find('.work-item-info').removeClass('item-hidden');
});

$('.work-item').mouseleave(function() {
  $(this).find('.work-item-info').addClass('item-hidden');
});

var elem = document.querySelector('.social-media-grid');
var pckry = new Packery(elem, {
  itemSelector: '.social-media-item',
  columnWidth: '.grid-sizer',
  percentageWidth: true
})
