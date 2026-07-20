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
