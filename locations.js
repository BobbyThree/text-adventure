export const locations = 
  {
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
      {"html": "<button id=\"look-quests\">Look at quests</button>", "route": "quests"}]      
    },
    "barkeep": {
      "name": "barkeep",
      "background": "url('/images/barkeep.png')",
      "text": "BARKEEP:<br> Hello! I'm Esmee Fairfoot. State your name and business! <br>",
      "buttons": [{"html": "<button id=\"honest\">I'm new in town. I seek my fortune!</button><br>", "route": "barkeep02"},
      {"html": "<button id=\"funny\">May I please have... 2 tofu pups?</button><br>", "route": "funny"},
      {"html": "<button id=\"mean\">I'm Nunya...Nunya business! Eat shit</button>", "route": "mean"}]    
    },
    "barkeep02": {
      "name": "barkeep02",
      "background": "url('/images/barkeep.png')",
      "text": "BARKEEP:<br>Nice to meet you! What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
      "buttons": [{"html": "<button id=\"ale\">Gimme an ale</button><br>", "route": "ale"},
      {"html": "<button id=\"milk\">Lemme get a tal glass of milk</button><br>", "route": "milk"},
      {"html": "<button id=\"unicorn\">Let me have ht Unicorn Blood!!</button>", "route": "unicorn"}]    
    }
  }

