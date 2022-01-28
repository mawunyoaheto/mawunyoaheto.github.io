$(document).ready(()=>{
    $("#clickMe").click(()=>{
        $("img").fadeIn(1000);
        $("#picframe").slideToggle("slow");   
    });
});