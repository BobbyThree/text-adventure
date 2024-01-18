export const dialogs = {
  "title": {
    "name": "title",
    "text": "Welcome to Big Trouble in Little Ixonia! This is a text based adventure game created by Robert Lewis III. Click the 'Play Game' button to begin. <br>",
    "buttons": [{"label": "Play Game", "route": "town", "type": "scene"}
  ]
  },
  "town": {
    "name": "town",    
    "text": "You arrive in Ixonia's town center. The hour is late and there are very few people in sight. The tavern appears to be still open. <br>",
    "buttons": [{"label": "Enter Tavern", "route": "tavern", "type": "scene"}
  ]
  },
  "tavern": {
    "name": "tavern",     
    "text": "You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests. <br>",
    "buttons": [{"label": "Talk to Barkeep", "route": "barkeep", "type": "scene"},
      {"label": "Talk to Patron", "route": "patron", "type": "scene"},
      {"label": "Look at Quests", "route": "quests", "type": "scene"},
      {"label": "Leave tavern", "route": "town2", "type": "scene"}
    ]      
  },
  "barkeep": {
    "name": "barkeep",    
    "text": "BARKEEP:<br> Hello! I'm Esmee Fairfoot. State your name and business! <br>",    
    "buttons": [
      {"label": "I'm new in town. I seek my fortune!", "route": "barkeep_honest", "type": "dialog"},
      {"label": "May I please have... 2 tofu pups?", "route": "barkeep_funny", "type": "dialog"},
      {"label": "I'm Nunya...Nunya business! Eat shit", "route": "died", "type": "scene"},
      {"label": "back", "route": "tavern2", "type": "scene"}
    ]    
  },
  "barkeep_honest": {
    "name": "barkeep_honest",    
    "text": "BARKEEP:<br>Nice to meet you! What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
    "buttons": [
      {"label": "Gimme an ale", "route": "ale", "type": "dialog"},
      {"label": "Lemme get a tall glass of milk.", "route": "milk", "type": "dialog"},
      {"label": "Lemme get that Unicorn Blood!!", "route": "unicorn", "type": "dialog"}
    ]    
  },  
  "barkeep_funny": {
    "name": "barkeep_funny",
    "text": "BARKEEP:<br>okayyyyyy well....What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
    "buttons": [
      {"label": "Gimme an ale", "route": "ale", "type": "dialog"},
      {"label": "Lemme get a tal glass of milk", "route": "milk", "type": "dialog"},
      {"label": "Let me have ht Unicorn Blood!!", "route": "unicorn", "type": "dialog"}
    ]    
  },
  "died": {
    "name": "died",
    "text": "You died, shoulda thought about that shit before you said it <br>",
    "buttons": [{"label": "restart", "route": "town", "type": "scene"}]    
  },
  "ale": {
    "name": "ale",
    "text": "Here ya go, buddy. that will be 1gp<br>",
    "buttons": [
      {"label": "pay 1gp", "route": "buy_ale", "type": "buy"}, 
      {"label": "no thanks, I changed my mind", "route": "barkeep_funny", "type": "dialog"}
    ]
  },
  "milk": {
    "name": "milk",
    "text": "Bwahahaha! good one, here's your ALE. That'll be 1gp.<br>",
    "buttons": [
      {"label": "pay 1gp", "route": "buy_ale", "type": "buy"}, 
      {"label": "No thanks, I changed my mind", "route": "barkeep_funny", "type": "dialog"}
    ]    
  },
  "unicorn": {
    "name": "unicorn",
    "text": "BARKEEP:<br>Tell ya what - come back when you've proven yourself as a true warrior, and I'll give ya one on the house.<br>",
    "buttons": [{"label": "Ok, I'll be back!", "route": "tavern2", "type": "scene"}]    
  },
  "tavern2": {
    "name": "tavern2",
    "text": "",
    "buttons": [{"label": "talk to Barkeep", "route": "barkeep2", "type": "scene"},
      {"label": "talk to patron", "route": "patron", "type": "scene"},
      {"label": "Look at quests", "route": "quests", "type": "scene"},
      {"label": "Leave tavern", "route": "town2", "type": "scene"}
    ]
  },
  "town2": {
    "name": "town2",
    "text": "You are back in the Town Square. Where do you wish to go now?<br>",
    "buttons": [
    {"label": "Enter Tavern", "route": "tavern", "type": "scene"}]
  },
  "barkeep2": {
    "name": "barkeep2",
    "text": "So, you're back. Have you proven yourself worthy of my unicorn blood?",
    "buttons": [
      {"label": "Yea! I did the thing", "route": "", "type": "dialog"},
      {"label": "Nah, I'm still working on it", "route": "", "type": "dialog"}
    ]    
  },
  "buy_ale": {
    "name": "buy_ale",
    "text": "thank you!<br>",
    "buttons": [
      {"label": "Buy ale", "route": "ale", "type": "dialog"},
      {"label": "Buy milk (which is also ale)", "route": "milk", "type": "dialog"},
      {"label": "Leave tavern", "route": "town2", "type": "scene"}
    ]
  },
  "quests": {
    "name": "quests",
    "text": "",
    "buttons": [{"label": "exit", "route": "tavern2", "type": "scene"}]
  },
  "patron": {
    "name": "patron",
    "text": "PATRON:<br>Hi, what do you want?<br>",
    "buttons": [  
      {"label": "Are you Roger?", "route": "roger", "type": "dialog"},
      {"label": "Wait...don't I know you from somewhere?", "route": "somewhere", "type": "dialog"},
    ]
  },
  "roger": {
    "name": "roger",
    "text": "Roger:<br>Yep that's me. <br>",
    "buttons": [  
      {"label": "The quest board over there says 'ask Roger for details'.", "route": "details", "type": "dialog"},
      {"label": "What the heck are ya wearing?", "route": "outfit", "type": "dialog"}
    ]
  },
  "somewhere": {
    "name": "somewhere",
    "text": "Hmm, not likely. Ever been to Pestulon? Are you the one that beat my high score on Astro Chicken?<br>",
    "buttons": [  
      {"label": "Umm..actually I was wanting to get details about the quests on the board..?'.", "route": "details", "type": "dialog"}
    ]
  },
  "outfit": {
    "name": "outfit",
    "text": "What, this old thing? It's my space-janitor uniform. Duh!<br>",
    "buttons": [  
      {"label": "Umm..actually I was wanting to get details about the quests on the board..?'.", "route": "details", "type": "dialog"}
    ]
  },
  "details": {
    "name": "details",
    "text": "Sure thing. Which quest are you wondering about?<br>",
    "buttons": [
      {"label": "Halfling", "route": "halfling_details", "type": "dialog"},
      {"label": "Bullywug Croakers", "route": "croakers_details", "type": "dialog"},
      {"label": "Beholder", "route": "beholder_details", "type": "dialog"}
    ]
  },
  "halfling_details": {
    "name": "halfling_details",
    "text": "The Barkeep's daughter has gone missing. Last we heard, she was heading up to Aurochsmow for the day to look for work. She should've been back days ago. You must go to Aurochsmow and find her. The reward for this quest is an exuisite longbow of immense power.<br>",
    "buttons": [
      {"label": "Accept Quest", "route": "halfling_quest", "type": "scene"},
      {"label": "Bullywug Croakers", "route": "croakers_details", "type": "dialog"},
      {"label": "Beholder", "route": "beholder_details", "type": "dialog"},
      {"label": "back", "route": "tavern2", "type": "scene"}
    ]
  },
  "croakers_details": {
    "name": "croakers_details",
    "text": "Just outside of town the Croakers are blocking the main road. They ambush anyone who tries to cross into the marshes. Defeat them and recieve 500gp.<br>",
    "buttons": [
      {"label": "Accept Quest", "route": "croakers_quest", "type": "scene"},
      {"label": "Halfling", "route": "halfling_details", "type": "dialog"},      
      {"label": "Beholder", "route": "beholder_details", "type": "dialog"},
      {"label": "back", "route": "tavern2", "type": "scene"}
    ]
  },
  "beholder_details": {
    "name": "beholder_details",
    "text": "A terrible Beholder has taken up residence in the town hall. He is a vicious beast who is far beyond the abilities of any of us. You must help us! Defeat the Beholder, be the hero of this town, and recieve 10,000gp.<br>",
    "buttons": [
      {"label": "Accept Quest", "route": "beholder_quest", "type": "scene"},
      {"label": "Halfling", "route": "halfling_details", "type": "dialog"},
      {"label": "Bullywug Croakers", "route": "croakers_details", "type": "dialog"},
      {"label": "back", "route": "tavern2", "type": "scene"}
    ]
  },
  "halfling_quest": {
    "name": "halfling_quest",
    "text": "You arrive in Aurochsmaw, wondering just what you may have gotten yourself into. You can see a weapons shoppe, and an inn. <br>",
    "buttons": [
      {"label": "Go to shoppe", "route": "shoppe", "type": "scene"},
      {"label": "Go to Inn", "route": "inn", "type": "scene"}
    ]
  },
  "shoppe": {
    "name": "shoppe",
    "text": "SHOPPE OWNER:<BR>Well hellooo! Welcome to my Weapons Shoppe! What can I help you with?<br>",
    "buttons": [
      {"label": "BUY", "route": "buy_items", "type": "dialog"},
      {"label": "SELL", "route": "sell_items", "type": "dialog"},
      {"label": "I'm looking for a missing halfling girl.", "route": "halfling_info", "type": "dialog"},
      {"label": "Back", "route": "halfling_quest", "type": "scene"}
    ]
  },
  "halfling_info": {
    "name": "halfling_info",
    "text": "I haven't seen any halflings come though my shop any time recently. Sorry friend.",
    "buttons": [
    {"label": "BUY", "route": "buy_items", "type": "dialog"},
    {"label": "SELL", "route": "sell_items", "type": "dialog"},    
    {"label": "Back", "route": "halfling_quest", "type": "scene"}]
  },
  "buy_items": {
    "name": "buy_items",
    "text": "SHOPPE OWNER:<BR>Right now I've got swords and blunt weapons.",
    "buttons": [
      {"label": "what kind of swords have you got?", "route": "swords", "type": "dialog"},
      {"label": "what kind of blunt weapons have you got?", "route": "blunt", "type": "dialog"},
      {"label": "back", "route": "halfling_quest", "type": "scene"}      
    ]
  },
  "swords": {
    "name": "swords",
    "text": "SHOPPE OWNER:<BR>I've got a long sword (1-10 damage) and a broad sword (10-15 damage)",
    "buttons": [
      {"label": "buy long sword (20gp)", "route": "buy_longsword", "type": "buy"},
      {"label": "buy broadsword (60gp)", "route": "buy_broadsword", "type": "buy"},
      {"label": "Hmm, I'm just looking, thanks", "route": "shoppe", "type": "dialog"}     
    ]
  },
  "blunt": {
    "name": "blunt",
    "text": "SHOPPE OWNER:<BR>I've got a morning star (5-10 damage) and a warhammer (10-20 damage)",
    "buttons": [
      {"label": "buy morning star (40gp)", "route": "buy_morningstar", "type": "buy"},
      {"label": "buy warhammer (100gp)", "route": "buy_warhammer", "type": "buy"}      
    ]
  },
  "buy_longsword": {
    "name": "buy_longsword",
    "text": "Thanks very much, don't poke your eye out.",
    "buttons": [
    {"label": "BUY", "route": "buy_items", "type": "dialog"},
    {"label": "SELL", "route": "sell_items", "type": "dialog"},    
    {"label": "Exit", "route": "halfling_quest", "type": "scene"}
  ]    
  },
  "buy_broadsword": {
    "name": "buy_broadsword",
    "text": "Pleasure doin business with ya.",
    "buttons": [
      {"label": "BUY", "route": "buy_items", "type": "dialog"},
      {"label": "SELL", "route": "sell_items", "type": "dialog"},    
      {"label": "Exit", "route": "halfling_quest", "type": "scene"}
    ]  
  },
  "buy_morningstar": {
    "name": "buy_morningstar",
    "text": "Thank ye.",
    "buttons": [
      {"label": "BUY", "route": "buy_items", "type": "dialog"},
      {"label": "SELL", "route": "sell_items", "type": "dialog"},    
      {"label": "Exit", "route": "halfling_quest", "type": "scene"}
    ] 
  },
  "buy_warhammer": {
    "name": "buy_warhammer",
    "text": "now you're cookin with gas!",
    "buttons": [
      {"label": "BUY", "route": "buy_items", "type": "dialog"},
      {"label": "SELL", "route": "sell_items", "type": "dialog"},    
      {"label": "Exit", "route": "halfling_quest", "type": "scene"}
    ] 
  },
  "sell_items": {
    "name": "sell_items",
    "text": "Ok! whattaya got?",
    "buttons": [
      {"label": "show sellable items", "route": "sellable_items", "type": "inventory"}
    ]
  },  
  "croakers_quest": {
    "name": "croakers_quest",
    "text": "",
    "buttons": [

    ]
  },
  "beholder_quest": {
    "name": "beholder_quest",
    "text": "",
    "buttons": [

    ]
  },
  "broke": {
    "name": "broke",
    "text": "You do not have enough gold!",
    "buttons": [{"label": "back", "route": "shoppe", "type": "dialog"}]
  },
  "sellable_items": {
    "name": "sellable_items",
    "text": "Sell:<br>",
    "buttons": [{"route": "sold", "type": "sell"}]
  },
  "sold": {
    "name": "sold",
    "text": "Thx, here ya go",
    "buttons": [{"label": "back", "route": "shoppe", "type": "dialog"}]
  },
}
