'use strict';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let stepMaxLength = 1;
let spaceTotal = {x:0,y:0}

layers.forEach((allSteps) => {
  if (allSteps.length > stepMaxLength) {
    stepMaxLength = allSteps.length;
  }
});

//spaceLocal - настраиваемый
spaceTotal.x = (stepSize.x * stepMaxLength + stepSpace.x * (stepMaxLength - 1))/2 - stepSize.x/2 + spaceLocal.x;

spaceTotal.y = spaceLocal.y;

layers.forEach((allSteps, nowLayerId) => { //forEach - только у массивов; перебирает массив; здесь - наделяет свойствами
  let stepShift = {x:0,y:0}

  if (allSteps.length > 1) {
    stepShift.x = -((stepSize.x * allSteps.length + stepSpace.x * (allSteps.length - 1))/2 - stepSize.x/2);
  }
//console.log(allSteps);
  allSteps.forEach((step, nowStepId) => {
    switch (step.type) {
      case 'default':
        defaultStep(ctx, (stepSpace.x+stepSize.x)*nowStepId+spaceTotal.x + stepShift.x, (stepSpace.y+stepSize.y)*nowLayerId+spaceTotal.y + stepShift.y);
        break;
      case 'choice':
        choiceStep(ctx, (stepSpace.x+stepSize.x)*nowStepId+spaceTotal.x + stepShift.x, (stepSpace.y+stepSize.y)*nowLayerId+spaceTotal.y + stepShift.y);
        break;
      case 'event':
        eventStep(ctx, (stepSpace.x+stepSize.x)*nowStepId+spaceTotal.x + stepShift.x, (stepSpace.y+stepSize.y)*nowLayerId+spaceTotal.y + stepShift.y);
        break;
    }
  });

});


// choiceStep(ctx, 30, 30);

// eventStep(ctx, 30, 30);
