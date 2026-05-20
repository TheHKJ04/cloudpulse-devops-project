const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

function calculateDateInfo() {

  const input = document.getElementById('dateInput').value;

  if (!input) {
    alert("Please select a date.");
    return;
  }

  const date = new Date(input);

  const today = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const dayName = days[date.getDay()];

  document.getElementById('dayResult').innerText = dayName;

  // Day of Year
  const start = new Date(date.getFullYear(), 0, 0);

  const diff = date - start;

  const oneDay = 1000 * 60 * 60 * 24;

  const dayOfYear = Math.floor(diff / oneDay);

  document.getElementById('dayYearResult').innerText = dayOfYear;

  // Week Number
  const weekNumber = Math.ceil(dayOfYear / 7);

  document.getElementById('weekResult').innerText = weekNumber;

  // Days Remaining
  const endOfYear = new Date(date.getFullYear(), 11, 31);

  const remainingDays = Math.ceil(
    (endOfYear - date) / oneDay
  );

  document.getElementById('remainingResult').innerText =
    remainingDays;

  // +30 days
  const plus30 = new Date(date);

  plus30.setDate(plus30.getDate() + 30);

  document.getElementById('plus30Result').innerText =
    plus30.toDateString();

  // -30 days
  const minus30 = new Date(date);

  minus30.setDate(minus30.getDate() - 30);

  document.getElementById('minus30Result').innerText =
    minus30.toDateString();

  // Difference from Today
  const difference = Math.ceil(
    (date - today) / oneDay
  );

  document.getElementById('differenceResult').innerText =
    `${difference} day(s)`;

  // Leap year
  const year = date.getFullYear();

  const isLeap =
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0;

  document.getElementById('leapResult').innerText =
    isLeap ? "Yes" : "No";
}

function clearResults() {

  document.getElementById('dateInput').value = "";

  const ids = [
    'dayResult',
    'weekResult',
    'dayYearResult',
    'remainingResult',
    'plus30Result',
    'minus30Result',
    'differenceResult',
    'leapResult'
  ];

  ids.forEach(id => {
    document.getElementById(id).innerText = "--";
  });
}