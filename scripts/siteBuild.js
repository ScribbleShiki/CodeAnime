var _questModal = document.getElementById("questModal");

/* users will intereract with a modal type message interface */
function newQuest() {
    var questModal = document.createElement("div");
    questModal.setAttribute("id", "questModal");
    questModal.setAttribute("class", "quest-arrows");
    document.getElementById("questWrapper").appendChild(questModal);
}

/* A side bar will be displayed once the first modal is clicked (will have to remember user someday) */
/*_questIntro.addEventListener('click', function(){

});*/