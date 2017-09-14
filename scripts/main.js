(function () {
  var adventure = {
    "run": false,
    "gameQuestLog": [],
    "isValidUser": false
  }

  var user = function (name, device, validName) {
    name = this.name;
    device = this.device;
    validName = this.validName;

    var createNew = function() {
      this.name = prompt("Please enter your name");
      this.dayNight(2) = ["day", "night"];
      this.device(2) = ["moblie", "desktop"];
      this.validName = function () {
        if (!user.name === "")
          return true;
        else
          return false
      }
    }
  }



  /* adventure text file */
  adventure.gameQuestLog[0] = "Welcome to super fun building site adventure javascript edition";
  adventure.gameQuestLog[1] = "You need to set the site's basic attributes to begin";

  adventure.run = true;

  /* game loops through messages and conditions inside modal (to be set to [i]) */
  while (adventure.run) {
    for (var i = 0; i < adventure.gameQuestLog.length; i++) {
      console.log(adventure.gameQuestLog[i]);
    }
    adventure.run = false;
  }
})()