import { locations } from './locations.js';
import { dialogs } from '/dialogs.js';

  // variables & selectors
  let xp = 0;
  let hp = 50;
  let gp = 100;
  let inv = ['short sword', 'grappling hook'];
  //let jsonString = JSON.stringify(locations);
  let locData = JSON.parse(JSON.stringify(locations));
  let dialogData = JSON.parse(JSON.stringify(dialogs));

  const xpTxt = document.querySelector('#xp-txt');
  const hpTxt = document.querySelector('#hp-txt');
  const gpTxt = document.querySelector('#gp-txt');
  const invTxt = document.querySelector('#inv-txt');
  const txt = document.querySelector('#txt');
  const screen = document.querySelector('#screen');

  //btn assignments
  const playGame = document.querySelector('#play');
  const tavernBtn = document.querySelector('#tavern-btn');
  const barkeepBtn = document.querySelector('#talk-barkeep');
  const patronBtn = document.querySelector('#talk-patron');
  const questsBtn = document.querySelector('#look-quests');
  const pay1gp = document.querySelector('#pay1gp');

  //initialize game
  goLocation("title");  
  

  //functions
  function goLocation(locName) {
    screen.style.backgroundImage = locData[locName].background;
    
      goDialog(locName);
    }
  

function goDialog(locName) {
  txt.innerHTML = locData[locName].text;
    let buttons = locData[locName].buttons;

    for(let i = 0; i < buttons.length; i++) {
      let tempBtn = document.createElement('button');
      tempBtn.innerHTML = buttons[i].html;
      txt.appendChild(tempBtn);
      tempBtn.addEventListener('click', function() {
        let newLoc = locData[buttons[i].route];
        goLocation(newLoc.name);
      });
    }
  
}


