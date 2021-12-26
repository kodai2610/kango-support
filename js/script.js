//SPメニュー
const menuBtn = document.getElementById('menuButton');
const nav = document.getElementById('nav');
const mask = document.getElementById('mask');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  mask.classList.toggle('is-active');
});

mask.addEventListener('click', () => {
  menuBtn.classList.remove('is-active');
  nav.classList.remove('is-active');
  mask.classList.remove('is-active');
});

//ページスクロール
$('.scroll').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;
  $('html, body').animate({
    'scrollTop':position
    },500);
  menuBtn.classList.remove('is-active');
  nav.classList.remove('is-active');
  mask.classList.remove('is-active');
});