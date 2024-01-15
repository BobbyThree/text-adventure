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
      {"label": "pay 1gp", "route": "buy_ale", "type": "buy", "cost": 1}, 
      {"label": "no thanks, I changed my mind", "route": "barkeep_funny", "type": "dialog"}
    ]
  },
  "milk": {
    "name": "milk",
    "text": "Bwahahaha! good one, here's your ALE. That'll be 1gp.<br>",
    "buttons": [
      {"label": "pay 1gp", "route": "buy_ale", "type": "dialog"}, 
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
    "text": "The Barkeep's daughter has gone missing. Last we heard, she was heading up to Aurochsmow to do some work on a chicken farm. She was supposed to return days ago. You must go to Aurochsmow and find her. The reward for this quest is an exuisite longbow of immense power.<br>",
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
    "text": "",
    "buttons": [

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
}
