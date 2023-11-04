$(function(){

$(".promo__inner").slick({
dots: true,
autoplay: true,
autoplaySpeed: 2000,
fade: true,
nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#prev-arrow"></use></svg></button>',
prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#next-arrow"></use></svg></button>'
});

$(".filter-range__input").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  from: 200,
  to: 800,
  prefix: "$",

  onStart: function (data) {
    $(".filter-range__from").text(data.from);
    $(".filter-range__to").text(data.to);
  },

  onChange: function (data) {
     $(".filter-range__from").text(data.from);
     $(".filter-range__to").text(data.to);
     
    
},

});

$(".product-slide__thumb").slick({
  asNavFor: '.product-slide__big',
  arrows: false,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  draggable: false
});

$(".product-slide__big").slick({
  asNavFor: '.product-slide__thumb',
  arrows: false,
  draggable: false
});

$(".product-filter__price-input").styler({

});

$(".product-info__title-1").on( "click", function() {
  $(".product-info__item-1").slideToggle( "slow", function() {
  });
  $(".product-info__item-1").css("display", "flex");
});

$(".product-info__title-2").on( "click", function() {
  $(".product-info__item-2").slideToggle( "slow", function() {
  });
  $(".product-info__item-2").css("display", "flex");
});

$(".product-info__title-3").on( "click", function() {
  $(".product-info__item-3").slideToggle( "slow", function() {
  });
  $(".product-info__item-3").css("display", "flex");
});

$(".product-info__title").on( "click", function() {
  $(this).toggleClass("product-info__title--active");
});


});

$(document).ready(function () {

  $("#inputNumber").on("change", function () {
   
      var inputValue = parseFloat($(this).val());

      var multiplier = 90; 

      var result = (inputValue * multiplier).toFixed(2);
      $("#result").text(result) + "EUR";
  });
});

