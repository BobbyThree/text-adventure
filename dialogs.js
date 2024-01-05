export const dialogs = {
  "title": {
    "name": "title",
    "text": "Welcome to Big Trouble in Little Ixonia! This is a text based adventure game created by Robert Lewis III. Click the 'Play Game' button to begin. <br>",
    "buttons": [{"html": "<button id=\"play\">Play Game</button>", "route": "town", "type": "location"}]
  },
  "town": {
    "name": "town",    
    "text": "You arrive in Ixonia's town center. The hour is late and there are very few people in sight. The tavern appears to be still open. <br>",
    "buttons": [{"html": "<button id=\"tavern-btn\">Enter Tavern</button>", "route": "tavern", "type": "location"}]
  },
  "tavern": {
    "name": "tavern",     
    "text": "You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests. <br>",
    "buttons": [{"html": "<button id=\"talk-barkeep\">talk to Barkeep</button>", "route": "barkeep", "type": "location"},
    {"html": "<button id=\"talk-patron\">talk to patron</button>", "route": "patron", "type": "location"},
    {"html": "<button id=\"look-quests\">Look at quests</button>", "route": "quests"},
    {"html": "<button>Leave tavern</button>", "route": "town2", "type": "dialog"}]      
  },
  "barkeep": {
    "name": "barkeep",    
    "text": "BARKEEP:<br> Hello! I'm Esmee Fairfoot. State your name and business! <br>",
    "buttons": [{"html": "<button id=\"honest\">I'm new in town. I seek my fortune!</button><br>", "route": "barkeep_honest", "type": "dialog"},
    {"html": "<button id=\"funny\">May I please have... 2 tofu pups?</button><br>", "route": "barkeep_funny", "type": "dialog"},
    {"html": "<button id=\"mean\">I'm Nunya...Nunya business! Eat shit</button>", "route": "barkeep_mean", "type": "location"}]    
  },
  "barkeep_honest": {
    "name": "barkeep_honest",    
    "text": "BARKEEP:<br>Nice to meet you! What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
    "buttons": [{"html": "<button id=\"ale\">Gimme an ale</button><br>", "route": "ale", "type": "dialog"},
    {"html": "<button id=\"milk\">Lemme get a tal glass of milk</button><br>", "route": "milk", "type": "dialog"},
    {"html": "<button id=\"unicorn\">Let me have ht Unicorn Blood!!</button>", "route": "unicorn", "type": "dialog"}]    
  },  
  "barkeep_funny": {
    "name": "barkeep_funny",
    "text": "BARKEEP:<br>okayyyyyy well....What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
    "buttons": [{"html": "<button id=\"ale\">Gimme an ale</button><br>", "route": "ale", "type": "dialog"},
    {"html": "<button id=\"milk\">Lemme get a tal glass of milk</button><br>", "route": "milk", "type": "dialog"},
    {"html": "<button id=\"unicorn\">Let me have ht Unicorn Blood!!</button>", "route": "unicorn", "type": "dialog"}]    
  },
  "barkeep_mean": {
    "name": "barkeep_mean",
    "text": "You died, shoulda thought about that shit before you said it <br>",
    "buttons": [{"html": "<button id=\"you-died\">restart</button><br>", "route": "town", "type": "location"}]    
  },
  "ale": {
    "name": "ale",
    "text": "Here ya go, buddy. that will be 1gp<br>",
    "buttons": [{"html": "<button id=\"pay1gp\">pay 1gp</button><br>", "route": "buy_ale"}, 
    {"html": "<button>no thanks, I changed my mind</button><br>", "route": "barkeep_funny", "type": "dialog"}]
        //get rid of html, add label

  },
  "milk": {
    "name": "milk",
    "text": "Bwahahaha! good one, here's your ALE. That'll be 1gp.<br>",
    "buttons": [{"html": "<button id=\"pay1gp\">pay 1gp</button><br>", "route": "buy_ale", "type": "dialog"}, 
    {"html": "<button>no thanks, I changed my mind</button><br>", "route": "barkeep_funny", "type": "dialog"}]    
  },
  "unicorn": {
    "name": "unicorn",
    "text": "BARKEEP:<br>Tell ya what - come back when you've proven yourself as a true warrior, and I'll give ya one on the house.<br>",
    "buttons": [{"html": "<button>Ok, I'll be back!</button><br>", "route": "tavern2", "type": "location"}]    
  },
  "tavern2": {
    "name": "tavern2",
    "text": "",
    "buttons": [{"html": "<button id=\"talk-barkeep\">talk to Barkeep</button>", "route": "barkeep2", "type": "location"},
    {"html": "<button id=\"talk-patron\">talk to patron</button>", "route": "patron", "type": "location"},
    {"html": "<button id=\"look-quests\">Look at quests</button>", "route": "quests", "type": "location"},
    {"html": "<button>Leave tavern</button>", "route": "town2", "type": "location"}]
},
"barkeep2": {
  "name": "barkeep2",
  "text": "So, you're back. Have you proven yourself worthy of my unicorn blood?",
  "buttons": [{"html": "<button>YES! I did the thing</button>", "route": "get_blood", "type": "dialog"}]
},
"town2": {
  "name": "town2",
  "text": "You are back in the Town Square. Where do you wish to go now?<br>",
  "buttons": [{"html": "<button id=\"tavern-btn\">Enter Tavern</button>", "route": "tavern", "type": "location"}]
},
"buy_ale": {
  "name": "buy_ale",
  "text": "thank you!<br>",
  "buttons": [{"html": "<button id=\"ale\">Buy ale</button><br>", "route": "ale"},
  {"html": "<button id=\"milk\">Buy milk (which is also ale)</button><br>", "route": "milk", "type": "dialog"},
  {"html": "<button>Leave tavern</button>", "route": "town2", "type": "location"}]
}
}