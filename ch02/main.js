$(document).ready(function () {
  'use strict';

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  paper.view.draw();

  let c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';
});