// перечень букв, с которыми мы работаем в принципе (~словарь-букварь)
let group = [], letter;
//группа гласные
group[0] = [];
group[0].push(new AddMassiveLetter('a'));
group[0].push(new AddMassiveLetter('ja'));
group[0].push(new AddMassiveLetter('o'));
group[0].push(new AddMassiveLetter('jo'));
group[0].push(new AddMassiveLetter('u'));
group[0].push(new AddMassiveLetter('ju'));
group[0].push(new AddMassiveLetter('ee'));
group[0].push(new AddMassiveLetter('je'));
group[0].push(new AddMassiveLetter('y'));
group[0].push(new AddMassiveLetter('i'));
//группа согласные взрывные
group[1] = [];
group[1].push(new AddMassiveLetter('b'));
group[1].push(new AddMassiveLetter('p'));
group[1].push(new AddMassiveLetter('d'));
group[1].push(new AddMassiveLetter('t'));
group[1].push(new AddMassiveLetter('g'));
group[1].push(new AddMassiveLetter('k'));
group[1].push(new AddMassiveLetter('l'));
group[1].push(new AddMassiveLetter('m'));
group[1].push(new AddMassiveLetter('n'));
//группа согласные вокал
group[1].push(new AddMassiveLetter('v'));
group[1].push(new AddMassiveLetter('f'));
group[1].push(new AddMassiveLetter('zh'));
group[1].push(new AddMassiveLetter('sh'));
group[1].push(new AddMassiveLetter('z'));
group[1].push(new AddMassiveLetter('s'));
group[1].push(new AddMassiveLetter('r'));
//группа согласные прочие + нечитаемые
group[1].push(new AddMassiveLetter('j'));
group[1].push(new AddMassiveLetter('h'));
group[1].push(new AddMassiveLetter('cc'));
group[1].push(new AddMassiveLetter('ch'));
group[1].push(new AddMassiveLetter('sch'));
//группа нечитаемые
group[2] = [];
group[2].push(new AddMassiveLetter('tvjordyj'));
group[2].push(new AddMassiveLetter('mjagkij'));



let mask; // массив со всеми масками
loadMasksFromBrowser();


function deleteLastMask() {
  localStorage.removeItem(localStorage.length-1);
  loadMasksFromBrowser();
}

function loadMasksFromBrowser() {
  mask = []
  let i = 0;

  while (i<localStorage.length) {
    mask.push(addMassiveMask(localStorage[i]));
    i++;
  }
  listMasks();
}

function saveMask(name) {

  let nameMask = addMassiveMask(name);

  let i = 0;
  let anyBodyMatch = false;
  while (i < mask.length) {

    if (mask[i].length !== nameMask.length) {
      i++;
      continue;
    }

    let ii = 0;
    let isMatch = true;

    while (ii < nameMask.length) {

      if (nameMask[ii] != mask[i][ii]) {
        isMatch = false;
        break;
      }
      ii++;
    }
    if (isMatch) {
      anyBodyMatch = true;
      alert('Маска уже существует!');
      break;
    }

    i++;
  }

  if (!anyBodyMatch) {
    localStorage[mask.length] = name;
    mask.push(addMassiveMask(name));

  }



}

function selectLetter(a) {
  console.log(a);
  let b = a.rndElement;
  b.isSelect = !b.isSelect;
  if (b.isSelect == true) {
    a.classList.add("selected");
  }
  else {
    a.classList.remove("selected");
  }
}

// добавление буквы в массив
function AddMassiveLetter(id, isSelect = false) {
    this.isSelect = isSelect;
    this.name = document.getElementById(id).innerHTML;
    this.element = document.getElementById(id);
    this.element.rndElement = this;
}

// из слова в маску
function addMassiveMask(word) {
  console.log(word);
  let massWord = []; //massWord - маска-массив
  let i = 0; // i - номер буквы в слове
  while (i < word.length) {
    let ii = 0;//номер группы букв
    while (ii < group.length) {//колво групп (0,1,2,)
      let iii = 0; //номер буквы в группе
      while (iii < group[ii].length) { //group[ii] = group[x] (местоимение)
        if (word[i] == group[ii][iii].name) { //word[i] - сама буква
          massWord.push(ii);
        }
        iii++;
      }
      ii++;
    }
    i++;
  }
  return massWord; //возвращает массив масок из номеров группы, в кот. нах. буква
}

function listMasks() {
  let e = document.getElementById('allMasks');
  let text = "";
  let maskNmbr = 0;
  while (maskNmbr < mask.length) {
    text = text + "<li>[";
    let letterNmbrInMask = 0;
    while (letterNmbrInMask < mask[maskNmbr].length) {
      text += mask[maskNmbr][letterNmbrInMask];
      letterNmbrInMask++;
    }
    text += "]</li>";

    maskNmbr++;
  }
//  alert(text);
  e.innerHTML = text;
}

function addMask() {
  let e = document.getElementById('newMask');
  if (e.value != '') {

    saveMask(e.value);
    e.value = "";
    listMasks();
  }
}

function generate() {
  let htmlElement = document.getElementById('result');
  let answer = '';
  let selectedMask = mask[getRandomInt(mask.length)];
  let i = 0; //номер буквы из маски


  let chosenLetters = getSelectedLetters(group);


  while (i < selectedMask.length) {
    let letterId, counter=0;
    do {
      counter++;
      letterId = getRandomInt(group[selectedMask[i]].length);
    } while (group[selectedMask[i]][letterId].isSelect == false && counter<1000);
    answer = answer + group[selectedMask[i]][letterId].name;
    i++;
  }
  let previousHTML = document.getElementById('previous');
  previousHTML.innerHTML = answer + "<br>" + previousHTML.innerHTML;
  htmlElement.innerHTML = answer;
}

function getSelectedLetters(allGroups) {
// создаём массив, состоящий ТОЛЬКО из выбранных нами букв
  let chosenLetters = [];
  // function functionName(a) {
  //   a();
  // }
  //
  // functionName(()=>{alert('bla')});
  //
  //
  // let functionName = function() {}
  // let functionName = () => {}



  allGroups.forEach((lettersGroup, groupCounter) => {
    chosenLetters[groupCounter] = [];

    lettersGroup.forEach((letter) => {
      if (letter.isSelect === true) {
        chosenLetters[groupCounter].push(letter);
      }
    });
  });
  return chosenLetters;


  //
  // let groupCounter = 0, chosenLetters = [];
  // while (groupCounter < allGroups.length ) {
  //   chosenLetters[groupCounter] = [];
  //   let subGroup = 0;
  //   while (subGroup < allGroups[groupCounter].length) {
  //
  //     if (allGroups[groupCounter][subGroup].isSelect === true) {
  //       chosenLetters[groupCounter].push(allGroups[groupCounter][subGroup]);
  //     }
  //     subGroup++;
  //   }
  //   groupCounter++;
  // }
  // return chosenLetters;
}

function ifEnterSaveMask(e) {

    if (e.code == 'Enter') {
      addMask();
    }

}

function chooseRemoveAll(a) {
  let ii = 0;
  while (ii < group.length) {
    let iii = 0;
    while (iii < group[ii].length) {
      if (a == true) {
        group[ii][iii].isSelect = true;
        group[ii][iii].element.classList.add("selected");
      } else {
        group[ii][iii].isSelect = false;
        group[ii][iii].element.classList.remove("selected");
      }
      iii++;
    }
    ii++;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
