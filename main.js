//modules
import { scenes } from './scenes.js';
import { dialogs } from '/dialogs.js';
import { player } from '/player.js';
import { items } from '/items.js';
import { monsters } from '/monsters.js';
import { battles } from '/battles.js';


let sceneData = JSON.parse(JSON.stringify(scenes));
let dialogData = JSON.parse(JSON.stringify(dialogs));
let playerData = JSON.parse(JSON.stringify(player));
let itemData = JSON.parse(JSON.stringify(items));
let monsterData = JSON.parse(JSON.stringify(monsters));
let battleData = JSON.parse(JSON.stringify(battles));

//selectors
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
restart();  
    
//main engine
function clickHandler(buttonType, route, item) {
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
    case 'restart':      
      restart(); 
      break;     
    case 'buy':      
      changeDialog(route.name); 
      createButtons(route.name);      
      buyItem(item);
      break; 
    case 'sell':
      changeDialog(route.name); 
      createButtons(route.name);
      sellItem(route.name);
      break;  
    case 'sleep':
      changeDialog(route.name); 
      createButtons(route.name);
      changeScene(route.name);
      sleep();
      break;  
    case 'inventory':      
      changeDialog(route.name);      
      sellFromInventory(route.name);            
      break;  
    case 'chicken_battle':
      changeDialog(route.name);      
      battle('chicken');            
      break;  
    case 'chicken_battle2':
      changeDialog(route.name);      
      battle('chicken2');            
      break;  
    case 'chicken_battle3':
      changeDialog(route.name);      
      battle('chicken3');            
      break;  
    case 'croakers_battle':
      changeDialog(route.name);      
      battle('croaker');            
      break;  
    case 'gold':
      changeDialog(route.name);
      createButtons(route.name);      
      getGold();            
      break;  
    case 'win_game':
      giveItemsToIvy();
      winGame();
                 
      break;  
  }
}      

//functions
function changeScene(sceneName) {   
  screen.style.backgroundImage = sceneData[sceneName].background;
  let visits = sceneData[sceneName].visited;
  visits++;
  sceneData[sceneName].visited = visits;
  playerData['player'].currentScene = sceneData[sceneName].name;
  console.log(playerData['player'].currentScene);  
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
    let item = dialogData[dialogName].buttons[i].item;
    clickHandler(buttonType, route, item);    
    });
  }
}

function buyItem(itemId) {  
  let cost = itemData[itemId].buyPrice;
  let itemBuying = itemData[itemId].item;
  let itemInv = playerData['player'].items;
  let weaponInv = playerData['player'].weapons;  
  if(playerData['player'].gp >= cost) {  
    playerData['player'].gp -= cost;
    playerData['player'].gp = playerData['player'].gp; //update player gp
    gpTxt.innerHTML = playerData['player'].gp;
      if(itemData[itemId].itemType === 'item') {
        itemInv.push(itemBuying);         
        updateItemInv();
      } else if (itemData[itemId].itemType === 'weapon') {
        weaponInv.push(itemBuying);        
        updateWeaponInv();
      }   
  } else {
    //changeDialog('broke'); 
    //createButtons('broke'); //TODO: need fix - only works for shoppe
    broke();   
  }
}

function broke() {
  txt.innerHTML = 'You do not have enough gold!';

}

function updateItemInv() {
  let itemInv = playerData['player'].items;
  let newItemInv = [...new Set(itemInv)]; //gets rid of dupes
  playerData['player'].items = newItemInv;
  invTxt.innerHTML = newItemInv;  
}
function updateWeaponInv() {
  let weaponInv = playerData['player'].weapons;
  let newWeaponInv = [...new Set(weaponInv)]; //gets rid of dupes
  playerData['player'].weapons = newWeaponInv;
  weaponTxt.innerHTML = newWeaponInv;  
}

function sellItem(itemId) {
  let item = itemData[itemId].item;
  let price = itemData[itemId].sellPrice;
  let weaponInv = playerData['player'].weapons;
  playerData['player'].gp += price;
  playerData['player'].gp = playerData['player'].gp; //update player gp
  gpTxt.innerHTML = playerData['player'].gp;  
  const weaponIndex = weaponInv.indexOf(item);
  weaponInv.splice(weaponIndex, 1);
  updateWeaponInv();
}

function sellFromInventory() {
  let weaponInv = playerData['player'].weapons;
  weaponInv.forEach((e) => {
    let tempBtn = document.createElement('button');
    tempBtn.innerHTML = e;
    txt.appendChild(tempBtn);    
    
    tempBtn.onclick = () => {       
      let str = e;
      let saleItem = camelize(str);
      sellItem(saleItem);
      changeDialog('sold');
      createButtons('sold');           
    };  
  })
  let backBtn = document.createElement('button');
    backBtn.innerHTML = 'Back';
    txt.appendChild(backBtn);
    backBtn.onclick = () => {
      changeDialog('shoppe');
      createButtons('shoppe');
    }
}

function sleep() {
  let gp = playerData['player'].gp;
  let hp = playerData['player'].hp;
  gp -= 20;
  playerData['player'].gp = gp;
  gpTxt.innerHTML = gp;
  hp = 50;
  playerData['player'].hp = hp;
  hpTxt.innerHTML = hp;
}

function battle(currentMonster) {
  //select weapon
  let weaponInv = playerData['player'].weapons;
  weaponInv.forEach((e) => {
  let tempBtn = document.createElement('button');
  tempBtn.innerHTML = e;
  txt.appendChild(tempBtn);    
  
  tempBtn.onclick = () => {
    let str = e;      
    let currentWeapon = camelize(str);     
    attack(currentWeapon, currentMonster);     
  };  
  })
}


function attack(itemId, monsterName) {  
  let minDamage = itemData[itemId].minDamage;
  let maxDamage = itemData[itemId].maxDamage;  
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
    playerData['player'].hp -= damage(minDamage, maxDamage);
    hpTxt.innerHTML = playerData['player'].hp;   
    txt.innerHTML = `The ${monsterName} attacks...HIT!`    
    const tempBtn = document.createElement('button');
    txt.appendChild(tempBtn);
    tempBtn.innerHTML = 'Next';
    if(playerData['player'].hp <= 0) {
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
  switch (monsterName) {
    case 'chicken':
      monsterHpSpan.style.display = 'none';
      changeDialog('kill_chicken');
      createButtons('kill_chicken');
      break;
    case 'chicken2':
      monsterHpSpan.style.display = 'none';
      changeDialog('kill_chicken2');
      createButtons('kill_chicken2');
      break;
    case 'chicken3':
      monsterHpSpan.style.display = 'none';
      changeDialog('kill_chicken3');
      createButtons('kill_chicken3');
      break;
    case 'croaker':
      monsterHpSpan.style.display = 'none';
      changeDialog('kill_croaker');
      createButtons('kill_croaker');
      break;
  }
}

function getGold() {
  playerData['player'].gp;
  gp += 500;
  playerData['player'].gp = gp;
  gpTxt.innerHTML = gp;
}

function restart() {  
  let itemInv = playerData['player'].items;
  let weaponInv = playerData['player'].weapons;  
  playerData['player'].hp = 50;
  hpTxt.innerHTML = playerData['player'].hp;  
  playerData['player'].gp = 100;
  gpTxt.innerHTML = playerData['player'].gp; 
  monsterHpSpan.style.display = 'none';
  weaponInv = ['Wooden Sword'];
  playerData['player'].weapons = weaponInv;
  itemInv = [];    
  playerData['player'].items = itemInv;
  weaponTxt.innerHTML = weaponInv;
  invTxt.innerHTML = itemInv;
  changeDialog('title');
  createButtons('title');
  changeScene('title');
}

function giveItemsToIvy() {
   
}

function winGame() {
  
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
  return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
