function validateStep(step) {
    let inputs = document.getElementById(`step${step}`).getElementsByTagName('input');
    let selects = document.getElementById(`step${step}`).getElementsByTagName('select');
    let textarea = document.getElementById(`step${step}`).getElementsByTagName('textarea');

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value.trim() === '') return false;

        // Phone number validation for step 2
        if(step == 2 && inputs[i].id === 'phone') {
            const phone = inputs[i].value;
            const regex = /^\d+$/;
            if(!regex.test(phone)) {
                throw new Error('Please input only numbers for phone.');
            }
        }
    }

    for(let i = 0; i < selects.length; i++) {
        if(selects[i].value.trim() === '') return false;
    }

    for(let i = 0; i < textarea.length; i++) {
        // Skip the special-requests textarea
        if(textarea[i].id === 'special-requests') continue;
        
        if(textarea[i].value.trim() === '') return false;
    }

    return true;
}

function changeStep(step, direction) {
    let totalSteps = 3; // Update with total number of steps
    let progress;

    // Hide all steps
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`step${i}`).classList.add('hidden');
    }
    
    // Show current step
    try {
        if (direction === 'next') {
            if(!validateStep(step - 1)) {
                alert('Please fill out all fields before proceeding.');
                document.getElementById(`step${step - 1}`).classList.remove('hidden'); // Show the current step again
                return;
            }

            document.getElementById(`step${step}`).classList.remove('hidden');
            progress = (step / totalSteps) * 100;
        } else if (direction === 'prev' && step > 1) {
            document.getElementById(`step${step - 1}`).classList.remove('hidden');
            progress = ((step - 1) / totalSteps) * 100;
        }
    } catch (error) {
        alert(error.message);
        document.getElementById(`step${step - 1}`).classList.remove('hidden'); // Show the current step again
    }
}

// Date restriction
    window.onload = function() {
        let today = new Date();
        let twoWeeksFromNow = new Date();
    
        // add 14 days to the date
        twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
    
        // format the date as 'yyyy-mm-dd' as required by HTML5 date inputs
        let formattedToday = today.toISOString().split('T')[0];
        let formattedTwoWeeksFromNow = twoWeeksFromNow.toISOString().split('T')[0];
    
        // set the min and max attributes
        document.getElementById('date').min = formattedToday;
        document.getElementById('date').max = formattedTwoWeeksFromNow;
    }
    function handleSubmit(event) {
        event.preventDefault(); // Prevents the form from being submitted in the default way, i.e., refreshing the page.
        
        // Perform form validation here.
        if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
            alert('Please fill out all fields before submitting.');
            return;
        }
        
        // If everything is good with the form data, navigate to the confirmation page.
        window.location.href = 'diningconfirmation.html';
        
        // Replace the form content with a message
        document.getElementById('bookingContainer').innerHTML = '<h3>Your reservation has been submitted! We will contact you soon.</h3>';
    }
    
    
// Confirmation Message
