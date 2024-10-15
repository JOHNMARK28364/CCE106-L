// Consultation Functions
document.addEventListener("DOMContentLoaded", function () {
    // Calendar Variables
    const leftArrow = document.getElementById("arrow-left");
    const rightArrow = document.getElementById("arrow-right");
    const monthSpan = document.querySelector(".month span");
    const calendarDays = document.getElementById("calendarDays");
    const daySelectionText = document.getElementById("selectedDay");
    let currentMonth = 8;
    let currentYear = 2024;

    // Update calendar display
    function updateCalendar() {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        monthSpan.textContent = `${currentYear} ${monthNames[currentMonth]}`;
        updateDaysInMonth();
    }

    function updateDaysInMonth(year, month) {
        // Get the number of days in the given month and year
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        // Get all the existing day elements in the calendar
        const dayElements = document.querySelectorAll(".days td");
    
        // Update the content of each day element
        for (let i = 0; i < dayElements.length; i++) {
            if (i < daysInMonth) {
                // If the day exists in the new month, show the correct day number
                dayElements[i].textContent = i + 1;
                dayElements[i].classList.add("available"); // Example: mark as available for simplicity
            } else {
                // If the day exceeds the number of days in the month, clear the content
                dayElements[i].textContent = "";
                dayElements[i].classList.remove("available"); // Example: remove available status
            }
        }
    }
    

    // Handle calendar navigation
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

    // Initialize calendar on page load
    updateCalendar();

    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Gather all form data
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const contactNo = document.getElementById('contactNo').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const status = document.getElementById('status').value;
        const problem = document.getElementById('problem').value;
        const sendEmail = document.getElementById('sendEmail').checked;

        // Basic validation (checks if fields are empty)
        if (!name || !birthdate || !contactNo || !age || !email || !gender || !status || !problem) {
            alert("Please fill in all required fields.");
            return;
        }

        // Display form data in the console (for demo purposes)
        console.log("Name:", name);
        console.log("Birthdate:", birthdate);
        console.log("Contact No:", contactNo);
        console.log("Age:", age);
        console.log("Email:", email);
        console.log("Gender:", gender);
        console.log("Status:", status);
        console.log("Problem:", problem);
        console.log("Send Confirmation Email:", sendEmail);

        // Simulate a form submission or AJAX call to a backend here
        alert("Form submitted successfully!");

        // Reset the form after submission
        document.getElementById('contactForm').reset();
        document.getElementById('calendarSec').reset();
        daySelectionText.textContent = "Select Available Day"
    });

    // Handle day selection
    calendarDays.addEventListener('click', function (event) {
        const clickedDay = event.target;

        if (clickedDay.classList.contains('available')) {
            const dayNumber = clickedDay.textContent;
            daySelectionText.innerHTML = `Availability on ${getDayOfWeek(currentYear, currentMonth, parseInt(dayNumber))}, September ${dayNumber}`;
        } else {
            alert('This day is fully booked!');
        }
    });

    // Function to get the day of the week for a given date
    function getDayOfWeek(year, month, day) {
        const date = new Date(year, month, day);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()];
    }

    // Function to handle time slot selection
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


