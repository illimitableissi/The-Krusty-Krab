var totalOrderPrice = 0

$(".btn-success").on("click", function(event) {
    event.preventDefault();

    var userchoice = $(this).attr("data-topic");
    var itemName = $(this).attr("data-name");   
    var price = parseFloat($(`#${userchoice}`).attr("data-price"))
    var quantity = parseInt($(`#${userchoice}`).val());
    var totalPrice = price * quantity;
    var total = parseFloat(totalPrice).toFixed(2)
    totalOrderPrice += totalPrice;

    console.log(price);
    console.log(quantity);
    console.log(totalPrice);

    $(".orderlist").append(`${itemName} $${price} x ${quantity} = $${total} <br>`)
    $(".ordertotal").text(`Order Total = $${totalOrderPrice.toFixed(2)}`)
    $(".modal").toggle("modal");
        $(".close-icon").on("click", function(event) {
        event.preventDefault();
        $(".modal").hide("modal");
        });
        $("#checkout").on("click", function(event)
        {
            event.preventDefault();
            $(".modal").hide("modal");
            $(".orderlist").empty();
            totalOrderPrice = 0;
        });
    

});