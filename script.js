
  // Saare web page fragments ko JavaScript text links se jodne ke liye
  const langSelect = document.getElementById('language-select');
  
  // Element selections (Inhe check kar lena ki aapke HTML tags me ye content match kare)
  const mainHeading = document.querySelector('h2'); // Smart Sanitation. Instant Relief.
  const description = document.querySelector('p');  // Connecting local residents...
  const actionBtn = document.querySelector('button'); // REPORT OVERFLOW

  // Language content changes
  langSelect.addEventListener('change', function() {
    if (this.value === 'hi') {
      mainHeading.textContent = "स्मार्ट सफाई। तुरंत राहत।";
      description.textContent = "मानसून के समय सीवरेज ओवरफ्लो और ब्लॉकेज की समस्या के समाधान के लिए स्थानीय निवासियों को सीधे सत्यापित सफाई कर्मचारियों से जोड़ना। बिना किसी देरी के तुरंत शिकायत दर्ज करें।";
      actionBtn.textContent = "शिकायत दर्ज करें";
    } else {
      mainHeading.textContent = "Smart Sanitation. Instant Relief.";
      description.textContent = "Connecting local residents with verified sanitation workers during monsoon emergencies. Report sewage overflows instantly and get hyper-local community help without any delay";
      actionBtn.textContent = "REPORT OVERFLOW";
    }
  });

      // Elements grab karein
const modal = document.getElementById("reportModal");
const reportBtn = document.querySelector(".report-btn");
const closeBtn = document.querySelector(".close-btn");
const overflowForm = document.getElementById("overflowForm");

// Button click hone par modal khulega
reportBtn.onclick = function() {
    modal.style.display = "block";
}

// 'X' click hone par modal band hoga
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Modal ke bahar kahin bhi click karne par modal band hoga
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submit ka response
overflowForm.onsubmit = function(e) {
    e.preventDefault();
    alert("Emergency alert sent! Nearby workers are being notified.");
    modal.style.display = "none";
    overflowForm.reset();
}
