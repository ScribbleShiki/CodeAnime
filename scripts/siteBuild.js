(function () {
    var _questModal = document.getElementById("questModal");
    
    var _questManage = [_questModal];
    var _questIntro = _questManage[0];

    /* places a boundary for the content inside the page */
    var pageBoundary = $("#wrapper").click(function applyBorder() {
        pageBoundary.css('border', "1px solid #000");
    });

    /* users will intereract with a modal type message interface */
    $("#wrapper").click(function buildQuestModal() {
        var questModal = document.createElement("div");
        questModal.setAttribute("id", "questModal");
        document.getElementById("questWrapper").appendChild(questModal);
    });

    /* A side bar will be displayed once the first modal is clicked (will have to remember user someday) */
    _questIntro.addEventListener('click', function(){

    });

    /* if the modal exists give it a message */
    if($(_questModal)){

    }
})()