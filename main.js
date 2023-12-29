import { locations } from './locations.js';

  // variables & selectors
  let xp = 0;
  let hp = 50;
  let gp = 100;
  let inv = ['short sword', 'grappling hook'];

  const xpTxt = document.querySelector('#xp-txt');
  const hpTxt = document.querySelector('#hp-txt');
  const gpTxt = document.querySelector('#gp-txt');
  const invTxt = document.querySelector('#inv-txt');
  const txt = document.querySelector('#txt');
  const screen = document.querySelector('#screen');

  //btn assignments
  const tavernBtn = document.querySelector('#tavern-btn');
  const barkeepBtn = document.querySelector('#talk-barkeep');
  const patronBtn = document.querySelector('#talk-patron');
  const questsBtn = document.querySelector('#look-quests');

  //events
  tavernBtn.onclick = goTavern;
  barkeepBtn.onclick = talkToBarkeep;
  patronBtn.onclick = talkToPatron;
  questsBtn.onclick = lookQuests;

  //functions
  function goTavern() {
    txt.innerHTML = locations[1].text;
    screen.style.backgroundImage = "url('/images/tavern.png')";
  }
  
  function talkToBarkeep() {
    txt.innerHTML = locations[2].text;
  }

  function talkToPatron() {

  }

  function lookQuests() {

  }
  



