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

//validate information 
function validate_1(){
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const contactInput= document.getElementById("contact");
    const address = document.getElementById("billing");

    const form = document.getElementById("form");
    //validate first name
    if(firstname.value.trim()===""){
        alert("First Name cannot be left blank!");
        firstname.focus();
        return false;
    }

    //validate last name
    if(lastname.value.trim()===""){
        alert("Last Name cannot be left blank!");
        lastname.focus();
        return false;
    }

    //validate email
    const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)){
        alert("Please enter a valid email address.");
        return false;
    }

    //validate contact number 
    if (contactInput.value === ""){
        alert("Please enter a valid contact number");
        return false;
    }

    //validate billing address
    if (address.value.trim()===""){
        alert("Address cannot be left blank!");
        address.focus();
        return false;
    }
    //only if all validations work, then move on to next section
    window.location.href="payment.html"
    
    //store in location storage
    localStorage.setItem("fn", firstname);
    localStorage.setItem('ln', lastname);
    localStorage.setItem('contact',contact);
    localStorage.setItem('bill', address);
}

    //Adding form submite event listener -> ensure validation is done
    const form = document.getElementById("form");
    form.addEventListener("click", (event) => {
        event.preventDefault(); 
        validate_1();
    });

