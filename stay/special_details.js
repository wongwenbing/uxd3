//get information from the local storage
window.addEventListener('DOMContentLoaded', function (){
    var checkindate=document.getElementById('checkindate');
    var checkin = localStorage.getItem('checkin');
    checkindate.textContent=checkin;

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
    document.getElementById("checkindate").textContent = checkinDate;

    const checkoutDate = localStorage.getItem("checkout");
    document.getElementById("checkoutdate").textContent = checkoutDate;

    const roomselect = localStorage.getItem("room");
    document.getElementById("room_selection").textContent = roomselect;

    const price = localStorage.getItem('price_a_night');
    document.getElementById("price_night").textContent=price;
});


//validate information that are given

