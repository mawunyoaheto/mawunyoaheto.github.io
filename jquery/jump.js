$(document).ready(function (){
    $(".picframe").click(function (){
        $(".picframe p").remove();
        var discount = Math.floor((Math.random()*5) + 5);
        var discount_msg = "<p>Your Discount is "+ discount +"</p>";
        // alert(discount_msg);
       $(this).append(discount_msg);

       $(".picframe").each(function (){
        $(this).unbind('click');
       });
    });


    $("button").click(DeleteItem);


    function DeleteItem() {
        $(this).parent().hide();
    }
});


