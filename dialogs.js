export const dialogs = {
  "title": {
    "name": "title",
    "text": "Welcome to Big Trouble in Little Ixonia! This is a text based adventure game created by Robert Lewis III. You begin your tale in the small mountain town of Ixonia, where a fearsome Beholder has taken up residence in the town hall to the terror of the town's inhabitants. Click the 'Play Game' button to begin. <br>",
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
    "text": "BARKEEP:<br> Hello! I'm Esmee Fairfoot and this is my Tavern. State your name and business! <br>",    
    "buttons": [
      {"label": "I'm new in town. I seek my fortune!", "route": "barkeep_honest", "type": "dialog"},
      {"label": "May I please have... 2 tofu pups?", "route": "barkeep_funny", "type": "dialog"},
      {"label": "I'm Nunya...Nunya business! Eat shit", "route": "died", "type": "scene"},
      {"label": "back", "route": "tavern", "type": "scene"}
    ]    
  },
  "barkeep_honest": {
    "name": "barkeep_honest",    
    "text": "BARKEEP:<br>Nice to meet you! We need all the help we can get. The Beholder has defeated all who have tried to fight it. Anyway, What can I get you to drink? We have ale and our special is Unicorn Blood<br>",
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
      {"label": "Lemme get a tall glass of milk", "route": "milk", "type": "dialog"},
      {"label": "Lemme get that Unicorn Blood!!", "route": "unicorn", "type": "dialog"}
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
    "text": "BARKEEP:<br>Tell ya what - come back when you've proven yourself as a true warrior, perhaps by completing a quest from the board over there. Do that and I'll give ya a Unicorn blood on the house.<br>",
    "buttons": [{"label": "Ok, I'll be back!", "route": "tavern2", "type": "scene"}]    
  },
  "tavern2": {
    "name": "tavern2",
    "text": "",
    "buttons": [{"label": "talk to Barkeep", "route": "barkeep", "type": "scene"},
      {"label": "talk to patron", "route": "patron", "type": "scene"},
      {"label": "Look at quests", "route": "quests", "type": "scene"},
      {"label": "Leave tavern", "route": "town2", "type": "scene"}
    ]
  },
  "town2": {
    "name": "town2",
    "text": "You are back in the Town Square. Where do you wish to go now?<br>",
    "buttons": [
      {"label": "Enter Tavern", "route": "tavern", "type": "scene"},
      {"label": "Go to Aurochsmaw", "route": "aurochsmaw2", "type": "scene"},
    ]
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
      {"label": "back", "route": "tavern2", "type": "scene"}
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
    "text": "Just outside of town the Bullywug Croakers are blocking the main road. They ambush anyone who tries to cross into the marshes. Defeat them and recieve 500gp.<br>",
    "buttons": [
      {"label": "Accept Quest", "route": "croakers_quest", "type": "scene"},
      {"label": "Halfling", "route": "halfling_details", "type": "dialog"},      
      {"label": "Beholder", "route": "beholder_details", "type": "dialog"},
      {"label": "back", "route": "tavern2", "type": "scene"}
    ]
  },
  "croakers_details2": {
    "name": "croakers_details2",
    "text": "Just outside of town the Bullywug Croakers are blocking the main road. They ambush anyone who tries to cross into the marshes. Defeat them and recieve 500gp.<br>",
    "buttons": [
      {"label": "Accept Quest", "route": "croakers_quest", "type": "scene"},            
      {"label": "Beholder", "route": "beholder_details", "type": "dialog"},
      {"label": "back", "route": "town2", "type": "scene"}
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
  "beholder_details2": {
    "name": "beholder_details2",
    "text": "A terrible Beholder has taken up residence in the town hall. He is a vicious beast who is far beyond the abilities of any of us. You must help us! Defeat the Beholder, be the hero of this town, and recieve 10,000gp.<br>",
    "buttons": [
      {"label": "Accept Quest", "route": "beholder_quest", "type": "scene"},      
      {"label": "Bullywug Croakers", "route": "croakers_details", "type": "dialog"},
      {"label": "back", "route": "town2", "type": "scene"}
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
  "shoppe2": {
    "name": "shoppe2",
    "text": "SHOPPE OWNER:<BR>You again! How can I be of service?<br>",
    "buttons": [
      {"label": "buy short sword (20gp)", "route": "buy_shortsword2", "type": "buy"},
      {"label": "buy broad sword (60gp)", "route": "buy_broadsword2", "type": "buy"},
      {"label": "buy morning star (40gp)", "route": "buy_morningstar2", "type": "buy"},
      {"label": "buy warhammer (100gp)", "route": "buy_warhammer2", "type": "buy"},      
      {"label": "exit", "route": "aurochsmaw", "type": "dialog"}
    ]
  },
  "shoppe3": {
    "name": "shoppe3",
    "text": "SHOPPE OWNER:<BR>You again! How can I be of service?<br>",
    "buttons": [
      {"label": "buy short sword (20gp)", "route": "buy_shortsword2", "type": "buy"},
      {"label": "buy broad sword (60gp)", "route": "buy_broadsword2", "type": "buy"},
      {"label": "buy morning star (40gp)", "route": "buy_morningstar2", "type": "buy"},
      {"label": "buy warhammer (100gp)", "route": "buy_warhammer2", "type": "buy"},      
      {"label": "exit", "route": "aurochsmaw2", "type": "dialog"}
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
    "text": "SHOPPE OWNER:<BR>I've got a short sword (1-10 damage) and a broad sword (10-15 damage)",
    "buttons": [
      {"label": "buy short sword (20gp)", "route": "buy_shortsword", "type": "buy"},
      {"label": "buy broad sword (60gp)", "route": "buy_broadsword", "type": "buy"},
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
  "buy_shortsword": {
    "name": "buy_shortsword",
    "text": "Thanks very much, don't poke your eye out.",
    "buttons": [
    {"label": "BUY", "route": "buy_items", "type": "dialog"},
    {"label": "SELL", "route": "sell_items", "type": "dialog"},    
    {"label": "Exit", "route": "halfling_quest", "type": "scene"}
  ]    
  },
  "buy_shortsword2": {
    "name": "buy_shortsword2",
    "text": "Thanks very much, don't poke your eye out.",
    "buttons": [{"label": "Exit", "route": "aurochsmaw", "type": "scene"}]
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
  "buy_broadsword2": {
    "name": "buy_broadsword2",
    "text": "Pleasure doin business with ya.",
    "buttons": [{"label": "Exit", "route": "aurochsmaw", "type": "scene"}] 
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
  "buy_morningstar2": {
    "name": "buy_morningstar2",
    "text": "Thank ye.",
    "buttons": [{"label": "Exit", "route": "aurochsmaw", "type": "scene"}] 
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
  "buy_warhammer2": {
    "name": "buy_warhammer2",
    "text": "now you're cookin with gas!",
    "buttons": [{"label": "Exit", "route": "aurochsmaw", "type": "scene"}]
  },
  "broke": {
    "name": "broke",
    "text": "You do not have enough gold!",
    "buttons": [{"label": "back", "route": "shoppe", "type": "dialog"}]
  },
  "sell_items": {
    "name": "sell_items",
    "text": "Ok! whattaya got?",
    "buttons": [
      {"label": "show sellable items", "route": "sellable_items", "type": "inventory"}
    ]
  },  
  "sellable_items": {
    "name": "sellable_items",
    "text": "Sell:<br>",
    //"buttons": [{"label": "back", "route": "shoppe", "type": "dialog"}]
  },
  "sold": {
    "name": "sold",
    "text": "Sold!",
    "buttons": [{"label": "back", "route": "shoppe", "type": "dialog"}]
  },
  "inn": {
    "name": "inn",
    "text": "Welcome to the Aurochsmaw Inn! 20gp per night. Would you like a room?",
    "buttons": [
      {"label": "Pay for a room", "route": "inn_sleep", "type": "buy"},
      {"label": "I am looking for a halfling girl that went missing from Ixonia. Any idea if she came through here?", "route": "halfling_info2", "type": "dialog"}
  ]
  },
  "inn2": {
    "name": "inn2",
    "text": "You're back! Would you like a room?",
    "buttons": [
      {"label": "Pay for a room", "route": "inn_sleep2", "type": "buy"},
      {"label": "back", "route": "aurochsmaw", "type": "scene"}
  ]
  },
  "inn3": {
    "name": "inn3",
    "text": "Would you like a room?",
    "buttons": [
      {"label": "Pay for a room", "route": "inn_sleep3", "type": "buy"},
      {"label": "back", "route": "aurochsmaw2", "type": "scene"}
  ]
  },
  "inn_pay": {
    "name": "inn_pay",
    "text": "Thank you! ",    
    "buttons": [
      {"label": "Go to room", "route": "inn_sleep", "type": "scene"},      
  ]
  },
  "inn_sleep": {
    "name": "inn_sleep",
    "text": "You awake fully rested. You find a complimentary mint on your way out which you slip into your pocket for later",    
    "buttons": [
      {"label": "exit to Aurochsmaw", "route": "halfling_quest", "type": "scene"},      
  ]
  },
  "inn_sleep2": {
    "name": "inn_sleep2",
    "text": "You awake fully rested. You find a complimentary mint on your way out which you slip into your pocket for later",    
    "buttons": [
      {"label": "exit to Aurochsmaw", "route": "aurochsmaw", "type": "scene"},      
  ]
  },
  "inn_sleep3": {
    "name": "inn_sleep3",
    "text": "You awake fully rested. You find a complimentary mint on your way out which you slip into your pocket for later",    
    "buttons": [
      {"label": "exit to Aurochsmaw", "route": "aurochsmaw2", "type": "scene"},      
  ]
  },
  "halfling_info2": {
    "name": "halfling_info2",
    "text": "Come to think of it, yes, a halfling girl stayed here a couple nights ago. She went up to work at the chicken farm on the outskirts of town.",
    "buttons": [
      {"label": "Excellent! Can you tell me how to get there?", "route": "directions", "type": "dialog"},      
  ]
  },     
  "directions": {
    "name": "directions",
    "text": "You listen as they give detailed directions to the farm in true small town fashion - go over the hill and then when it turns more woodsey, turn left...and so on.<br>",
    "buttons": [
      {"label": "Head to the chicken farm!", "route": "farm", "type": "scene"},      
      {"label": "buy a room and rest up first", "route": "inn_pay", "type": "dialog"},      
  ]
  },     
  "farm": {
    "name": "farm",
    "text": "You follow the inn keeper's old-timey directions until you see the chicken farm in the distance. Something doesn't feel right...<br>",
    "buttons": [
      {"label": "get a closer look", "route": "abyssal", "type": "scene"},      
      {"label": "Go back to Aurochsmaw", "route": "aurochsmaw", "type": "scene"},      
  ]
  },     
  "abyssal": {
    "name": "abyssal",
    "text": "As you approach the farm you see what the problem is. These chickens have tuned ABYSSALL!!! Prepare for battle.<br>",
    "buttons": [
      {"label": "attack abyssal chicken", "route": "battle", "type": "chicken_battle"},      
      {"label": "attempt to run", "route": "", "type": ""},      
  ]
  },     
  "battle": {
    "name": "battle",
    "text": "Choose you weapon<br>",    
    //"buttons": []
  },  
  "kill_player": {
    "name": "kill_player",
    "text": "You died.",
    "buttons": [{"label": "restart game", "route": "title", "type": "scene"}]
  },     
  "kill_chicken": {
    "name": "kill_chicken",
    "text": "You killed the Abyssal Chicken!",
    "buttons": [{"label": "search barn", "route": "barn", "type": "dialog"}]
  },     
  "barn": {
    "name": "barn",
    "text": "You make your way past the recently deceased Abyssal Chickens and toward the barn. These chickens really wreaked havoc on this farm and it appears that those who stood and fought them were not so lucky as you. As you cautiously enter the barn you hear muffled noises up in the hayloft.",
    "buttons": [
      {"label": "investigate hayloft", "route": "hayloft", "type": "dialog"},
      {"label": "get the H-E-double hockey sticks outta there!", "route": "aurochsmaw", "type": "scene"}
  ]
  },     
  "aurochsmaw": {
    "name": "aurochsmaw",
    "text": "You are back in Aurochmaw's town center. What now?",
    "buttons": [
      {"label": "Go to shoppe", "route": "shoppe2", "type": "scene"},
      {"label": "Go to Inn", "route": "inn2", "type": "scene"},
      {"label": "Go to farm", "route": "barn", "type": "scene"}
    ]
  },     
  "aurochsmaw2": {
    "name": "aurochsmaw2",
    "text": "You are back in Aurochmaw's town center. The Inn and Weapon Shoppe are open.",
    "buttons": [
      {"label": "Go to shoppe", "route": "shoppe3", "type": "scene"},
      {"label": "Go to Inn", "route": "inn3", "type": "scene"}      
    ]
  },     
  "hayloft": {
    "name": "hayloft",
    "text": "You climb up the old wood ladder into the hayloft. The pile of hay in the corner is moving and as you approach, hoping dearly it isn't more chickens, the muffled noises become recognizable as human in nature. It sounds like whimpering.<br>",
    "buttons": [
      {"label": "....helloooo?...", "route": "halfling_girl_main", "type": "dialog"},
      {"label": "Um..haaayyyy", "route": "halfling_girl_funny", "type": "dialog"},
      {"label": "Come out from there at once!!", "route": "halfling_girl_timid", "type": "dialog"}
    ]
  },     
  "halfling_girl_main": {
    "name": "halfling_girl_main",
    "text": "From the rustling hay mow appears a halfling girl!",
    "buttons": [
      {"label": "Are you the missing halfling girl? The barkeeps daughter?", "route": "halfling_girl_main2", "type": "dialog"}      
    ]
  },     
  "halfling_girl_main2": {
    "name": "halfling_girl_main2",
    "text": "Yes, I came up here for work and suddenly all the chickens turned into these dusgusting creatures and killed off all the farmers. I've been hiding in this barn ever since. Thank goodness you've come. Are the chickens gone?",
    "buttons": [
      {"label": "Yes, I have defeated the chickens. Let's get you back to Ixonia and to your mother.", "route": "halfling_girl_main3", "type": "dialog"}      
    ]
  },     
  "halfling_girl_main3": {
    "name": "halfling_girl_main3",
    "text": "Thank you. Let's go!",
    "buttons": [
      {"label": "Return to Ixonia", "route": "halfling_complete", "type": "scene"}      
    ]
  },     
  "halfling_girl_funny": {
    "name": "halfling_girl_funny",
    "text": "Now is not the time for puns!",
    "buttons": [
      {"label": "My apologies, when I'm uncomfortable my only coping skill seems to be dad humor. Please come out from there, no more puns I promise.", "route": "halfling_girl_main", "type": "dialog"}      
    ]
  },     
  "halfling_girl_timid": {
    "name": "halfling_girl_timid",
    "text": "Go away!",
    "buttons": [
      {"label": "I didn't mean to shout...please come out, it's safe now.", "route": "halfling_girl_main", "type": "dialog"}      
    ]
  },     
  "halfling_complete": {
    "name": "halfling_complete",
    "text": "BARKEEP: Thank goodness you have returned my daughter to me! I was worried sick! As promised the reward is this exuisite longbow. It was a gift to our town from, the elves.We halflings are too small to use such a weapon. I hope it proves usefuil to you in some way. Thank you for your bravery!",
    "buttons": [
      {"label": "Accept reward", "route": "accept_longbow", "type": "buy"}      
    ]
  },     
  "accept_longbow": {
    "name": "accept_longbow",
    "text": "You accept the longbow.",
    "buttons": [
      {"label": "back", "route": "town2", "type": "scene"},      
      {"label": "talk to roger", "route": "roger2", "type": "scene"},      
      {"label": "look at quest board", "route": "quests", "type": "scene"},      
    ]
  },     
  "roger2": {
    "name": "roger2",
    "text": "Hey buddy, Great job bringing Esmee's daughter back. Wanna talk about the other quests?",
    "buttons": [
      {"label": "Bullywug Croakers", "route": "croakers_details2", "type": "dialog"},
      {"label": "Beholder", "route": "beholder_details2", "type": "dialog"}      
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
  }
  
}
