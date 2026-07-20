// Mobile Hamburger Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Modal Toggle Functions
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

// Track Status Function
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

// Close Modal when clicking background overlay
window.onclick = function(event) {
    const modal = document.getElementById('reportModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
/* --- WORKER REGISTRATION SECTION STYLES --- */
.worker-card {
    border-top: 5px solid #16a34a; /* Green accent bar for worker onboarding */
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-row .form-group {
    flex: 1;
}

.worker-form select {
    width: 100%;
    padding: 0.65rem;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.9rem;
    background-color: #ffffff;
}

.worker-submit-btn {
    width: 100%;
    background-color: #16a34a; /* Partner Green Color */
    color: #ffffff;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: background-color 0.2s, transform 0.2s;
}

.worker-submit-btn:hover {
    background-color: #15803d;
    transform: translateY(-1px);
}

/* Mobile Responsiveness for Form Row */
@media (max-width: 600px) {
    .form-row {
        flex-direction: column;
        gap: 0;
    }
}
// Auto-GPS Location Fetcher
function getLocation() {
    const locInput = document.getElementById('locationInput');
    if (navigator.geolocation) {
        locInput.value = "Fetching GPS coordinates...";
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(4);
                const lng = position.coords.longitude.toFixed(4);
                locInput.value = `GPS: Lat ${lat}, Long ${lng} (Auto Detected)`;
            },
            () => {
                locInput.value = "";
                alert("Location permission denied. Please type your location manually.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}
