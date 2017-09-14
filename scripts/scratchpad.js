(function () {
  var adventure = {
    "run": false,
    "gameSiteLog": []
  }

  adventure.gameSiteLog[0] = "Welcome to super fun building site adventure javascript edition";
  adventure.gameSiteLog[1] = "You need to set your Adventurer's attributes to begin";

  adventure.run = true;

  while (adventure.run) {
    for (var i = 0; i < adventure.gameSiteLog.length; i++) {
      console.log(adventure.gameSiteLog[i]);
    }
  }
})()