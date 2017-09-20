(function () {
    var questModal = document.getElementById("questModal");
    var questManage = [questModal];

    var questIntro = questManage[0];

    /* places a boundary for the content inside the page */
    var pageBoundary = $("#wrapper").click(function () {
        pageBoundary.css('border', "1px solid #000");
    });

    /* users will intereract with a modal type message interface */
    $("#wrapper").click(function buildQuestModal() {
        var modalBox = document.createElement("div");
        modalBox.setAttribute("id", "questModal");
        document.getElementById("questWrapper").appendChild(modalBox);
    });

    /* A side bar will be displayed once the first modal is clicked (will have to remember user someday) */
    questIntro.addEventListener("click", handler);

    /* if the modal exists give it a message */
    if($(questModal)){
        
    }
})()