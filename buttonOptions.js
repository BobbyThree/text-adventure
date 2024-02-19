function hasKilledChickens() {
  let buttonOptions = dialogData['croakers_details'].buttonOptions;

  if (playerData['player'].killedChickens = true) {
    return buttonOptions[1];
  } else {
    return buttonOptions[0];
  }

}

