 //==== Greeting =====
function updateGreeting() {
    const now = new Date();


// === CLOCK ====
const hh = now.getHours().toString().padStart(2, '0');
const mm = now.getMinutes   ().toString().padStart(2, '0');
const ss = now.getSeconds().toString().padStart(2, '0');
document.getElementById('clock').textContent = `${hh}:${mm}:${ss}`;

// === DATE ===
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById('date-display').textContent = now.toLocaleDateString('en-US', dateOptions);


// === Greeting based on time ====
const hour = now.getHours();
let sapa;
if (hour < 12) 
     sapa = 'Good Morning';
else if (hour < 15) 
    sapa = 'Good Afternoon';
else if (hour < 18) 
    sapa = 'Good Afternoon';
else if (hour < 21) 
    sapa = 'Good Evening';
else   
    sapa = 'Good Night'; 

document.getElementById('greeting').textContent = `${sapa}!`;
}

updateGreeting();
setInterval(updateGreeting, 1000);

