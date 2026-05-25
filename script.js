// ======================================
// AnkitBooking.com JavaScript FILE
// Save This File As script.js
// ======================================


// Function For Popup Messages
function showMessage(message) {

  alert(message);

}


// Dynamic Booking Counter
let bookingCount = 12480;


// Auto Increase Booking Number
setInterval(() => {

  bookingCount += Math.floor(Math.random() * 5);

  document.getElementById("bookingCount").innerText =
    bookingCount;

}, 3000);
