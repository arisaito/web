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

  document.querySelector('#center').addEventListener('click', function (evt) {
    start = true;
    if (start) {
      location.href = "http://arisa-ito.wixsite.com/arisaito";
    }
  });
