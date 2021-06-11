

$(document).ready(

    function(){
        console.log("Document is ready.");

        $("body").append("Added document");
         //if any h1 tag clicked show alert.
        // $("h1").click(alert("h1 clicked."));

        // $("h1").click(function(){alert("h1 clicked.");});//callback

        $("h1").click(function(e){alert("You Clicked on : "+ e.target.id);});



    }
);