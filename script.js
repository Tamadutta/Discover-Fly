function buttonHandler(id,isIncrease) {
     const ticketInput = document.getElementById(id);
     const inputValue = parseInt(ticketInput.value);
     let newInputValue = inputValue;

     if (isIncrease == true){
            newInputValue = inputValue + 1
     }
     if(isIncrease == false && inputValue > 0){
         newInputValue = inputValue - 1;
     }
     ticketInput.value = newInputValue;
     calculateTotalCost()
 }

 function calculateTotalCost() {
     const firstClassTicketInput = document.getElementById("ticket-num");
     const firstClassTicketValue = parseInt(firstClassTicketInput.value);

     const ecoClassTicketInput = document.getElementById("ticketNumber");
     const ecoClassTicketValue = parseInt(ecoClassTicketInput.value);

     const totalTicketCost = firstClassTicketValue * 150 + ecoClassTicketValue * 100;
     document.getElementById('subtotal').innerText = totalTicketCost;
     const tax = Math.round(totalTicketCost / 10)
     document.getElementById('tax').innerText = tax ;
     document.getElementById('total').innerText = totalTicketCost + tax;
 }

 document.getElementById('booking-btn').addEventListener('click', function(){
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'none';
    const thankYouArea = document.getElementById('ThankYouArea');
    thankYouArea.style.display = 'block'
 })



