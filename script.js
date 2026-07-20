// Mobile Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Modal Functions
function openReportModal() {
    document.getElementById('reportModal').style.display = 'flex';
}

function closeReportModal() {
    document.getElementById('reportModal').style.display = 'none';
}

function handleFormSubmit(e) {
    e.preventDefault();
    const randomTicket = 'SAN-' + Math.floor(1000 + Math.random() * 9000);
    alert(`Complaint Submitted! Your Ticket ID is: ${randomTicket}`);
    closeReportModal();
}

function handleWorkerRegistration(e) {
    e.preventDefault();
    alert('Thank you! Worker registration received. SANITRO team will verify your details soon.');
    e.target.reset();
}

// Track Status
function trackComplaint() {
    const ticketVal = document.getElementById('ticketInput').value.trim();
    const statusBox = document.getElementById('statusResult');
    const resTicket = document.getElementById('resTicket');

    if (ticketVal === '') {
        alert('Please enter a valid Ticket ID!');
        return;
    }

    resTicket.textContent = ticketVal;
    statusBox.style.display = 'block';
}

// Auto GPS Function
function getLocation() {
    const locInput = document.getElementById('locationInput');
    if (navigator.geolocation) {
        locInput.value = "Fetching GPS location...";
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(4);
                const lng = position.coords.longitude.toFixed(4);
                locInput.value = `GPS: Lat ${lat}, Long ${lng}`;
            },
            () => {
                locInput.value = "";
                alert("Location permission denied. Type address manually.");
            }
        );
    } else {
        alert("Geolocation not supported.");
    }
}

// Close Modal on Click Outside
window.onclick = function(event) {
    const modal = document.getElementById('reportModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
