window.onload = () => {

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2000);

  animateCounter("deployments", 120);
  animateCounter("containers", 48);

  updateClock();
  setInterval(updateClock, 1000);
};

document.getElementById('themeToggle')
.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

function animateCounter(id, target) {

  let count = 0;

  const element = document.getElementById(id);

  const interval = setInterval(() => {

    count++;

    element.innerText = count;

    if (count >= target) {
      clearInterval(interval);
    }

  }, 20);
}

function updateClock() {

  const now = new Date();

  document.getElementById('clock').innerText =
    now.toLocaleTimeString();
}

function showToast() {

  const toast = document.getElementById('toast');

  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

function startDeployment() {

  const bar = document.getElementById('progressBar');

  let width = 0;

  const interval = setInterval(() => {

    if (width >= 100) {

      clearInterval(interval);

      showToast();

    } else {

      width++;

      bar.style.width = width + '%';
    }

  }, 40);
}

function toggleStatus(button) {

  if (button.innerText === "Running") {

    button.innerText = "Stopped";
    button.style.background = "red";

  } else {

    button.innerText = "Running";
    button.style.background = "green";
  }
}