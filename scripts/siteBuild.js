(function () {
    /* places a boundary for the content inside the page */
    var pageBoundary = $("#wrapper").click(function () {
        pageBoundary.css('border', "3px solid red");
    });

    /* users will intereract with a modal type message interface */
    $("#wrapper").click(function buildQuestModal() {
        var modalBox = document.createElement("div");
        modalBox.setAttribute("id", "questModal");
        document.getElementById("quest").appendChild(modalBox);
    });
})()