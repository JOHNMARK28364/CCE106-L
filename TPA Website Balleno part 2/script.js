document.addEventListener("DOMContentLoaded", function() {
  const calendar = document.getElementById("calendar");
  const modal = document.getElementById("calendarModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const span = document.getElementsByClassName("close")[0];

  
  const availability = [
    { day: 1, status: 'available', slots: ['8:00 AM - John Doe', '9:00 AM - Jane Smith'] },
    { day: 2, status: 'full', slots: [] },
    { day: 3, status: 'available', slots: ['10:30 AM - Sam Adams'] },
    { day: 4, status: 'full', slots: [] },
    { day: 5, status: 'available', slots: ['8:30 AM - Chris Lee', '1:00 PM - Taylor Morgan'] },
    ];

  
  for (let i = 1; i <= 30; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('calendar-day');
    dayDiv.innerText = i;

    const dayStatus = availability.find(a => a.day === i);

    if (dayStatus) {
      dayDiv.classList.add(dayStatus.status);
    } else {
      dayDiv.classList.add('available');
    }

    // Add click event to open modal
    dayDiv.addEventListener("click", function() {
      openModal(i, dayStatus);
    });

    calendar.appendChild(dayDiv);
  }

  
  function openModal(day, dayStatus) {
    modalTitle.innerText = `Schedule for Day ${day}`;
    modalBody.innerHTML = '';

    if (dayStatus && dayStatus.status === 'full') {
      modalBody.innerHTML = '<p>This day is fully booked.</p>';
    } else if (dayStatus && dayStatus.slots.length > 0) {
      const slotList = document.createElement('ul');
      dayStatus.slots.forEach(slot => {
        const li = document.createElement('li');
        li.textContent = slot;
        slotList.appendChild(li);
      });
      modalBody.appendChild(slotList);
    } else {
      modalBody.innerHTML = '<p>No appointments available on this day.</p>';
    }

    modal.style.display = "block";
  }

  
  span.onclick = function() {
    modal.style.display = "none";
  }

  
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Appointment submitted!");
  });
});
