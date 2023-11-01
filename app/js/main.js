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

});

