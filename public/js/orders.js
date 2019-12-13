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

            newCardBody.append(data[i].customer_id);
            newCardBody.append(data[i].order_total);
            newCardBody.append(data[i].createdAt);

            newCard.append(newCardHeader);            
            newCard.append(newCardBody);
            
            $("#order-display").append(newCard);
        }

    }

});