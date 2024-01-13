import { scenes } from './scenes.js';
import { dialogs } from '/dialogs.js';
import { backgrounds } from '/backgrounds.js';


let sceneData = JSON.parse(JSON.stringify(scenes));
let dialogData = JSON.parse(JSON.stringify(dialogs));

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

//initialize game
changeDialog('title');
changeScene('title');
createButtons('title');   
  
    
//main engine
function clickHandler(newDialog) {  
  changeDialog('town');
  changeScene('town');
  createButtons('town'); 
}
      

//functions
function changeScene(sceneName) {  
  let newScene = Object.values(scenes);
  for(let s = 0; s < newScene.length; s++ ) {
    screen.style.backgroundImage = sceneData[sceneName].background;
    }
  }

function changeDialog(dialogName) {
  txt.innerHTML = dialogData[dialogName].text;  
}

function createButtons(dialogName) {
  let buttons = dialogData[dialogName].buttons;  
  for(let i = 0; i < buttons.length; i++) {
    let tempBtn = document.createElement('button');
    tempBtn.innerHTML = buttons[i].label; 
    txt.appendChild(tempBtn);
    tempBtn.addEventListener('click', function() {
    let newDialog = dialogData[buttons[i].route];
    clickHandler();    
    });
  }
}
