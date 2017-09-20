(function () {
  var _adventure = {
    "run": false,
    "gameQuestLog": [],
    "isValidUser": false
  }

  var _user = function (name, device, validName) {
    name = this.name;
    device = this.device;
    validName = this.validName;

    var createNew = function() {
      this.name = prompt("Please enter your name");
      this.dayNight(2) = ["day", "night"];
      this.validName = function () {
        if (!_user.name === "")
          return true;
        else
          return false
      }
      
      return _adventure.isValidUser = true;
    }
  }

  /* adventure text file */
  _adventure.gameQuestLog[0] = "Welcome to super fun building site adventure javascript edition";
  _adventure.gameQuestLog[1] = "You need to set the site's basic attributes to begin";

  _adventure.run = true;

  /* site loops through messages and conditions inside modal */
  while (_adventure.run) {
    for (var i = 0; i < _adventure.gameQuestLog.length; i++) {
      console.log(_adventure.gameQuestLog[i]);
    }

    _adventure.run = false;
  }
})()