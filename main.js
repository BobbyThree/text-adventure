import { scenes } from './scenes.js';
import { dialogs } from '/dialogs.js';
import { items } from '/items.js';


let sceneData = JSON.parse(JSON.stringify(scenes));
let dialogData = JSON.parse(JSON.stringify(dialogs));
let itemData = JSON.parse(JSON.stringify(items));

// variables & selectors
let xp = 0;
let hp = 50;
let gp = 100;
let inv = ['short sword'];  

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
invTxt.innerHTML = inv;  
    
//main engine
function clickHandler(buttonType, route) {
  switch(buttonType) {
    case 'scene':
      changeScene(route.name);
      changeDialog(route.name);  
      createButtons(route.name);
      break;
    case 'dialog':
      changeDialog(route.name); 
      createButtons(route.name); 
      break;     
    case 'buy':
      buyItem(route.name);
      changeDialog(route.name); 
      createButtons(route.name); 
      break;     
  }
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
    let route = dialogData[buttons[i].route];
    let buttonType = dialogData[dialogName].buttons[i].type;
    clickHandler(buttonType, route);    
    });
  }
}

function buyItem(itemName) {  
  let cost = itemData[itemName].cost;
  let item = itemData[itemName].item;  
  gp = gp - cost;
  gpTxt.innerHTML = gp;  
  inv.push(item);
  updateInv(item);
}

function updateInv() {
  let newInv = [...new Set(inv)]; //gets rid of dupes
  invTxt.innerHTML = newInv;  
}
