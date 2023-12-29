export const locations = [
  {
    name: 'town',
    text: `Welcome, weary traveller, to the town of Ixonia! The hour is late and there are very few people in sight. The tavern appears to be still open. <br> <button id="tavern-btn">enter tavern</button>`
  },
  {
    name: 'tavern', 
    text: `You enter the dark, smelly tavern. Behind the bar is a halfing woman. Only one patron is still here. On the far wall you see a posting of Quests. <br>
    <button id="talk-barkeep">talk to Barkeep</button>
    <button id="talk-patron">talk to Patron</button>
    <button id="look-quests">Look at quests</button>`,

  },
  {
    name: 'barkeep',
    text: `BARKEEP:<br> Well hello there! State your name and business! <br>
    <button id="honest">I'm new in town. I seek my fortune!</button><br>
    <button id="funny">I'm selling these fine leather jackets...</button><br>
    <button id="mean">I'm Nunya...Nunya business! give me a drink, ya WENCH!</button>`,    
  }
]


