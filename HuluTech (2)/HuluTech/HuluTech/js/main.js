document.addEventListener('DOMContentLoaded', () => {
    
    // ===== 1. HAMBURGER LOGIC =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); 
        });
    }

    // ===== 2. TESTIMONIAL SLIDER LOGIC =====
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIdx = 0;

    if (testimonials.length > 0) {
        function showNextTestimonial() {
            testimonials[currentIdx].classList.remove('active');
            currentIdx = (currentIdx + 1) % testimonials.length;
            testimonials[currentIdx].classList.add('active');
        }
        setInterval(showNextTestimonial, 5000);
    }

    // ===== 3. CONTACT FORM LOGIC (With Spinner) =====
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const originalText = submitBtn.innerText;
            submitBtn.innerHTML = `<span class="btn-spinner" style="display: inline-block !important;"></span> Sending...`;
            submitBtn.style.pointerEvents = 'none'; 

            setTimeout(() => {
                if (statusMessage) {
                    statusMessage.textContent = "✔ Message Sent Successfully!";
                    statusMessage.classList.add('success');
                    statusMessage.style.display = 'block';

                    contactForm.reset();

                    submitBtn.innerHTML = `<span class="btn-text">${originalText}</span>`;
                    submitBtn.style.pointerEvents = 'auto';

                    setTimeout(() => {
                        statusMessage.style.display = 'none';
                        statusMessage.classList.remove('success');
                    }, 5000);
                }
            }, 1500); 
        });
    }

    // ===== 4. REVEAL ANIMATION LOGIC =====
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0) {
        setTimeout(() => {
            reveals.forEach(element => {
                element.classList.add('active');
            });
        }, 200);
    }

    // ===== 5. PARTNER LOGO LABELS & DISABLE LINKS =====
    const logoAnchors = document.querySelectorAll('.logo-track a');
    logoAnchors.forEach(a => {
        const img = a.querySelector('img');
        // Restore: Add company name labels using the image alt text
        if (img && img.alt) a.dataset.name = img.alt;

        // Make links non-clickable
        a.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
        a.style.cursor = 'default';
    });

    // ===== 6. PARTNER MODAL LOGIC =====
    const modal = document.getElementById("partnerModal");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const closeBtn2 = document.getElementById('closeBtn2');

    if (openBtn) {
        openBtn.onclick = function() {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

    const closeAllModals = () => {
        if (modal) modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if (closeBtn) closeBtn.onclick = closeAllModals;
    if (closeBtn2) closeBtn2.onclick = closeAllModals;

    window.onclick = function(event) {
        if (event.target == modal) closeAllModals();
    }

    // ===== 7. PARTNER FORM VALIDATION (NATIVE TOOLTIP) =====
    const pForm = document.getElementById('partnershipForm');
    const applyBtn = document.getElementById("applyBtn");

    if (applyBtn && pForm) {
        applyBtn.onclick = function(e) {
            // This triggers the native "Please fill out this field" tooltip
            if (!pForm.reportValidity()) {
                return; 
            }

            e.preventDefault();
            const countrySelect = document.getElementById('countrySelect');
            const workPhone = document.getElementById('workPhone');
            const phoneFull = (countrySelect && workPhone) ? `${countrySelect.value} ${workPhone.value}` : '';
            
            alert(`Submission successful! ${phoneFull ? 'Phone: ' + phoneFull + ' — ' : ''}HULUTECH will contact you soon.`);
            pForm.reset();
            closeAllModals();
        }
    }

    // ===== 8. FULL COUNTRY LIST POPULATION =====
    const countrySelect = document.getElementById('countrySelect');
    const countries = [
        { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
        { name: 'Albania', code: '+355', flag: '🇦🇱' },
        { name: 'Algeria', code: '+213', flag: '🇩🇿' },
        { name: 'Australia', code: '+61', flag: '🇦🇺' },
        { name: 'Canada', code: '+1', flag: '🇨🇦' },
        { name: 'Egypt', code: '+20', flag: '🇪🇬' },
        { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
        { name: 'France', code: '+33', flag: '🇫🇷' },
        { name: 'Germany', code: '+49', flag: '🇩🇪' },
        { name: 'India', code: '+91', flag: '🇮🇳' },
        { name: 'Kenya', code: '+254', flag: '🇰🇪' },
        { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
        { name: 'South Africa', code: '+27', flag: '🇿🇦' },
        { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
        { name: 'United States', code: '+1', flag: '🇺🇸' }
    ];

    if (countrySelect) {
        countrySelect.innerHTML = '<option value="" disabled selected>Select country</option>';
        countries.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.code;
            opt.textContent = `${c.flag} ${c.name} (${c.code})`;
            countrySelect.appendChild(opt);
        });
        // Pre-select South Africa
        const sa = Array.from(countrySelect.options).find(o => o.value === '+27');
        if (sa) sa.selected = true;
    }

    // ===== 9. PHONE INPUT BEHAVIOR =====
    const workPhone = document.getElementById('workPhone');
    if (workPhone) {
        workPhone.addEventListener('input', (e) => {
            const el = e.target;
            const digits = el.value.replace(/\D/g, '').slice(0, 15);
            if (el.value !== digits) el.value = digits;
        });
    }

    // ===== 10. SERVICE MODAL POPUP ANIMATION =====
    const serviceCards = document.querySelectorAll(".glass-card");
    const serviceModal = document.getElementById("serviceModal");

    if (serviceCards.length > 0 && serviceModal) {
        const modalTitle = document.getElementById("modalTitle");
        const modalText = document.getElementById("modalText");
        const closeServiceBtn = serviceModal.querySelector(".close-btn");

        serviceCards.forEach(card => {
            card.addEventListener("click", () => {
                modalTitle.textContent = card.dataset.title;
                modalText.innerHTML = card.dataset.details;

                // Reset animations
                modalTitle.classList.remove('fade-in');
                modalText.querySelectorAll('*').forEach(el => el.classList.remove('fade-in'));

                serviceModal.style.display = "flex";

                // Animate content
                setTimeout(() => modalTitle.classList.add('fade-in'), 50);
                const children = Array.from(modalText.children);
                children.forEach((el, i) => {
                    setTimeout(() => el.classList.add('fade-in'), 150 * (i + 1));
                });
            });
        });

        if (closeServiceBtn) {
            closeServiceBtn.onclick = () => serviceModal.style.display = "none";
        }
        window.addEventListener("click", (e) => {
            if (e.target === serviceModal) serviceModal.style.display = "none";
        });
    }
});
// Form Submission
document.getElementById('apply-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const status = document.getElementById('status-message');

    btn.innerText = "Sending...";
    btn.disabled = true;

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(this)))
    })
    .then(res => {
        if (res.ok) {
            status.innerHTML = "✅ Application Sent Successfully!";
            status.style.color = "green";
            this.reset();
            setTimeout(closeApplyNow, 2500);
        } else {
            status.innerHTML = "❌ Error sending application.";
            status.style.color = "red";
        }
    })
    .finally(() => {
        btn.innerText = "Send Application to HuluTech";
        btn.disabled = false;
    });
});// 1. Your Job Data
const huluJobs = [
    { id: 'job1', title: "Senior Software Engineer" },
    { id: 'job2', title: "UX/UI Designer" },
    { id: 'job3', title: "DevOps Engineer" }
];

// 2. The function that actually draws the jobs in the Admin Panel
function renderAdminCareers() {
    const list = document.getElementById('adminJobList');
    if (!list) return; // Exit if the element isn't found
    
    list.innerHTML = ''; // Clear "nothing" or old content

    huluJobs.forEach(job => {
        // Check local memory to see if admin turned it off
        const isDisabled = localStorage.getItem('disabled_' + job.id) === 'true';
        
        const row = document.createElement('div');
        row.style = "display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.07); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);";
        
        row.innerHTML = `
            <span style="color: white; font-weight: 500;">${job.title}</span>
            <button onclick="toggleJobStatus('${job.id}')" style="
                padding: 6px 15px; border-radius: 4px; border: none; cursor: pointer; font-weight: bold;
                transition: 0.3s;
                background: ${isDisabled ? '#ff4444' : '#00c851'}; color: white;">
                ${isDisabled ? 'OFF' : 'ON'}
            </button>
        `;
        list.appendChild(row);
    });
    
    // Also update the buttons on the public part of the site
    updateWebsiteButtons();
}

// 3. The Toggle Function
function toggleJobStatus(id) {
    const isCurrentlyDisabled = localStorage.getItem('disabled_' + id) === 'true';
    localStorage.setItem('disabled_' + id, !isCurrentlyDisabled);
    renderAdminCareers(); // Redraw the list immediately
}

// 4. Update the actual "Apply" buttons on the website
function updateWebsiteButtons() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    huluJobs.forEach((job, index) => {
        const btn = applyButtons[index];
        const isDisabled = localStorage.getItem('disabled_' + job.id) === 'true';
        if (btn) {
            btn.disabled = isDisabled;
            btn.innerHTML = isDisabled ? "Closed" : "Apply Now →";
            btn.style.opacity = isDisabled ? "0.5" : "1";
            btn.style.cursor = isDisabled ? "not-allowed" : "pointer";
        }
    });
}

// 5. CRITICAL: Update your switchTab function to include the render
function switchTab(event, tabId) {
    // Standard tab switching logic
    document.querySelectorAll('.apane').forEach(p => p.classList.remove('on'));
    document.querySelectorAll('.atab').forEach(t => t.classList.remove('on'));
    
    document.getElementById(tabId).classList.add('on');
    event.currentTarget.classList.add('on');

    // NEW: If you open Careers, force the jobs to show up!
    if(tabId === 'pCareers') {
        renderAdminCareers();
    }
}

// Ensure buttons are updated when the page first opens
document.addEventListener('DOMContentLoaded', updateWebsiteButtons);// Function to update the actual "Apply" buttons on the website
function updateWebsiteButtons() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    huluJobs.forEach((job, index) => {
        const btn = applyButtons[index];
        const isDisabled = localStorage.getItem('disabled_' + job.id) === 'true';
        
        if (btn) {
            if (isDisabled) {
                btn.disabled = true;
                btn.innerHTML = "Closed";
                btn.style.background = "#8e7d24"; // The muted gold color from your screenshot
                btn.style.color = "#222";
                btn.style.opacity = "0.8";
                btn.style.cursor = "not-allowed";
            } else {
                btn.disabled = false;
                btn.innerHTML = "Apply Now →";
                btn.style.background = "#e1ad01"; // Standard Mustard Yellow
                btn.style.color = "#050b18";
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";
            }
        }
    });
}function toggleViewer(btn, url) {
    const container = document.getElementById('view-container');
    const iframe = document.getElementsByName('pdf-frame')[0];

    // Check if it's currently hidden
    if (container.style.display === 'none' || container.style.display === '') {
        // OPENING THE VIEWER
        container.style.display = 'block';
        btn.innerHTML = '✕ close';
        btn.style.color = '#ff4444'; // Optional: make it red when it's a close button
    } else {
        // CLOSING THE VIEWER
        container.style.display = 'none';
        iframe.src = ''; // Stop the PDF from loading/playing
        btn.innerHTML = '👁 view';
        btn.style.color = ''; // Reset to original color
        
        // Prevent the link from actually following the URL when closing
        event.preventDefault(); 
    }
}document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.querySelector('.close-btn');

    cards.forEach(card => {
        // Remove 'title' attribute to prevent browser tooltips
        card.removeAttribute('title');

        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const details = card.getAttribute('data-details');

            modalTitle.innerHTML = title;
            modalText.innerHTML = details;
            modal.style.display = 'block';
            
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal function
    const shutModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.onclick = shutModal;
    window.onclick = (event) => { if (event.target == modal) shutModal(); };
});/// 1. THE INJECTION FUNCTION (Creates the HTML on every page)
function injectPrivacyModal() {
    // If modal already exists, don't inject again
    if(document.getElementById("privacyModal")) return;

    const modalHTML = `
    <div id="privacyModal" class="modal" style="display:none;">
      <div class="modal-content" id="modalContent">
        <div id="policy-view">
          <h2 class="title" style="color: #E1AD01;">Privacy Consent</h2>
          <div class="policy-text">
            <p>To continue using our platform, you must agree to our data practices. We use cookies to ensure site security and improve performance.</p>
          </div>
          <div class="button-group">
            <button id="acceptBtn" class="btn btn-accept">Accept & Continue</button>
            <button id="rejectBtn" class="btn btn-reject">Decline</button>
          </div>
        </div>
        <div id="success-view" style="display: none;">
          <div class="checkmark" style="color: #E1AD01; font-size: 50px;">✔</div>
          <h3>Access Granted</h3>
          <p>Thank you. Your preferences have been saved securely.</p>
          <button id="closeSuccess" class="btn btn-accept">Enter Site</button>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// 2. THE MASTER RUNNER
function initPrivacyLogic() {
    injectPrivacyModal();

    const modal = document.getElementById("privacyModal");
    const modalContent = document.getElementById("modalContent");
    const privacyLink = document.getElementById("privacyLink");
    const acceptBtn = document.getElementById("acceptBtn");
    const rejectBtn = document.getElementById("rejectBtn");
    const closeSuccess = document.getElementById("closeSuccess");
    const policyView = document.getElementById("policy-view");
    const successView = document.getElementById("success-view");

    const status = localStorage.getItem("privacyStatus");

    // Logic: If not accepted, lock the screen immediately
    if (status !== "accepted") {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    // Function to Shake the box
    const shakeModal = () => {
        modalContent.style.animation = "none";
        modalContent.offsetHeight; 
        modalContent.style.animation = "shake 0.4s ease-in-out";
    };

    // NAV LINK CLICK - This makes it work on ANY page
    if (privacyLink) {
        privacyLink.onclick = (e) => {
            e.preventDefault();
            modal.style.display = "block";
            policyView.style.display = "block";
            successView.style.display = "none";
        };
    }

    // ACCEPT
    acceptBtn.onclick = () => {
        localStorage.setItem("privacyStatus", "accepted");
        policyView.style.display = "none";
        successView.style.display = "block";
    };

    // REJECT
    rejectBtn.onclick = () => {
        localStorage.setItem("privacyStatus", "rejected");
        alert("Action Required: You must accept the Privacy Policy to browse this site.");
        shakeModal();
    };

    // ENTER SITE
    closeSuccess.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    // THE UNBREAKABLE BACKGROUND LOCK
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            if (localStorage.getItem("privacyStatus") !== "accepted") {
                shakeModal();
            } else {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    });

    modalContent.addEventListener('click', (e) => e.stopPropagation());
}

// Ensure it runs on every page load
window.addEventListener('DOMContentLoaded', initPrivacyLogic);
// Also run if the page is loaded via history/back button
window.addEventListener('pageshow', initPrivacyLogic);
