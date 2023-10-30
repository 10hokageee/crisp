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
});

