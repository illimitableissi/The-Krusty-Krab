$.ajax({
    url:"/api/orders",
    type: "get",
    success: function(data) {
       console.log('Order data:');
       console.log(data);
      
        for (let i = 0; i < data.length; i++) {

            var newCard = $("<div>");
            newCard.addClass('card');

            var newCardHeader = $("<h2>");
            newCardHeader.addClass('card-header');

            var newCardBody = $("<div>");
            newCardBody.addClass('card-body');

            // var newCardTitle = $("<h5>");
            // newCardTitle.addClass('card-title');

            // var newCardText = $("<p>");
            // newCardText.addClass('card-text');

            newCardHeader.html(`Order #${data[i].customer_id}:`);
            newCardBody.append(`Total: $${data[i].order_total.toFixed(2)}<br>`);
            newCardBody.append(`Ordered at: ${moment(data[i].createdAt).format('M/D/YY h:mm A')}`);

            newCard.append(newCardHeader);            
            newCard.append(newCardBody);
            
            $("#order-display").append(newCard);
        }

    }

});