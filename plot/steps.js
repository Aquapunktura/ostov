'use strict';

function defaultStep(ctx, x, y) {
  ctx.beginPath();
  ctx.rect(x, y, stepSize.x, stepSize.y);
  ctx.stroke();
}

function choiceStep(ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(x+stepSize.x/2, y);
  ctx.lineTo(x+stepSize.x, y+stepSize.y/2);
  ctx.lineTo(x+stepSize.x/2, y+stepSize.y);
  ctx.lineTo(x, y+stepSize.y/2);
  ctx.lineTo(x+stepSize.x/2, y);
  ctx.closePath();
  ctx.stroke();
}

function eventStep(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = 'grey';
  ctx.fillRect(x, y, stepSize.x, stepSize.y);
  ctx.stroke();
}
