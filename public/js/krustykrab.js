$(".btn-success").on("click", function(event) {
    event.preventDefault();

    var userchoice = $(this).attr("data-topic");
    
    var price = parseFloat($(`#${userchoice}`).attr("data-price"));
    var quantity = parseFloat($(`#${userchoice}`).val());
    var totalPrice = price * quantity;

    console.log(price);
    console.log(quantity);
    console.log(totalPrice);

});