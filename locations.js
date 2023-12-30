export const locations = {
    "title": {
      "name": "title",
      "background": "url('/images/text-adventure-test-art.png')",
      "text": "Welcome to Big Trouble in Little Ixonia! This is a text based adventure game created by Robert Lewis III. Click the 'Play Game' button to begin. <br>",
      "buttons": [{"html": "<button id=\"play\">Play Game</button>", "route": "town"}]
    },
    "town": {
      "name": "town",
      "background": "url('/images/town-center.png')",
      "text": "You arrive in Ixonia's town center. The hour is late and there are very few people in sight. The tavern appears to be still open. <br>",
      "buttons": [{"html": "<button id=\"tavern-btn\">Enter Tavern</button>", "route": "tavern"}]
    },
    "tavern": {
      "name": "tavern",
      "background": "url('./images/tavern.png')", 
      "text": "You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests. <br>",
      "buttons": [{"html": "<button id=\"talk-barkeep\">talk to Barkeep</button>", "route": "barkeep"},
      {"html": "<button id=\"talk-patron\">talk to patron</button>", "route": "patron"},
      {"html": "<button id=\"look-quests\">Look at quests</button>", "route": "quests"},
      {"html": "<button>Leave tavern</button>", "route": "town2"}]      
    },
    "barkeep": {
      "name": "barkeep",
      "background": "url('/images/barkeep.png')",
      "text": "BARKEEP:<br> Hello! I'm Esmee Fairfoot. State your name and business! <br>",
      "buttons": [{"html": "<button id=\"honest\">I'm new in town. I seek my fortune!</button><br>", "route": "barkeep_honest"},
      {"html": "<button id=\"funny\">May I please have... 2 tofu pups?</button><br>", "route": "barkeep_funny"},
      {"html": "<button id=\"mean\">I'm Nunya...Nunya business! Eat shit</button>", "route": "barkeep_mean"}]    
    },
    "barkeep_honest": {
      "name": "barkeep_honest",
      "background": "url('/images/barkeep.png')",
      "text": "BARKEEP:<br>Nice to meet you! What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
      "buttons": [{"html": "<button id=\"ale\">Gimme an ale</button><br>", "route": "ale"},
      {"html": "<button id=\"milk\">Lemme get a tal glass of milk</button><br>", "route": "milk"},
      {"html": "<button id=\"unicorn\">Let me have ht Unicorn Blood!!</button>", "route": "unicorn"}]    
    },  
    "barkeep_funny": {
      "name": "barkeep_funny",
      "background": "url('/images/barkeep.png')",
      "text": "BARKEEP:<br>okayyyyyy well....What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
      "buttons": [{"html": "<button id=\"ale\">Gimme an ale</button><br>", "route": "ale"},
      {"html": "<button id=\"milk\">Lemme get a tal glass of milk</button><br>", "route": "milk"},
      {"html": "<button id=\"unicorn\">Let me have ht Unicorn Blood!!</button>", "route": "unicorn"}]    
    },
    "barkeep_mean": {
      "name": "barkeep_mean",
      "background": "url('/images/you-died.png')",
      "text": "You died, shoulda thought about that shit before you said it <br>",
      "buttons": [{"html": "<button id=\"you-died\">restart</button><br>", "route": "town"}]    
    },
    "ale": {
      "name": "ale",
      "background": "url('/images/barkeep.png')",
      "text": "Here ya go, buddy. that will be 1gp<br>",
      "buttons": [{"html": "<button id=\"pay1gp\">pay 1gp</button><br>", "route": "buy_ale"}, 
      {"html": "<button>no thanks, I changed my mind</button><br>", "route": "barkeep_funny"}]    
    },
    "milk": {
      "name": "milk",
      "background": "url('/images/barkeep.png')",
      "text": "Bwahahaha! good one, here's your ALE. That'll be 1gp.<br>",
      "buttons": [{"html": "<button id=\"pay1gp\">pay 1gp</button><br>", "route": "buy-ale"}, 
      {"html": "<button>no thanks, I changed my mind</button><br>", "route": "barkeep_funny"}]    
    },
    "unicorn": {
      "name": "unicorn",
      "background": "url('/images/barkeep.png')",
      "text": "BARKEEP:<br>Tell ya what - come back when you've proven yourself as a true warrior, and I'll give ya one on the house.<br>",
      "buttons": [{"html": "<button>Ok, I'll be back!</button><br>", "route": "tavern2"}]    
    },
    "tavern2": {
      "name": "tavern2",
      "background": "url('./images/tavern.png')", 
      "text": "",
      "buttons": [{"html": "<button id=\"talk-barkeep\">talk to Barkeep</button>", "route": "barkeep2"},
      {"html": "<button id=\"talk-patron\">talk to patron</button>", "route": "patron"},
      {"html": "<button id=\"look-quests\">Look at quests</button>", "route": "quests"},
      {"html": "<button>Leave tavern</button>", "route": "town2"}]
  },
  "barkeep2": {
    "name": "barkeep2",
    "background": "url('./images/barkeep.png')",
    "text": "So, you're back. Have you proven yourself worthy of my unicorn blood?",
    "buttons": [{"html": "<button>YES! I did the thing</button>", "route": "get_blood"}]
  },
  "town2": {
    "name": "town2",
    "background": "url('/images/town-center.png')",
    "text": "You are in Town Square. Where do you wish to go now?<br>",
    "buttons": [{"html": "<button id=\"tavern-btn\">Enter Tavern</button>", "route": "tavern"}]
  },
  "buy_ale": {
    "name": "buy_ale",
    "background": "url('./images/barkeep.png')",
    "text": "thank you!<br>",
    "buttons": [{"html": "<button id=\"ale\">Buy ale</button><br>", "route": "ale"},
    {"html": "<button id=\"milk\">Buy milk (which is also ale)</button><br>", "route": "milk"},
    {"html": "<button>Leave tavern</button>", "route": "town2"}]
  }
    
  }

