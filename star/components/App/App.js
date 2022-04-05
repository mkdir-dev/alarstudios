document.addEventListener('DOMContentLoaded', function () {
  const starsField = document.getElementById('starsField');
  const ctxStarsField = document.getElementById('starsField').getContext('2d');
  const ctxOutputField = document.getElementById('outputField').getContext('2d');

  ctxStarsField.fillStyle = "rgb(255,255,255)";
  ctxStarsField.fillRect(0, 0, 600, 600);

  const drawStar = (arms, x, y, outer_radius, inner_radius, context, color) => {

    const angle = (Math.PI / arms);

    context.fillStyle = color;
    context.beginPath();

    for (let i = 0; i < 2 * arms; i++) {

      const r = (i & 1) ? inner_radius : outer_radius;
      const point_x = x + Math.cos(i * angle) * r;
      const point_y = y + Math.sin(i * angle) * r;

      if (!i)
        context.moveTo(point_x, point_y);
      else
        context.lineTo(point_x, point_y);
    }

    context.closePath();
    context.fill();
  };

  drawStar(5, 150, 450, 50, 20, ctxStarsField, 'black');
  drawStar(5, 450, 450, 50, 20, ctxStarsField, 'blue');
  drawStar(5, 300, 300, 50, 20, ctxStarsField, 'green');
  drawStar(5, 150, 150, 50, 20, ctxStarsField, 'red');
  drawStar(5, 450, 150, 50, 20, ctxStarsField, 'yellow');

  function findPos(obj) {
    let curleft = 0,
      curtop = 0;

    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj == obj.offsetParent);
      return { x: curleft, y: curtop };
    }
    return undefined;
  }

  starsField.addEventListener('click', function (evt) {
    const pos = findPos(this);
    const x = evt.pageX - pos.x;
    const y = evt.pageY - pos.y;
    const p = this.getContext('2d').getImageData(x, y, 1, 1).data;

    ctxOutputField.fillStyle = `rgb(${p[0]},${p[1]},${p[2]})`;
    ctxOutputField.fillRect(0, 0, 600, 50);
  })
});