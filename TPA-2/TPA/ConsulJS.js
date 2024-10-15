// Consultation Functions
document.addEventListener("DOMContentLoaded", function () {
    
    const leftArrow = document.getElementById("arrow-left");
    const rightArrow = document.getElementById("arrow-right");
    const monthSpan = document.querySelector(".month span");
    const calendarDays = document.getElementById("calendarDays");
    const daySelectionText = document.getElementById("selectedDay");
    let currentMonth = 8;
    let currentYear = 2024;

  
    function updateCalendar() {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        monthSpan.textContent = `${currentYear} ${monthNames[currentMonth]}`;
        updateDaysInMonth();
    }

    function updateDaysInMonth(year, month) {
       
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        
        const dayElements = document.querySelectorAll(".days td");
    
   
        for (let i = 0; i < dayElements.length; i++) {
            if (i < daysInMonth) {
           
                dayElements[i].textContent = i + 1;
                dayElements[i].classList.add("available"); 
            } else {
               
                dayElements[i].textContent = "";
                dayElements[i].classList.remove("available"); 
            }
        }
    }
    


    leftArrow.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentMonth > 0) {
            currentMonth--;
        } else {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    rightArrow.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentMonth < 11) {
            currentMonth++;
        } else {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

  
    updateCalendar();


    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

      
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const contactNo = document.getElementById('contactNo').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const status = document.getElementById('status').value;
        const problem = document.getElementById('problem').value;
        const sendEmail = document.getElementById('sendEmail').checked;

   
        if (!name || !birthdate || !contactNo || !age || !email || !gender || !status || !problem) {
            alert("Please fill in all required fields.");
            return;
        }

      
        console.log("Name:", name);
        console.log("Birthdate:", birthdate);
        console.log("Contact No:", contactNo);
        console.log("Age:", age);
        console.log("Email:", email);
        console.log("Gender:", gender);
        console.log("Status:", status);
        console.log("Problem:", problem);
        console.log("Send Confirmation Email:", sendEmail);

       
        alert("Form submitted successfully!");

   
        document.getElementById('contactForm').reset();
        document.getElementById('calendarSec').reset();
        daySelectionText.textContent = "Select Available Day"
    });

          
    calendarDays.addEventListener('click', function (event) {
        const clickedDay = event.target;

        if (clickedDay.classList.contains('available')) {
            const dayNumber = clickedDay.textContent;
            daySelectionText.innerHTML = `Availability on ${getDayOfWeek(currentYear, currentMonth, parseInt(dayNumber))}, September ${dayNumber}`;
        } else {
            alert('This day is fully booked!');
        }
    });

    
    function getDayOfWeek(year, month, day) {
        const date = new Date(year, month, day);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()];
    }

   
    const timeSlots = document.querySelectorAll('.time-slots input[type="checkbox"]');
    timeSlots.forEach(function (slot) {
        slot.addEventListener('change', function (event) {
            if (event.target.checked) {
                console.log(`Time selected: ${event.target.value}`);
            } else {
                console.log(`Time unselected: ${event.target.value}`);
            }
        });
    });
});


