const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date().getDay();

// Output the student report values below 30
const studentReportElement = document.querySelector('#student-report');

// Using a forEach loop to display the student report values below LIMIT
studentReport.forEach((item) => {
    if (item < LIMIT) {
        let li = document.createElement('li');
        li.textContent = `Value: ${item}`;
        studentReportElement.appendChild(li);
    }
});

// Output the next DAYS starting from today
const daysListElement = document.querySelector('#days-list');

for (let i = 0; i < DAYS; i++) {
    let dayIndex = (today + i) % 7; // Loop through the week
    let li = document.createElement('li');
    li.textContent = daysOfWeek[dayIndex];
    daysListElement.appendChild(li);
}