function runReceiptQuery() {

    $.ajax({
        url: "/api/receipt",
        method: "GET"
    }).then(function(receiptData) {

        console.log("receiptData:");
        console.log(receiptData);

        console.log("receiptData[0]:");
        console.log(receiptData[0]);

        console.log("receiptData[0].orderList:");
        console.log(receiptData[0].orderList);

        var orderTotal = 0;
        var pieCheck = false;

        for (let i = 0; i < receiptData[0].orderList.length; i++) {

            var itemString = `${receiptData[0].orderList[i].item_quantity}x ${receiptData[0].orderList[i].item_name} @ $${parseFloat(receiptData[0].orderList[i].item_price).toFixed(2)} = $${receiptData[0].orderList[i].total}<br>`;
            $(".order-details").append(itemString);
            orderTotal += parseFloat(receiptData[0].orderList[i].total);
            
            if (itemString.includes("Pie Bomb")) {
                pieCheck = true;
            }
            
        }

        console.log(`Pie Check: ${pieCheck}`);

        if (orderTotal == 0 && !pieCheck) {
            $(".order-details").text("You haven't ordered yet! Click the button below to get started.");
        } else {
            $(".order-details").append(`<hr>Total: $${orderTotal.toFixed(2)}`);
        }

        clearReceipt();

    })

}

function clearReceipt() {

    $.ajax({
        url: "/api/clear",
        method: "POST"
    }).then(function(){
        console.log("Receipt has been cleared for next order.");
    })

}

runReceiptQuery();