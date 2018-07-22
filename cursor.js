  var boxEl = document.querySelector('#right1');
  // カーソルがぶつかったら拡大
  boxEl.addEventListener('mouseenter', function () {
    boxEl.setAttribute('width', 10);
    console.log("mouseenter");
  });

  // カーソルが離れたら元にもどす
  boxEl.addEventListener('mouseleave', function () {
    boxEl.setAttribute('width', 3);
    console.log("mouseleave");
  });

  let strat = false;


  document.querySelector('#right1').addEventListener('click', function (evt) {
    start = true;
    if (start) {
      location.href = "http://arisa-ito.wixsite.com/arisaito/products";
    }
  });

  document.querySelector('#left1').addEventListener('click', function (evt) {
    start = true;
    if (start) {
      location.href = "http://arisa-ito.wixsite.com/arisaito/woks";
    }
  });

  document.querySelector('#right2').addEventListener('click', function (evt) {
    start = true;
    if (start) {
      location.href = "http://twitter.com/saharu54";
    }
  });

  document.querySelector('#left2').addEventListener('click', function (evt) {
    start = true;
    if (start) {
      location.href = "http://arisa-ito.wixsite.com/arisaito/biography";
    }
  });

  document.querySelector('#center').addEventListener('click', function (evt) {
    start = true;
    if (start) {
      location.href = "http://arisa-ito.wixsite.com/arisaito";
    }
  });