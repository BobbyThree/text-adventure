export const dialogs = {
  "title": {
    "name": "title",
    "text": "Welcome to Big Trouble in Little Ixonia! This is a text based adventure game created by Robert Lewis III. Click the 'Play Game' button to begin. <br>",
    "buttons": [{"label": "Play Game", "route": "town", "type": "scene"}]
  },
  "town": {
    "name": "town",    
    "text": "You arrive in Ixonia's town center. The hour is late and there are very few people in sight. The tavern appears to be still open. <br>",
    "buttons": [{"label": "Enter Tavern", "route": "tavern", "type": "scene"}]
  },
  "tavern": {
    "name": "tavern",     
    "text": "You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests. <br>",
    "buttons": [{"label": "Talk to Barkeep", "route": "barkeep", "type": "scene"},
    {"label": "Talk to Patron", "route": "patron", "type": "scene"},
    {"label": "Look at Quests", "route": "quests"},
    {"label": "Leave tavern", "route": "town2", "type": "scene"}]      
  },
  "barkeep": {
    "name": "barkeep",    
    "text": "BARKEEP:<br> Hello! I'm Esmee Fairfoot. State your name and business! <br>",
    "text2": "So, you're back. Have you proven yourself worthy of my unicorn blood?",
    "visited": false,
    "buttons": [{"label": "I'm new in town. I seek my fortune!", "route": "barkeep_honest", "type": "dialog"},
    {"label": "May I please have... 2 tofu pups?", "route": "barkeep_funny", "type": "dialog"},
    {"label": "I'm Nunya...Nunya business! Eat shit", "route": "barkeep_mean", "type": "scene"}]    
  },
  "barkeep_honest": {
    "name": "barkeep_honest",    
    "text": "BARKEEP:<br>Nice to meet you! What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
    "buttons": [{"label": "Gimme an ale", "route": "ale", "type": "dialog"},
    {"label": "Lemme get a tall glass of milk.", "route": "milk", "type": "dialog"},
    {"label": "Let me have ht Unicorn Blood!!", "route": "unicorn", "type": "dialog"}]    
  },  
  "barkeep_funny": {
    "name": "barkeep_funny",
    "text": "BARKEEP:<br>okayyyyyy well....What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
    "buttons": [{"label": "Gimme an ale", "route": "ale", "type": "dialog"},
    {"label": "Lemme get a tal glass of milk", "route": "milk", "type": "dialog"},
    {"label": "Let me have ht Unicorn Blood!!", "route": "unicorn", "type": "dialog"}]    
  },
  "barkeep_mean": {
    "name": "barkeep_mean",
    "text": "You died, shoulda thought about that shit before you said it <br>",
    "buttons": [{"label": "restart", "route": "town", "type": "scene"}]    
  },
  "ale": {
    "name": "ale",
    "text": "Here ya go, buddy. that will be 1gp<br>",
    "buttons": [{"label": "pay 1gp", "route": "buy_ale"}, 
    {"label": "no thanks, I changed my mind", "route": "barkeep_funny", "type": "dialog"}]
        

  },
  "milk": {
    "name": "milk",
    "text": "Bwahahaha! good one, here's your ALE. That'll be 1gp.<br>",
    "buttons": [{"label": "pay 1gp", "route": "buy_ale", "type": "dialog"}, 
    {"label": "No thanks, I changed my mind", "route": "barkeep_funny", "type": "dialog"}]    
  },
  "unicorn": {
    "name": "unicorn",
    "text": "BARKEEP:<br>Tell ya what - come back when you've proven yourself as a true warrior, and I'll give ya one on the house.<br>",
    "buttons": [{"label": "Ok, I'll be back!", "route": "tavern2", "type": "scene"}]    
  },
  "tavern2": {
    "name": "tavern2",
    "text": "",
    "buttons": [{"label": "talk to Barkeep", "route": "barkeep", "type": "scene"},
    {"label": "talk to patron", "route": "patron", "type": "scene"},
    {"label": "Look at quests", "route": "quests", "type": "scene"},
    {"label": "Leave tavern", "route": "town2", "type": "scene"}]
},
"town2": {
  "name": "town2",
  "text": "You are back in the Town Square. Where do you wish to go now?<br>",
  "buttons": [{"label": "Enter Tavern", "route": "tavern", "type": "scene"}]
},
"buy_ale": {
  "name": "buy_ale",
  "text": "thank you!<br>",
  "buttons": [{"label": "Buy ale", "route": "ale"},
  {"label": "Buy milk (which is also ale)", "route": "milk", "type": "dialog"},
  {"label": "Leave tavern", "route": "town2", "type": "scene"}]
}
}