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
  const playGame = document.querySelector('#play');
  const tavernBtn = document.querySelector('#tavern-btn');
  const barkeepBtn = document.querySelector('#talk-barkeep');
  const patronBtn = document.querySelector('#talk-patron');
  const questsBtn = document.querySelector('#look-quests');

  //events
  playGame.onclick = () => goScene("town");
  

  //functions
  function goScene(sceneName) {
    screen.style.backgroundImage = locData[sceneName].background;
    txt.innerHTML = locData[sceneName].text;
    let buttons = locData[sceneName].buttons;

    for(let i = 0; i < buttons.length; i++) {
      let tempBtn = document.createElement('button');
      tempBtn.innerHTML = buttons[i]["html"];
      txt.appendChild(tempBtn);
      tempBtn.addEventListener('click', function() {
        let newScene = locData[buttons[i]["route"]];
        goScene(newScene.name);
      })
    }
  }
  



