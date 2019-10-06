setInterval(function(){
  document.getElementById("time").innerHTML = (new Date());
}, 1000);


var menu = document.getElementById('menu');
var menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', openMenu);

function openMenu() {
    menu.classList.toggle('open');
}

var hiddenTextButton = document.getElementById('hiddenTextButton');
hiddenTextButton.addEventListener('click', showHiddenText);

function showHiddenText() {
    document.getElementById('hiddenText').style.display = 'block';
}

var hiddenTextInfoButton = document.getElementById('buttonHiddenTextInfo');
hiddenTextInfoButton.addEventListener('click', showHiddenTextInfo);

function showHiddenTextInfo() {
  document.getElementById('hiddenTextInfo').style.display = 'block';
}

/* var warning = document.getElementById('warning1');
warning.addEventListener('click', showWarning); */

/* var warning2 = document.getElementsByTagName('.our_services_content_item_child');
warning2.addEventListener('click', showWarning); */

function showWarning() {
  return confirm('Переход на страницу Вконтакте');
}
function showWarning2() {
  return confirm('Переход на WhatsUp');
}




// circle behind the mouse - круг за мышью

window.onload = function(){
  trackMouse('.hoverable', '.js-pointer');
}

function trackMouse(hover, pointer) {

  var $hover = document.querySelectorAll(hover);
  var $pointer = document.querySelector(pointer);

  var off = 50;
  var first = !0;

  function mouseX(evt) {
    if (!evt) evt = window.event;
    if (evt.pageX) return evt.pageX;
    else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    else return 0
  }

  function mouseY(evt) {
    if (!evt) evt = window.event;
    if (evt.pageY) return evt.pageY;
    else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    else return 0
  }

  function follow(evt) {

    if (first) {
      first = !1;
      $pointer.style.opacity = 1;
    }

    TweenMax.to($pointer, .7, {
      left: (parseInt(mouseX(evt)) - off) + 'px',
      top: (parseInt(mouseY(evt)) - off) + 'px',
      ease: Power3.easeOut
    });
  }
  document.onmousemove = follow;

  (function hoverable(){
    $hover.forEach(function(item){
      item.addEventListener('mouseover', function(){
        $pointer.classList.add('hide');
      });
      item.addEventListener('mouseout', function(){
        $pointer.classList.remove('hide');
      });
    })
  })();

}








