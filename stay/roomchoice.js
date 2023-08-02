function deluxe_room_next(){
    localStorage.setItem('room', "Deluxe Room with Balcony");
    localStorage.setItem("price_a_night", "CHF 700")
    window.location.href='special_details.html'; 
}

function grand_suite_next(){
    localStorage.setItem('room', "Grand Suite");
    localStorage.setItem("price_a_night", "CHF 2,000")
    window.location.href='special_details.html';
}

function famloft_next(){
    localStorage.setItem('room', "Family Loft");
    localStorage.setItem("price_a_night", "CHF 3,000")
    window.location.href='special_details.html';
}

function penthouse_next(){
    localStorage.setItem('room', "Family Loft");
    localStorage.setItem("price_a_night", "CHF 3,000")
    window.location.href='special_details.html';
}

//get information from the local storage
window.addEventListener('DOMContentLoaded', function (){
    var checkin = localStorage.getItem('checkin');
    document.getElementById('checkindate').textContent= checkin; 

    var checkoutdate=document.getElementById('checkoutdate');
    var checkout = localStorage.getItem('checkout');
    checkoutdate.textContent=checkout

    var adultnumber=document.getElementById('adultnumber');
    var adults=localStorage.getItem('adults');
    adultnumber.textContent=adults;

    var childnumber=document.getElementById('childnumber');
    var child = localStorage.getItem('child');
    childnumber.textContent=child;

    const checkinDate = localStorage.getItem("checkin");
  const checkoutDate = localStorage.getItem("checkout");

    document.getElementById("checkindate").textContent = checkinDate;
    document.getElementById("checkoutdate").textContent = checkoutDate;

    const night=document.getElementById('nights');
    var nights = localStorage.getItem('nights');
    night.textContent= nights;
});

//delete information from main page
function back_dates(){
    localStorage.removeItem("room");
    localStorage.removeItem("price_a_night");
    window.location.href = 'book_rooms.html';
}
 