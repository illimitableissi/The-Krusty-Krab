var totalOrderPrice = 0;

var userchoice;
var itemName;
var price;
var quantity;
var totalPrice;
var total;

var newOrder = {orderList: []};
var newItem = {};

$(".btn-success").on("click", function(event) {
    event.preventDefault();
    $("#receipt").hide();
    userchoice = $(this).attr("data-topic");
    itemName = $(this).attr("data-name");   
    price = parseFloat($(`#${userchoice}`).attr("data-price"))
    quantity = parseInt($(`#${userchoice}`).val());
    totalPrice = price * quantity;
    total = parseFloat(totalPrice).toFixed(2)
    totalOrderPrice += totalPrice;

    $(`#${userchoice}`).val('');

    newItem = {
        item_name: itemName,
        item_price: price,
        item_quantity: quantity,
        total: total
    };

    newOrder.orderList.push(newItem);
    console.log(newOrder);

    $(".orderlist").append(`${itemName} $${price} x ${quantity} = $${total} <br>`);
    $(".ordertotal").text(`Order Total = $${totalOrderPrice.toFixed(2)}`);
    $(".modal").toggle("modal");
    
});

$("#view-order").click(function(event) {
    event.preventDefault();
    $(".modal").show("modal");
    $("#receipt").hide();
    $(".checkout").show();
    $(".close-icon").show();
})

$(".close-icon").on("click", function(event) {
    event.preventDefault();
    $(".modal").hide("modal");
});

$(".checkout").on("click", function(event)
    {
        event.preventDefault();
        $(".modal").show("modal");
        $("#receipt").show();
        $(".checkout").hide();
        $(".close-icon").hide();
        $(".modal-body").html("<h1>" + "Enjoy your food!" + "</h1>");

        var orderTotal = {order_total: totalOrderPrice}

        $.post("/api/receipt", newOrder, function(data) {
            console.log("Receipt Data:");
            console.log(data);
        })

        $.post("/api/orders", orderTotal, function(data) {
            console.log("Order data:");
            console.log(data);
        })

        for (let i = 0; i < newOrder.orderList.length; i++) {

            $.post("/api/items", newOrder.orderList[i], function(data) {
                console.log("Items_Ordered data:");
                console.log(data);
            })
            
        }

    });