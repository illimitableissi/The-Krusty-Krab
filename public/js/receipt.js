function runReceiptQuery() {

    $.ajax({
        url: "/api/receipt",
        method: "GET"
    }).then(function(receiptData) {

        console.log(receiptData);
        var orderTotal = 0;

        for (let i = 0; i < receiptData.length; i++) {

            $(".order-details").append(`${receiptData[i].item_quantity}x ${receiptData[i].item_name} @ $${parseFloat(receiptData[i].item_price).toFixed(2)} = $${receiptData[i].total}<br>`);
            orderTotal += parseFloat(receiptData[i].total);
            
        }

        $(".order-details").append(`<hr>Total: $${orderTotal.toFixed(2)}`);

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