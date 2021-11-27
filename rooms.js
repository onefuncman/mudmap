const fs = require('fs');
const readline = require('readline');

const fileName = "data/rooms.json";

var maps = {};

async function processLineByLine() {
  const fileStream = fs.createReadStream(fileName);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    var room = JSON.parse(line);
  var mapNum = room["Map Number"];
  if (!maps[mapNum]) {
          maps[mapNum] = {};
  }
  if (!maps[mapNum][room["Room Number"]]) {
          maps[mapNum][room["Room Number"]] = room;
  }
    // Each line in input.txt will be successively available here as `line`.
  //  console.log(`Line from file: ${line}`);
  }
//  console.log(maps[1][1]);
}

processLineByLine().then(function() { 
  console.log(maps[1]);
  //drawFromRoom(1, 1, 1);
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
