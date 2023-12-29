export const locations = 
  {
  "town":{
    "name": "town",
    "background": "url('/images/text-adventure-test-art.png')",
    "text": "Welcome, weary traveller, to the town of Ixonia! The hour is late and there are very few people in sight. The tavern appears to be still open. <br>",
    "buttons": [{"html":"<button id=\"tavern-btn\">enter tavern</button>", "route":"tavern"}]
  },
  "tavern":{
    "name": "tavern", 
    "background": "url('/images/tavern.png')",
    "text": "You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests. <br>",
    "buttons": [{"html": "<button id=\"talk-barkeep\">talk to Barkeep</button>", "route":"barkeep"},
                {"html": "<button id=\"talk-patron\">talk to Patron</button>", "route":"patron"},
                {"html": "<button id=\"look-quests\">Look at quests</button>", "route":"quests"}]

  },
  "barkeep":{
    "name": "barkeep",
    "background": "url('/images/tavern.png')",
    "text": "BARKEEP:<br> Well hello there! State your name and business! <br>",
    "buttons": [{"html":"<button id=\"honest\">I am new in town. I seek my fortune!</button><br>", "route":"honest"},
                {"html":"<button id=\"funny\">I am selling these fine leather jackets...</button><br>", "route":"funny"},
                {"html":"<button id=\"mean\">I am Nunya...Nunya business! give me a drink, ya WENCH!</button>", "route":"mean"}]    
  }}