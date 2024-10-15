//Scheldule Functions
 const scheduleData = {
    upcoming: [
        { date: "Tomorrow", name: "Anonymous 1", time: "9:00 - 9:30" },
        { date: "Tomorrow", name: "Anonymous 2", time: "9:00 - 9:30" },
        { date: "Tomorrow", name: "Anonymous 3", time: "9:00 - 9:30" },
        { date: "Mon, 23 Sept", name: "Anonymous 4", time: "9:00 - 9:30" }
    ],
    pending: [
        { date: "Wed, 25 Sept", name: "Anonymous 5", time: "10:00 - 10:30" },
        { date: "Thu, 26 Sept", name: "Anonymous 6", time: "11:00 - 11:30" }
        // Add more pending entries here
    ],
    past: [
        { date: "Mon, 1 Sept", name: "Anonymous 7", time: "9:00 - 9:30" },
        { date: "Tue, 2 Sept", name: "Anonymous 8", time: "10:00 - 10:30" }
        // Add more past entries here
    ]
};

// Function to render the schedule table based on the selected tab
function renderSchedule(tab) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear current table content

    // Get the relevant schedule list based on the tab
    const scheduleList = scheduleData[tab];
    if (scheduleList) {
        scheduleList.forEach(item => {
            const row = `<tr>
                            <td>${item.date}</td>
                            <td>${item.name}</td>
                            <td>${item.time}</td>
                        </tr>`;
            tbody.innerHTML += row;
        });
    }
}

// Function to handle tab switching
function handleTabClick(event) {
    const tab = event.target;

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to the clicked tab
    tab.classList.add('active');

    // Render the schedule list based on the clicked tab
    if (tab.innerText.includes('Upcoming')) {
        renderSchedule('upcoming');
    } else if (tab.innerText.includes('Pending')) {
        renderSchedule('pending');
    } else if (tab.innerText.includes('Past')) {
        renderSchedule('past');
    }
}

// Event listener for the tabs
window.onload = () => {
    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', handleTabClick);
    });

    // Default to rendering the 'Upcoming' tab content
    renderSchedule('upcoming');
};
