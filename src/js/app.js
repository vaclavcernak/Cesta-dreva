console.log('INIT');
$('.category-toggler').click(function(){
  $('.category-list').slideToggle();
});

$('.replies-number').click(function(){
  $(this).find('.replies').show();
});

//responsive-menu
$('.navbar-toggler').click(function(){
  if($('#navigation').hasClass('open')) {
    $('.menu-responsive').slideUp();
    $('.navbar-toggler img').attr('src', './images/icons/menu-toggle.svg');
    $('#navigation').removeClass('open');
  }
  else {
    $('.navbar-toggler img').attr('src', './images/icons/cancel.svg');
    $('.menu-responsive').slideDown();
    $('#navigation').addClass('open');
  }
});

$('button.cart').click(function(){
  $('.cart-preview').toggle();
});


//on hover
$('button.cart').mouseover(function(){
  $('.cart-preview').slideDown();
});

$('.mega-menu-toggler').mouseover(function(){
  $('.mega-menu[data-megamenu=home]').slideDown();
});

$('.mega-menu').mouseleave(function(){
  $(this).slideUp();
});

$('.cart-preview').mouseleave(function(){
  $(this).slideUp();
});

$('.mega-menu-toggler').click(function(){
  $('.mega-menu').slideToggle();
});

$('.inner-content').click(function(){
  $(this).parent().hide();
});

$('.search-box .close-btn').click(function(){
  $('.search-results').slideUp();
  $('.search-box').hide();
  $('.navbar-links').show();
});
$('.search-box input').focus(function(){
  $('.search-results').slideDown();
});
$('.search-toggler').click(function(){
  $('.navbar-links').hide();
  $('#main.search-box').css('display', 'flex');
});

$('.search-mobile-toggler').click(function(){
  $('.search-mobile').css('display', 'flex');
  $('.action-menu').hide();
  $('.navbar-brand').hide();
});

$('.search-mobile .close-btn').click(function(){
  $('.search-mobile').hide();
  $('.action-menu').show();
  $('.navbar-brand').show();
});

function getStyle(element, style, suffix = false) {
  let selectedElement = document.querySelector(element);
  let computedElement = window.getComputedStyle(selectedElement);
  let propertyValue = computedElement.getPropertyValue(style);

  if(suffix == true) {
    propertyValue = parseInt(propertyValue);
  }
  return propertyValue;
}

function fixBoxGrid(bigElement, smallElement) {
  let bigBoxHeight = getStyle(bigElement, 'height', true);
  let smallBoxHeight = bigBoxHeight / 2;

  $(smallElement).css('height', smallBoxHeight);
  $(smallElement).css('max-height', smallBoxHeight);
}

if(window.innerWidth > 1199) {
  //fixBoxGrid('.offer-box.box-big', '.offer-small-box');
  //fixBoxGrid('.product-box.box-big', '.product-box.box-small');
}

const parametersId = [
  'popis_produktu',
  'hodnoceni',
  'diskuze',
  'prislusenstvi'
];

$('.parameter-bar .parameter-item a').click(function(){
  $('.parameter-bar .parameter-item').removeClass("active");
  $(this).parent().addClass("active");
});

/****/

function additionals() {
  if( $('.owl-carousel-additionals').length ) {
    $('.owl-carousel-additionals.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      responsive:{
        0:{
          items:1,
          stagePadding: 20,
          margin:15,
        },
        575:{
          items:2,
          stagePadding: 20,
          margin:15,
        },
        768:{
          items:3,
          stagePadding: 20,
          margin:15,
        },
        992:{
          items:4,
          margin:0,
          mouseDrag: false
        }
      }
    });

  }
}

$(document).ready(function() {
  additionals();
});

//window.addEventListener('resize', fixOfferBox);
