(function () {
  var _adventure = {
    "run": false,
    "gameQuestLog": [""],
    "isValidUser": false
  };

  var _user = function (name, validName) {
    name = this.name;
    validName = this.validName;

    var createNew = function() {
      this.name = prompt("Please enter your name");
      this.validName = function () {
        if (_user.name !== "")
          return true;
        else
          throw "please enter a name!";
          return false;
      };
      
      _adventure.isValidUser = true;
    };
  };

  var _questModal = document.getElementById("questModal");

  /* adventure text file */
  _adventure.gameQuestLog[0] = "Welcome to super fun building site adventure javascript edition";
  _adventure.gameQuestLog[1] = "You need to set the site's basic attributes to begin";

  _adventure.run = true;

  /* will need to wait for user action before sending new text */
  function generateQuestText() {
    for (var i = 0; i < _adventure.gameQuestLog.length; i++) {
      _questModal.innerHTML = _adventure.gameQuestLog[i];
    }
  }

  /* may have to run async */
  function addQuestText() {
    _questModal.addEventListener('click', generateQuestText(), false);
  }

  /* site loops through messages and conditions inside modal */
  while (_adventure.run) {
        /* once the modal exists give it a message */
        if($(_questModal)){
          addQuestText();
        }
    _adventure.run = false;
  }
})();