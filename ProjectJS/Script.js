function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    document.getElementById('Date').innerText = now.toLocaleDateString(undefined, options);
    document.getElementById('calendar').innerHTML = generateCalendar(now.getFullYear(), now.getMonth());
}

function generateCalendar(year, month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date(year, month, 1);
    const firstDayIndex = currentDate.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendarHTML = `<h2>${monthNames[month]} ${year}</h2><table>`;
    let day = 1;

    calendarHTML += '<tr>';
    for (let i = 0; i < 7; i++) {
        calendarHTML += `<th>${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</th>`;
    }
    calendarHTML += '</tr>';

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayIndex) {
                calendarHTML += '<td></td>';
            } else if (day > daysInMonth) {
                break;
            } else {
                calendarHTML += `<td>${day}</td>`;
                day++;
            }
        }
        calendarHTML += '</tr>';
    }

    calendarHTML += '</table>';
    return calendarHTML;
}

function timedIn() {
    // Get the current time
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();

    // Display alert with current time
    alert(`Timed In at: ${formattedTime}`);
}

function timedOut() {
    // Get the current time
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();

    // Display alert with current time
    alert(`Timed Out at: ${formattedTime}`);
}

updateTime(); // Call initially
setInterval(updateTime, 1000); // Update every second
