(function () {
    /* places a boundary for the content inside the page */
    var pageBoundary = $("#wrapper").click(function () {
        pageBoundary.css('border', "3px solid red");
    });

    /* users will intereract with a modal type message interface */
    var modalBox = document.createElement("canvas");
    modalBox.setAttribute("id", "questModal");
    document.getElementById("quest").appendChild(modalBox);

    $("#wrapper").click(function buildQuestModal() {
        var questModal = document.getElementById("questModal");
        var questModalCtx = questModal.getContext("2d");
        questModalCtx.fillStyle = "	#FF7F50";
        questModalCtx.fillRect(0,0,200,200);
    });
})()