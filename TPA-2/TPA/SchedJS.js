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
   
    ],
    past: [
        { date: "Mon, 1 Sept", name: "Anonymous 7", time: "9:00 - 9:30" },
        { date: "Tue, 2 Sept", name: "Anonymous 8", time: "10:00 - 10:30" }
    
    ]
};


function renderSchedule(tab) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

  
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


function handleTabClick(event) {
    const tab = event.target;

    
    document.querySelectorAll('.tab').forEach(button => {
        button.classList.remove('active');
    });

   
    tab.classList.add('active');

    
    if (tab.innerText.includes('Upcoming')) {
        renderSchedule('upcoming');
    } else if (tab.innerText.includes('Pending')) {
        renderSchedule('pending');
    } else if (tab.innerText.includes('Past')) {
        renderSchedule('past');
    }
}


window.onload = () => {
    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', handleTabClick);
    });

  
    renderSchedule('upcoming');
};
