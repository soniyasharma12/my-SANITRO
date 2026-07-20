// Language Selection Dropdown
const langSelect = document.getElementById('language-select');

// Web Page Elements Selection
const mainHeading = document.querySelector('h2'); 
const description = document.querySelector('p');  
const actionBtn = document.querySelector('.report-btn'); 
// Mobile Menu Toggle Logic
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked (Mobile view)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
// Language switch karne ka function
langSelect.addEventListener('change', function() {
    if (this.value === 'hi') {
        mainHeading.textContent = "स्मार्ट सफाई। तुरंत राहत।";
        description.textContent = "मानसूनी सीवरेज ओवरफ्लो और ब्लॉकेज की समस्या के समाधान के लिए स्थानीय निवासियों को सीधे सत्यापित सफाई कर्मचारियों से जोड़ना। बिना किसी देरी के तुरंत सहायता प्राप्त करें।";
        actionBtn.textContent = "आपातकालीन शिकायत दर्ज करें";
    } else {
        mainHeading.textContent = "Smart Sanitation. Instant Relief.";
        description.textContent = "Connecting local residents with verified sanitation workers during monsoon emergencies. Report sewage overflows instantly and get hyper-local community help without any delay.";
        actionBtn.textContent = "REPORT OVERFLOW";
    }
});

// Modal Elements Selection
const modal = document.getElementById("reportModal");
const reportBtn = document.querySelector(".report-btn");
const closeBtn = document.querySelector(".close-btn");
const overflowForm = document.getElementById("overflowForm");

// Button click hone par popup khulega
reportBtn.onclick = function() {
    modal.style.display = "block";
}

// 'X' button click hone par popup band hoga
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Modal ke bahar click karne par popup band hoga
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submit hone par Hindi Alert message
overflowForm.onsubmit = function(e) {
    e.preventDefault();
    alert("आपातकालीन सूचना भेज दी गई है! नजदीकी सफाई कर्मचारियों को सूचित किया जा रहा है।");
    modal.style.display = "none";
    overflowForm.reset();
};
