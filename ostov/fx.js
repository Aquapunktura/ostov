
function drawOstov(param, ctx) {
if (param.space === undefined) {
  param.space = {x:5,y:5,}
}
if (param.colour === undefined) {
  param.colour = 'grey';
}
  ctx.strokeStyle = param.colour;
  for (let i = 0; i<=param.cellQuan.y; i++) {
      ctx.beginPath();
      ctx.moveTo(param.space.x,
                 param.space.y + i*param.cellSize.y);
      ctx.lineTo(param.space.x + param.cellSize.x * param.cellQuan.x,
                 param.space.y + param.cellSize.y * i);
      ctx.stroke();
  }
  for (let i = 0; i<=param.cellQuan.x; i++) {
      ctx.beginPath();
      ctx.moveTo(param.space.x + i*param.cellSize.x,
                 param.space.y);
      ctx.lineTo(param.space.x + param.cellSize.x * i,
                 param.space.y + param.cellSize.y * param.cellQuan.y);
      ctx.stroke();
  }
}
