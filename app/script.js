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

  const [year, month, day] = input.split('-');
  const date = new Date(year, month - 1, day);
  const today = new Date();

  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];

  // Day name
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
  const remainingDays = Math.ceil((endOfYear - date) / oneDay);
  document.getElementById('remainingResult').innerText = remainingDays;

  // +30 days
  const plus30 = new Date(date);
  plus30.setDate(plus30.getDate() + 30);
  document.getElementById('plus30Result').innerText = plus30.toDateString();

  // -30 days
  const minus30 = new Date(date);
  minus30.setDate(minus30.getDate() - 30);
  document.getElementById('minus30Result').innerText = minus30.toDateString();

  // Difference from Today
  const difference = Math.ceil((date - today) / oneDay);
  const text = difference >= 0
    ? `${difference} day(s) remaining`
    : `${Math.abs(difference)} day(s) ago`;
  document.getElementById('differenceResult').innerText = text;

  // Leap year
  const yr = date.getFullYear();
  const isLeap = (yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0);
  document.getElementById('leapResult').innerText = isLeap ? "Yes" : "No";
}

function clearResults() {
  document.getElementById('dateInput').value = "";
  const ids = [
    'dayResult', 'weekResult', 'dayYearResult', 'remainingResult',
    'plus30Result', 'minus30Result', 'differenceResult', 'leapResult'
  ];
  ids.forEach(id => {
    document.getElementById(id).innerText = "--";
  });
}
