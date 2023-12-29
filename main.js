import { locations } from './locations.js';

  // variables & selectors
  let xp = 0;
  let hp = 50;
  let gp = 100;
  let inv = ['short sword', 'grappling hook'];
  let jsonString = JSON.stringify(locations);
  let locData = JSON.parse(JSON.stringify(locations));

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
  tavernBtn.onclick = goScene("tavern");
  

  function goScene(sceneName)
  {
    screen.style.backgroundImage = locData[sceneName]["background"]; //TODO: Add this to JSON
    txt.innerHTML = locData[sceneName]["text"];

    let buttons = locData[sceneName].buttons;

    for(let i = 0; i < buttons.length; i++)
    {
      let tempBtn = document.createElement('button');
      tempBtn.innerHTML = buttons[i]["html"];
      document.querySelector('#txt').appendChild(tempBtn);   
      tempBtn.addEventListener('click', function() {
        let newScene = locData[buttons[i]["route"]];
        goScene(newScene.name);
      })
    }
  }

  //functions
  // function goTavern() {
  //   screen.style.backgroundImage = "url('/images/tavern.png')";
  //   txt.innerHTML = locData["tavern"]["text"];

  //   let buttons = locData["tavern"].buttons;

  //   for(let i = 0; i < buttons.length; i++)
  //   {
  //     let tempBtn = document.createElement('button');
  //     tempBtn.innerHTML = buttons[i];
  //     document.querySelector('#txt').appendChild(tempBtn);   
  //     tempBtn.onclick = talkToBarkeep;
  //   }
  // }
  
  function talkToBarkeep() {
    txt.innerHTML = `BARKEEP:<br> Well hello there! I'm Esmee Fairfoot. State your name and business! <br>`;
    let btn1 = document.createElement('button');
    btn1.innerText = "Hi! I'm new in town. I am here to seek my fortune!";
    document.querySelector('#txt').appendChild(btn1);
    
  }

  function talkToPatron() {

  }

  function lookQuests() {

  }
  



