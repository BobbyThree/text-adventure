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
  

  //functions
  function goTavern() {
    screen.style.backgroundImage = "url('/images/tavern.png')";
    txt.innerHTML = 'You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests.<br>';
    
    let btn1 = document.createElement('button');
    btn1.innerText = "Talk to Barkeep";
    document.querySelector('#txt').appendChild(btn1);    
    btn1.onclick = talkToBarkeep;
    
    let btn2 = document.createElement('button');
    btn2.innerText = "Talk to Patron";
    document.querySelector('#txt').appendChild(btn2);    
    btn2.onclick = talkToPatron;

    let btn3 = document.createElement('button');
    btn3.innerText = "Look at Quests";
    document.querySelector('#txt').appendChild(btn3);    
    btn3.onclick = lookQuests;
  }
  
  function talkToBarkeep() {
    txt.innerHTML = `BARKEEP:<br> Well hello there! I'm Esmee Fairfoot. State your name and business! <br>`;
    let btn1 = document.createElement('button');
    btn1.innerText = "Hi! I'm Poopydoops. I'm new in town. I am here to seek my fortune!";
    document.querySelector('#txt').appendChild(btn1);

    let btn2 = document.createElement('button');
    btn2.innerText = "May I please have two tofu pups?";
    document.querySelector('#txt').appendChild(btn2);

    let btn3 = document.createElement('button');
    btn3.innerText = "I'm Nunya...Nunya BUSINESS! Eat shit";
    document.querySelector('#txt').appendChild(btn3);
    
  }

  function talkToPatron() {

  }

  function lookQuests() {

  }
  



