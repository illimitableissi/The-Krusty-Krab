var totalOrderPrice = 0;
var orderNumber = getOrderNumber();
console.log(orderNumber);
var userchoice;
var itemName;
var price;
var quantity;
var totalPrice;
var total;

var newOrder = { orderList: [] };
var newItem = {};

$(".btn-success").on("click", function (event) {

    event.preventDefault();
    $("#receipt").hide();
    userchoice = $(this).attr("data-topic");
    quantity = parseInt($(`#${userchoice}`).val());
    itemName = $(this).attr("data-name");
    price = parseFloat($(`#${userchoice}`).attr("data-price"))

    if (quantity) {

        totalPrice = price * quantity;
        total = parseFloat(totalPrice).toFixed(2)
        totalOrderPrice += totalPrice;
        console.log(totalOrderPrice);
        $(`#${userchoice}`).val('');

        newItem = {
            item_name: itemName,
            item_price: price,
            item_quantity: quantity,
            total: total,
            order_id: orderNumber
        }

        newOrder.orderList.push(newItem);
        console.log(newOrder);

        $(".orderlist").append(`${itemName} $${price} x ${quantity} = $${total} <br>`);
        $(".ordertotal").text(`Order Total = $${totalOrderPrice.toFixed(2)}`);
        $(".modal").toggle("modal");
        
    } else {
        alert('You must enter a quantity greater than 0.');
    };

});

$("#view-order").click(function (event) {
    event.preventDefault();
    $(".modal").show("modal");
    $("#receipt").hide();
    $(".checkout").show();
    $(".close-icon").show();
})

$(".close-icon").on("click", function (event) {
    event.preventDefault();
    $(".modal").hide("modal");
});

$(".checkout").on("click", function (event) {
    event.preventDefault();
    $(".modal").show("modal");
    $("#receipt").show();
    $(".checkout").hide();
    $(".close-icon").hide();
    $(".modal-body").html("<h1>" + "Enjoy your food!" + "</h1>");

    var orderTotal = { order_total: totalOrderPrice }

    $.post("/api/receipt", newOrder, function (data) {
        console.log("Receipt Data:");
        console.log(data);
    })

    $.post("/api/orders", orderTotal, function (data) {
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

    function getOrderNumber() {
        var orderNumber;
        $.ajax({
            url:"/api/lastorder",
            type: "get",
            async: false,
            success: function(data) {
               console.log('Last Order data:');
               console.log(data);
               if (data.length == 0) {
                    orderNumber = 1;
               } else {
                orderNumber = data[0].customer_id + 1;
               }
               
            }

        });
        
        return orderNumber;

    }
