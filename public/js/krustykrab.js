$(".btn-success").on("click", function(event) {
    event.preventDefault();

    var userchoice = $(this).attr("data-topic");
    var itemName = $(this).attr("data-name");   
    var price = parseFloat($(`#${userchoice}`).attr("data-price"));
    var quantity = parseFloat($(`#${userchoice}`).val());
    var totalPrice = price * quantity;

    console.log(price);
    console.log(quantity);
    console.log(totalPrice);

    $(".orderlist").append(`${itemName} = ${totalPrice} <br>` )
    $(".modal").toggle("modal");

    $("#close-button").on("click", function(event) {
        event.preventDefault();
        $(".modal").hide("modal");
        });
        $(".close-icon").on("click", function(event) {
        event.preventDefault();
        $(".modal").hide("modal");
        });

});