'use strict';
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let persons = []
persons.push({name: 'Bla', age: 170});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla3', age: 70});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla', age: 170});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla3', age: 70});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});
persons.push({name: 'Bla2', age: 40});

let scale = 1;


function allOstovs() {
  ctx.clearRect(0, 0, 10000, 10000);
  // day
  drawOstov({
    cellSize:{x:5*scale,y:5*scale},
    cellQuan:{x:persons.length,y:24},
  },
  ctx);
  // month
  drawOstov({
    cellSize:{x:5*scale,y:120*scale},
    cellQuan:{x:persons.length,y:30},
    colour:'black',
  },
  ctx);
  // year
  drawOstov({
    cellSize:{x:5*scale,y:1440*scale},
    cellQuan:{x:persons.length,y:12},
    colour:'red',
  },
  ctx);
}

document.addEventListener('keydown', pressing);
canvas.addEventListener('click', clicked)


function pressing(event) {
  console.log(event.which);
  if (event.which===109){
    scale = scale-0.1;
    allOstovs();
  }
  if (event.which===107){
    scale = scale+0.1;
    allOstovs();
  }
}
function clicked(event) {
  console.log(event);
}
