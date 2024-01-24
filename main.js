import { scenes } from './scenes.js';
import { dialogs } from '/dialogs.js';
import { buyItems } from '/buy-items.js';
import { sellItems } from '/sell-items.js'


let sceneData = JSON.parse(JSON.stringify(scenes));
let dialogData = JSON.parse(JSON.stringify(dialogs));
let buyData = JSON.parse(JSON.stringify(buyItems));
let sellData = JSON.parse(JSON.stringify(sellItems));

// variables & selectors
let xp = 0;
let hp = 50;
let gp = 100;
let inv = ['wooden sword'];  

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
      changeDialog(route.name); 
      createButtons(route.name);
      buyItem(route.name);
      break; 
    case 'sell':
      changeDialog(route.name); 
      createButtons(route.name);
      sellItem(route.name);
      break;  
    case 'inventory':      
      changeDialog(route.name);      
      sellFromInventory(route.name);            
      break;  
  }
}      

//functions
function changeScene(sceneName) {   
  screen.style.backgroundImage = sceneData[sceneName].background;
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
  let cost = buyData[itemName].cost;
  let item = buyData[itemName].item;
  if(gp >= cost) {  
  gp = gp - cost;
  gpTxt.innerHTML = gp;  
  inv.push(item);
  updateInv(item);
  } else {
    changeDialog('broke');
    createButtons('broke');
  }
}

function updateInv() {
  let newInv = [...new Set(inv)]; //gets rid of dupes
  invTxt.innerHTML = newInv;  
}

function sellItem(itemName) {
  let item = sellData[itemName].item;
  let price = sellData[itemName].price;
  gp = gp + price;
  gpTxt.innerHTML = gp;
  const invIndex = inv.indexOf(item);
  inv.splice(invIndex, 1);
  invTxt.innerHTML = inv;
}

function sellFromInventory() {
  inv.forEach((e) => {
    let tempBtn = document.createElement('button');
    tempBtn.innerHTML = e;
    txt.appendChild(tempBtn);    
    
    tempBtn.onclick = () => {       
      let str = 'sell_' + e;
      let saleItem = str.replace(/\s+/g, '');
      sellItem(saleItem);
      changeDialog('sold');
      createButtons('sold');           
    };  
  })
}

