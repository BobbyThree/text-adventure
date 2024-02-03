//modules
import { scenes } from './scenes.js';
import { dialogs } from '/dialogs.js';
import { buyItems } from '/buy-items.js';
import { sellItems } from '/sell-items.js';
import { weapons } from '/weapons.js';
import { monsters } from '/monsters.js';
import { battles } from '/battles.js';

let sceneData = JSON.parse(JSON.stringify(scenes));
let dialogData = JSON.parse(JSON.stringify(dialogs));
let buyData = JSON.parse(JSON.stringify(buyItems));
let sellData = JSON.parse(JSON.stringify(sellItems));
let weaponData = JSON.parse(JSON.stringify(weapons));
let monsterData = JSON.parse(JSON.stringify(monsters));
let battleData = JSON.parse(JSON.stringify(battles));

//variables & selectors
let xp = 0;
let hp = 50;
let gp = 100;
let inv = ['wooden sword'];  

const xpTxt = document.querySelector('#xp-txt');
const hpTxt = document.querySelector('#hp-txt');
const gpTxt = document.querySelector('#gp-txt');
const weaponTxt = document.querySelector('#weapon-txt');
const invTxt = document.querySelector('#inv-txt');
const txt = document.querySelector('#txt');
const screen = document.querySelector('#screen'); 
const monsterHpSpan = document.querySelector('#monster-hp-span'); 
const monsterHpTxt = document.querySelector('#monster-hp-txt'); 
const invSpan = document.querySelector('#inv-span'); 


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
    case 'chicken_battle':
      changeDialog(route.name);      
      battle('chicken');            
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
    // TODO: add back button
    tempBtn.onclick = () => {       
      let str = 'sell_' + e;
      let saleItem = str.replace(/\s+/g, '');
      sellItem(saleItem);
      changeDialog('sold');
      createButtons('sold');           
    };  
  })
}

function battle(currentMonster) {
  //select weapon
  inv.forEach((e) => {
    let tempBtn = document.createElement('button');
    tempBtn.innerHTML = e;
    txt.appendChild(tempBtn);    
    
    tempBtn.onclick = () => {
      let str = e;
      let currentWeapon = str.replace(/\s+/g, '');
      weaponTxt.innerHTML = currentWeapon;      
      attack(currentWeapon, currentMonster);     
    };  
  })
}

function attack(weaponName, monsterName) {
  let minDamage = weaponData[weaponName].min_damage;
  let maxDamage = weaponData[weaponName].max_damage;  
  let monsterHp = monsterData[monsterName].hp;
  monsterHpSpan.style.display = 'block';
  monsterHpTxt.innerHTML = monsterHp;  
    
  const accuracy = Math.random();
  if(accuracy < 2/3) {    
    monsterHp -= damage(minDamage, maxDamage);    
    monsterData[monsterName].hp = monsterHp;
    monsterHpTxt.innerHTML = monsterHp;
    txt.innerHTML = `HIT! ${monsterName} takes damage`
    const tempBtn = document.createElement('button');
    txt.appendChild(tempBtn);
    tempBtn.innerHTML = 'Next';
    if(monsterHp <= 0) {
      killMonster(monsterName); //TODO: queue another chicken
    }
    tempBtn.onclick = () => monsterAttack(monsterName);     
  } else {
    txt.innerHTML = 'miss!<br>';
    const tempBtn = document.createElement('button');
    txt.appendChild(tempBtn);
    tempBtn.innerHTML = 'Next';
    tempBtn.onclick = () => monsterAttack(monsterName);    
  }
}

function damage(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);  
  return Math.floor(Math.random() * (max - min) + min);
}

function monsterAttack(monsterName){  
  let minDamage = monsterData[monsterName].min_damage;
  let maxDamage = monsterData[monsterName].max_damage;
    
  const accuracy = Math.random();
  if(accuracy < 2/3) {    
    hp -= damage(minDamage, maxDamage);
    hpTxt.innerHTML = hp;    
    txt.innerHTML = `The ${monsterName} attacks...HIT!`    
    const tempBtn = document.createElement('button');
    txt.appendChild(tempBtn);
    tempBtn.innerHTML = 'Next';
    if(hp <= 0) {
      killPlayer();
    } 
    tempBtn.onclick = () => {
      changeDialog('battle');
      battle(monsterName);
    }
         
  } else {
    txt.innerHTML = `The ${monsterName} attacks...MISS!`;
    const tempBtn = document.createElement('button');
    txt.appendChild(tempBtn);
    tempBtn.innerHTML = 'Next';
    tempBtn.onclick = () => {
      changeDialog('battle');
      battle(monsterName);
        
    }    
  }
}

function killPlayer() {
  changeDialog('kill_player');
  changeScene('kill_player');
  createButtons('kill_player');
}

function killMonster(monsterName) {
  if (monsterName === 'chicken') {
    monsterHpSpan.style.display = 'none';
    changeDialog('kill_chicken');
    createButtons('kill_chicken')
    changeScene('farm');
  }
}
