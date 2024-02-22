function clickHandler(buttonType, route, item) {
  changeScene(route.name);
  changeDialog(route.name);
  createButtons(route.name);
  doAction();
}

function changeScene(sceneName) {
  screen.style.backgroundImage = sceneData[sceneName].background;
}

function changeDialog(dialogName) {
  txt.innerHTML = dialogData[dialogName].text;
}

function createButtons() {
  let buttons = dialogData[dialogName].buttons;    
  for(let i = 0; i < buttons.length; i++) {
    let tempBtn = document.createElement('button');
    tempBtn.innerHTML = buttons[i].label; 
    txt.appendChild(tempBtn);
    if (dialogData[dialogName].txtStyle === 'dialog') {
      tempBtn.style.backgroundColor = 'rgb(70, 70, 70';
      tempBtn.style.color = 'lightgreen';
      tempBtn.style.borderBottom = '2px solid black';
      tempBtn.addEventListener('mouseover', () => {
        tempBtn.style.color = 'white';
      });
      tempBtn.addEventListener('mouseout', () => {
        tempBtn.style.color = 'lightgreen';
      });
    }  
    tempBtn.addEventListener('click', function() {
    let route = dialogData[buttons[i].route];
    let buttonType = dialogData[dialogName].buttons[i].type;
    let item = dialogData[dialogName].buttons[i].item;
    clickHandler(buttonType, route, item);    
    });
  }
}

function doAction() {

}
