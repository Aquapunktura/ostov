
'use strict';

let layers = []

layers[0] = []
layers[0][0] = {
  type: 'default',
  text: 'bla',
}

layers[1] = []
//       step
layers[1][0] = {
  type: 'default',
  text: 'alb',
  depend: [{
    layer: 0,
    step: 0
  }]
}

layers[2] = []
layers[2][0] = {
  type: 'choice',
  text: 'bal',
  depend: [{
    layer: 1,
    step: 0
  }]
}

layers[3] = []
layers[3][0] = {
  type: 'default',
  text: 'choice1',
  depend: [{
    layer: 2,
    step: 0
  }]
}
layers[3][1] = {
  type: 'default',
  text: 'choice2',
  depend: [{
    layer: 2,
    step: 0
  }]
}
layers[3][2] = {
  type: 'event',
  text: 'choice3',
  depend: [{
    layer: 2,
    step: 0
  }]
}

// layers[3][3] = {
//   type: 'event',
//   text: 'choice3',
//   depend: [{
//     layer: 2,
//     step: 0
//   }]
// }

layers[4] = []
layers[4][0] = {
  type: 'default',
  text: 'bbl',
  depend: [{
    layer: 3,
    step: 1
  }]
}

layers[4][1] = {
  type: 'default',
  text: 'bba',
  depend: [{
    layer: 3,
    step: 2
  }]
}

layers[5] = []
layers[5][0] = {
  type: 'default',
  text: 'baa',
  depend: [{
    layer: 4,
    step: 0
  },
  {
    layer: 4,
    step: 1
  }]
}
