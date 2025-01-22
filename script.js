//スライドショー
$('#variable-width').slick({
    dots: true,
    infinite: true,
    speed: 80,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
//ハンバーガーアイコン
$(".openbtn").click(function(){
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panalactive');
});

$("#g-nav a").click(function(){
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panalactive');
});
//リンクスライド
$('#g-nav a[href*="#"]').click(function(){
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top -80;
  $('body,html').animate({scrollTop:pos},300);
  return false;
});