const fs = require('fs');
const readline = require('readline');

const fileName = "data/items.json";

var items = {};

async function processLineByLine() {
  const fileStream = fs.createReadStream(fileName);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    var item = JSON.parse(line);
  var itemName = item["Name"];
	  //console.log(item);
  if (!items[itemName]) {
          items[itemName] = item;
  }
    // Each line in input.txt will be successively available here as `line`.
  //  console.log(`Line from file: ${line}`);
  }
//  console.log(maps[1][1]);
}

var done = processLineByLine().then(function() { 
  //console.log(items[Object.keys(items)[0]]);
  //drawFromRoom(1, 1, 1);
});


/* pricing 

*/
done.then(function() {
  var roomItems = `You notice 5 copper farthings, lantern, adamantite wrist guard, runed wrist
  guard, 2 swamp boots, 7 bladed staff, 3 ethereal amulet, bone ring, 4 elven
  war-spear, 2 sharktooth trident, 8 silver bracelet, 9 fingerbone bracelet, 3
  emerald-studded bracelet, 21 piece of crystal, 21 moonstone, 33 bloodstone, 5
  icy scroll, 2 dwarven-craft hammer, 3 fine broadsword, 3 gilded robes, 3
  wyvernhide tunic, 3 fine greatsword, 2 runic key, 5 dwarven axe, great
  bronzewood club, great spiked club, 4 icy scroll, 5 crimson spiked shield, 4
  templar greatsword, 5 fine silvery broadsword, 6 green metal key, 2 high-necked
  robes, 19 skull shield, 6 serrated spiked shield, iron wand, vorpal hatchet, 5
  splotched scroll, 6 crimson scalemail tunic, 2 etched adamant warhammer, 2
  javelin, 9 lacquered battle armour, 3 gianthair vest, ironwood breastplate, 7
  trollskin belt, 2 gunsen, 3 crimson helm, fur-lined pouch, 5 jewel-encrusted
  warhammer, 4 starsteel plate leggings, 2 starsteel greathelm, 2 severed head of
  Enigma Lord, 2 black velvet gloves, glowing warhammer, fine breastplate,
  blacksteel halberd, piece of wing, withered walking stick, silver hood, 3
  silversilk tunic, 3 trollskin boots, marsh light, 10 adamantite platemail
  tunic, 2 arlysian rod, khopesh sword, jeweled scimitar, 3 golden vial, 6
  glowing broadsword, 2 crimson scalemail leggings, 3 arlysian longsword, 5 worn
  stone tablet, 3 bone club, etched adamant greatsword, 4 arlysian dagger, 3
  midnight sash, 2 scroll of divine fury, rod of might, sparkling pendant, astral
  slippers, 3 carnelian stone, jade amulet, soulsword, 3 crimson cloak, 9
  obsidian stone, 3 gauntlets of power, 6 black potion, 2 malachite stone, 2
  three-headed flail, 3 astral robes, 4 prismatic robes, 2 astral gloves,
  turquoise stone, 3 pristine scroll, 3 stone signet, ethereal dagger, 3 etched
  adamant broadsword, ebony greataxe, 2 starsteel mace, 2 sunsword, behemoth hide
  helm, dragonfang ninjato, 2 onyx stone, starsteel bracers, 4 amethyst stone, 2
  carved ivory mask, 4 vorpal sword, black dragon tunic, 2 aquamarine stone,
  garnet, opal, hematite stone, 2 crimson scale gauntlets, shimmering vial,
  crumbling bible, 2 wicked bone scythe, sapphire, adamantite ninjato,
  ruby-studded bracelet, 2 aegis plate gauntlets, golden pike, blizzardfang,
  aegis plate boots, large iron key, tiger-eye earrings, ivory bracelet, black
  opal, ruby, crimson bracers, behemoth hide tunic, pearl, fire opal, black
  enameled shield, adamantite katana, staff of the elements, elven boots, piece
  of amber, green potion, black enameled leggings, black warhammer, ruby
  earrings, diamond-encrusted bracelet, topaz stone, opaline crystal here.`
  
  roomItems = roomItems.replaceAll("\n", "")
  roomItems = roomItems.replaceAll("  ", " ")
  roomItems = roomItems.replace("You notice ", "")
  roomItems = roomItems.replace(" here.", "")
  roomItems = roomItems.split(",")
  //console.log(roomItems)
  for(var item of roomItems) {
    item = item.trim()
    quantity = item.split(" ")[0] >= 0 ? item.split(" ")[0] : 1
    itemName = quantity > 1 ? item.split(" ").slice(1).join(" ") : item
    realItem = items[itemName]
    //console.log(realItem)
    if (realItem == undefined) {
      console.log("couldnt find: " + item + " \r\nusing name: " +itemName )
    }
  }
});


/* WIP
function drawFromRoom(mapNumber, roomNumber, radius) {
  switch(radius) {
    case radius > 1:
      foreach(var direction in ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'U', 'D']) {
	      // check each direction and see if there's a room
      }
      drawFromRoom(mapNumber, roomNumber, radius-1);
      break;
    case radius == 1:
      console.log
  }
  if (radius == 1) {
    console.log(maps[mapNumber][roomNumber]["Name"]);
    return;
  }
}

*/
